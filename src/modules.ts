import { IAttrs } from 'types/model';
import join from 'url-join';

/**
 * Æsthetic
 *
 * Æsthetic instance assigned after loading ESM module
 */
let esthetic: typeof import('esthetic');

/**
 * Æsthetic
 *
 * Æsthetic instance assigned after loading ESM module
 */
let m: typeof import('mithril');

/**
 * Import Modules
 *
 * The monaco editor module is loaded externally, this function
 * will trigger the import and assign the `monaco` let variable.
 */
export async function load (attrs: IAttrs) {

  if (attrs.config.resolve.esthetic === true) {

    try {
      const esm = await import(join(attrs.path, 'modules/esthetic.js'));
      esthetic = esm.default;
    } catch (e) {
      throw new Error('Failed to import Æsthetic', e);
    }

  } else if (typeof attrs.config.resolve.esthetic === 'string') {

    try {
      const esm = await import(attrs.config.resolve.esthetic);
      esthetic = esm.default;
    } catch (e) {
      throw new Error('Failed to import Æsthetic', e);
    }
  }

  if (attrs.config.resolve.mithril === true) {
    try {
      await import(join(attrs.path, 'modules/mithril.js'));
      // @ts-ignore
      m = window.m;
    } catch (e) {
      throw new Error('Failed to import Mithril', e);
    }
  } else if (typeof attrs.config.resolve.mithril === 'string') {
    try {
      await import(attrs.config.resolve.mithril);
      // @ts-ignore
      m = window.m;
    } catch (e) {
      throw new Error('Failed to import Mithril', e);
    }
  }

  if (typeof attrs.config.samples === 'boolean') {
    if (attrs.config.samples === true) {
      for (const language in attrs.documents) {
        try {
          const code = await import(join(attrs.path, `sample/${language}.js`));
          // @ts-ignore
          attrs.documents[language].sample = code.default;
        } catch (e) {
          throw new Error(`Failed to import ${language} code sample`, e);
        }
      }
    }
  } else if (typeof attrs.config.samples === 'object') {
    for (const language in attrs.config.samples) {
      if (attrs.config.samples[language] === true) {
        try {

          console.log(join(attrs.path, `sample/${language}.js`));
          const code = await import(join(attrs.path, `sample/${language}.js`));
          // @ts-ignore
          attrs.documents[language].sample = code.default;
        } catch (e) {
          throw new Error(`Failed to import ${language} code sample`, e);
        }
      }
    }
  }

}

export { esthetic, m };
