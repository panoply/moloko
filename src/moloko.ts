import type { IConfig, Style } from 'types';
import * as hash from 'editor/hash';
import { model } from 'src/model';
import { Sidebar } from 'src/components/sidebar';
import { Input } from 'editor/input';
import { getMonacoModule, getInputModel, getRulesModel } from './monaco';
import { Preview } from 'editor/preview';
import { IAttrs } from 'types/model';
import { Esthetic, EstheticStatic } from 'editor/esthetic';
import { Language } from './components/language';
import { State } from 'utils/enums';
import { load, esthetic, m } from 'modules';

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
    attrs.esthetic.model = getRulesModel(attrs.language.current, store.esthetic.rules);

    esthetic.rules(store.esthetic.rules);

  } else {

    esthetic.rules({ language: attrs.language.current });

    if (attrs.config.preview.enable) attrs.preview.model = getInputModel(attrs.language.current);

    attrs.input.model = getInputModel(attrs.language.current);
    attrs.esthetic.model = getRulesModel(attrs.language.current, attrs.esthetic.rules);

  }
};

export async function loader (options: IConfig = {}): Promise<{
  readonly attrs: IAttrs;
  readonly esthetic: (dom: HTMLElement, attrs: IAttrs) => {
    mount: () => void;
    unmount: () => void;
  };
}> {

  const attrs = model(options);

  await load(attrs);

  try {
    await getMonacoModule(attrs.path);
  } catch (e) {
    throw new Error('Failed to load Monaco', e);
  }

  setMolokoOptions(attrs);

  return {
    get attrs () {
      return attrs;
    },
    get esthetic () {
      return EstheticStatic;
    }
  };

}

/**
 * Moloko Initialize
 */
export async function render (element: HTMLElement, options: IConfig = {}) {

  const { attrs } = await loader(options);

  return {
    get attrs () {
      return attrs;
    },
    Esthetic,
    Preview
  };

}

/**
 * Moloko Initialize
 */
export async function mount (element: HTMLElement, options: IConfig = {}) {

  const { attrs } = await loader(options);

  const toggles = (prop: string) => {
   return attrs[prop].state === State.Opened
    ? '.open'
    : attrs[prop].state === State.Toggle
      ? '.close'
    : ''
  }

  m.mount(element, {
    view: () => m(
      'section.moloko-editor'
      , { style: <Style>{ top: `${attrs.config.offset}px` } }
      , [
        attrs.config.sidebar.enable ? m(
          'aside.moloko-sidebar'
          , m(Sidebar, attrs)
        ) : null
        ,
         m(
          'aside.moloko-language' + toggles('language')
          , m(Language, attrs)
        )
        ,
         m(
          'section.moloko-esthetic' + toggles('esthetic')
          , m(Esthetic, attrs)
        )
        ,
        m(
          'section.moloko-input'
          , m(Input, attrs)
        )
        ,
        attrs.config.preview.enable && attrs.preview.state === State.Opened ? m(
          'section.moloko-preview'
          , m(Preview, attrs)
        ) : null
      ]
    )
  });

  return attrs;

}
