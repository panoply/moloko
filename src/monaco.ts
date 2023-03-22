import type { editor } from 'monaco-editor';
import { PotionTheme } from 'monaco/theme';
import { configuration, liquid } from 'monaco/liquid';
import { schema } from 'monaco/schema';
import esthetic, { LanguageName, Rules } from 'esthetic';
import { SAMPLE } from 'monaco/sample';
import { IConfig } from 'types';

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
export async function load ({ paths }: IConfig) {

  monaco = await import(paths.monaco);

  monaco.languages.setMonarchTokensProvider('liquid', liquid);
  monaco.languages.setLanguageConfiguration('liquid', configuration);

  self.MonacoEnvironment = {
    getWorkerUrl: (_, label) => {

      switch (label) {
        case 'json':
          return `${paths.workers}/json.js`;
        case 'css':
        case 'scss':
        case 'less':
          return `${paths.workers}/css.js`;
        case 'html':
        case 'xml':
        case 'liquid':
          return `${paths.workers}/html.js`;
        case 'javascript':
        case 'typescript':
        case 'jsx':
        case 'tsx':
          return `${paths.workers}/typescript.js`;
        default:
          return `${paths.workers}/editor.js`;
      }

    }
  };

}

/**
 * Set Monaco Defaults
 *
 * Assigns the `defaultValue` to Monaco and returns the `options`
 */
export function setEditorOptions (options: editor.IEditorOptions) {

  monaco.editor.defineTheme('potion', PotionTheme);
  monaco.editor.setTheme('potion');

  for (const option in options) {

    monaco.editor.EditorOptions[option].defaultValue = options[option];

  }

  return options;

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
