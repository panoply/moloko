import { PotionTheme } from 'monaco/theme';
import { configuration, liquid } from 'monaco/liquid';
import { schema } from 'monaco/schema';
import type { LanguageName, Rules } from 'esthetic';
import { SAMPLE } from 'monaco/sample';
import join from 'url-join';
import { esthetic } from 'modules';
import { loadExternalCSS } from 'utils/helpers';

/**
 * Monaco Editor
 *
 * Monaco instance assign after loading ESM module
 */
export let monaco: typeof import('monaco-editor');

/**
 * Import Monaco
 *
 * The monaco editor module is loaded externally, this function
 * will trigger the import and assign the `monaco` let variable.
 */
export async function getMonacoModule (path: string) {

  loadExternalCSS(path);

  monaco = await import(join(path, 'monaco/monaco.js'));

  monaco.editor.defineTheme('potion', PotionTheme);
  monaco.editor.setTheme('potion');
  monaco.languages.setMonarchTokensProvider('liquid', liquid);
  monaco.languages.setLanguageConfiguration('liquid', configuration);
  monaco.languages.html.registerHTMLLanguageService('liquid');
  monaco.languages.register({
    id: 'liquid',
    extensions: [ '.liquid' ],
    aliases: [ 'Liquid', 'liquid' ],
    mimetypes: [ 'text/liquid' ]
  });

  self.MonacoEnvironment = {
    getWorkerUrl: (_, label) => {

      switch (label) {
        case 'json':
          return join(path, 'monaco/workers', 'json.js');
        case 'css':
        case 'scss':
        case 'less':
          return join(path, 'monaco/workers', 'css.js');
        case 'html':
        case 'xml':
        case 'liquid':
          return join(path, 'monaco/workers', 'html.js');
        case 'javascript':
        case 'typescript':
        case 'jsx':
        case 'tsx':
          return join(path, 'monaco/workers', 'typescript.js');
        default:
          return join(path, 'monaco/workers', 'editor.js');
      }

    }
  };

}

/**
 * Editor Model
 *
 * Generates the base input editor model
 */
export function getInputModel (language: LanguageName, input: string = SAMPLE) {

  return monaco.editor.createModel(input, language);

}

/**
 * Rules Model
 *
 * Generages a rules editor model for Æsthetic
 */
export function getRulesModel (rules: Rules) {

  const input: string = JSON.stringify(rules ? esthetic.rules() : rules, null, 2);

  // configure the JSON language support with schemas and schema associations
  monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
    validate: true,
    enableSchemaRequest: true,
    schemas: [
      {
        uri: 'http://myserver/foo-schema.json',
        fileMatch: [ '*' ], // associate with our model
        schema
      }
    ]
  });

  return monaco.editor.createModel(input, 'json');

}
