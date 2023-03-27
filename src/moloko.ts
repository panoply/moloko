import type { IConfig, Style } from 'types';
import esthetic from 'esthetic';
import * as hash from 'editor/hash';
import { model } from 'src/model';
import m from 'mithril';
import { Sidebar } from 'src/components/sidebar';
import { Input } from 'editor/input';
import { getMonacoModule, getInputModel, getRulesModel } from './monaco';
import { Preview } from 'editor/preview';
import { IAttrs } from 'types/model';
import { Esthetic } from 'editor/esthetic';
import { Language } from './components/language';
import { State } from 'utils/enums';

/**
 * Quickly checks if the editor session is
 * hashed and preloads any required modules.
 */
function setMolokoOptions (attrs: IAttrs) {

  esthetic.config({ logColors: false });

  if (attrs.config.hash) {
    const { hash } = window.location;
    if (hash.charCodeAt(1) === 77 && hash.charCodeAt(2) === 61) attrs.hash = hash.slice(3);
  } else {
    attrs.hash = null;
  }

  if (attrs.hash) {

    const store = hash.decode(attrs.hash);

    attrs.language = store.language;
    attrs.input.model = getInputModel(attrs.language.current, store.input.value);
    attrs.preview.model = getInputModel(attrs.language.current, store.input.value);
    attrs.input.width = store.input.width;
    attrs.preview.state = store.preview.state;
    attrs.preview.mode = store.preview.mode;
    attrs.preview.width = store.preview.width;
    attrs.esthetic.state = store.esthetic.state;
    attrs.esthetic.width = store.esthetic.width;
    attrs.esthetic.model = getRulesModel(store.esthetic.rules);

    esthetic.rules(store.esthetic.rules);

  } else {

    esthetic.rules({ language: attrs.language.current });

    attrs.input.model = getInputModel(attrs.language.current);
    attrs.preview.model = getInputModel(attrs.language.current);
    attrs.esthetic.model = getRulesModel(attrs.esthetic.rules);

  }
};

/**
 * Moloko Initialize
 */
export async function mount (element: HTMLElement, options: IConfig = {}) {

  const attrs = model(options);

  try {
    await getMonacoModule(attrs.path);
  } catch (e) {
    throw new Error('Failed to load Monaco', e);
  }

  setMolokoOptions(attrs);

  document.body.style.overflow = 'hidden';

  m.mount(element, {
    view: () => m(
      'section.moloko-editor'
      , { style: <Style>{ top: `${attrs.config.offset}px` } }
      , [
        m(
          'aside.moloko-sidebar'
          , m(Sidebar, attrs)
        )
        ,
        attrs.language.state === State.Opened ? m(
          'aside.moloko-language'
          , m(Language, attrs)
        ) : null
        ,
        attrs.esthetic.state === State.Opened ? m(
          'section.moloko-esthetic'
          , m(Esthetic, attrs)
        ) : null
        ,
        m(
          'section.moloko-input'
          , m(Input, attrs)
        )
        ,
        attrs.preview.state === State.Opened ? m(
          'section.moloko-preview'
          , m(Preview, attrs)
        ) : null
      ]
    )
  });

  return attrs;

}
