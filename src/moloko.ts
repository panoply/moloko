import type { IConfig } from 'types';
import * as hashed from './editor/hash';
import { model } from './model';
import { Sidebar } from './editor/sidebar';
import { Input } from './editor/input';
import { getMonacoModule, getInputModel, getRulesModel } from './monaco';
import { Preview } from './editor/preview';
import { IAttrs } from 'types/model';
import { Rules, RulesStatic } from './editor/rules';
import { Language } from './editor/language';
import { load, esthetic, m } from 'modules';
import { delay } from './editor/utils';
import { ParseTable } from './editor/table';

/**
 * Quickly checks if the editor session is
 * hashed and preloads any required modules.
 */
function setMolokoOptions (attrs: IAttrs) {

  esthetic.settings({ logColors: false });

  if (attrs.config.hash) {
    const { hash } = window.location;
    if (hash.charCodeAt(1) === 77 && hash.charCodeAt(2) === 61) attrs.hash = hash.slice(3);
  } else {
    attrs.hash = null;
  }

  if (attrs.hash) {

    const store = hashed.decode(attrs.hash);

    attrs.language = store.language;
    attrs.input.model = getInputModel(attrs.language.current, store.input.value);
    attrs.input.width = store.input.width;
    attrs.preview.model = getInputModel(attrs.language.current, store.input.value);
    attrs.preview.state = store.preview.state;
    attrs.preview.mode = store.preview.mode;
    attrs.preview.width = store.preview.width;
    attrs.rules.state = store.rules.state;
    attrs.rules.width = store.rules.width;
    attrs.rules.model = getRulesModel(attrs.language.current, store.rules.esthetic);

    esthetic.rules(store.rules.esthetic);

  } else {

    esthetic.rules({ language: attrs.language.current });

    if (attrs.config.preview.enable) attrs.preview.model = getInputModel(attrs.language.current);

    attrs.input.model = getInputModel(attrs.language.current);
    attrs.rules.model = getRulesModel(attrs.language.current, attrs.rules.esthetic);

    if (attrs.config.hash) {
      attrs.hash = hashed.encode(attrs);
    }

    return true;

  }
};

export async function loader (options: IConfig = {}): Promise<{
  readonly attrs: IAttrs;
  readonly esthetic: (dom: HTMLElement, attrs: IAttrs) => {
    mount: () => void;
    unmount: () => void;
  };
}> {

  const attrs = model.update(options);

  await load(attrs);

  try {
    await getMonacoModule(attrs.path);
  } catch (e) {
    throw new Error('Failed to load Monaco Editor Module', e);
  }

  const splash = setMolokoOptions(attrs);

  if (splash) await delay(2000);

  return {
    get attrs () {
      return attrs;
    },
    get esthetic () {
      return RulesStatic;
    }
  };

}

/**
 * Moloko Initialize
 */
export async function render (options: IConfig = {}) {

  const { attrs } = await loader(options);

  return {
    get attrs () { return attrs; },
    Rules,
    Preview
  };

}

export function hash () {

  return window.location.hash;

}

/**
 * Moloko Initialize
 */
export async function mount (element: HTMLElement, options: IConfig = {}) {

  const { attrs } = await loader(options);

  m.mount(
    element
    , {
      oncreate: () => {

        window.addEventListener('resize', () => {

          // make editor as small as possible
          attrs.input.editor.layout({ width: 0, height: 0 });
          attrs.preview.editor.layout({ width: 0, height: 0 });
          attrs.rules.editor.layout({ width: 0, height: 0 });

          window.requestAnimationFrame(() => {
            const ri = attrs.input.node.getBoundingClientRect();
            const rp = attrs.preview.node.getBoundingClientRect();
            const rr = attrs.rules.node.getBoundingClientRect();
            attrs.input.editor.layout({ width: ri.width, height: ri.height });
            attrs.preview.editor.layout({ width: rp.width, height: rp.height });
            attrs.rules.editor.layout({ width: rr.width, height: rr.height });
          });
        });

      },
      view: () => m(
        'moloko-editor'
        , m(Sidebar, attrs)
        , m(Language, attrs)
        , m(Rules, attrs)
        , m(Input, attrs)
        , m(Preview, attrs)
        , m(ParseTable, attrs)
      )
    }
  );

  return attrs;

}
