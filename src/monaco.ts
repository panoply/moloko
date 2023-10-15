import { PotionTheme, PotionThemeLightBackground } from 'monaco/theme';
import { configuration, liquid } from 'monaco/liquid';
import { schema } from 'monaco/schema';
import type { LanguageName, Rules } from 'esthetic';
import { SAMPLE } from 'monaco/sample';
import join from 'url-join';
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
  monaco.editor.defineTheme('potion-light', PotionThemeLightBackground);
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
 * Generates a rules editor model for Æsthetic
 */
export function getRulesModel (language: LanguageName, rules: Rules) {

  let input: string;

  if (rules) {
    input = JSON.stringify(rules, null, 2);
  } else {
    input = JSON.stringify({
      crlf: false,
      correct: false,
      preset: 'default',
      language,
      endNewline: false,
      indentChar: ' ',
      indentLevel: 0,
      indentSize: 2,
      preserveLine: 2,
      wrap: 0,
      wrapFraction: 0,
      liquid: {
        commentNewline: false,
        commentIndent: true,
        delimiterTrims: 'preserve',
        delimiterPlacement: 'preserve',
        forceFilter: 0,
        forceArgument: 0,
        ignoreTagList: [],
        indentAttribute: false,
        lineBreakSeparator: 'before',
        normalizeSpacing: true,
        preserveComment: false,
        preserveInternal: false,
        dedentTagList: [],
        quoteConvert: 'none'
      },
      markup: {
        attributeCasing: 'preserve',
        attributeSort: false,
        commentNewline: false,
        commentDelimiters: 'force',
        commentIndent: true,
        delimiterTerminus: 'inline',
        forceAttribute: 3,
        forceIndent: false,
        ignoreCSS: false,
        ignoreJS: true,
        ignoreJSON: false,
        lineBreakValue: 'preserve',
        preserveComment: false,
        preserveText: false,
        preserveAttribute: false,
        selfCloseSpace: true,
        selfCloseSVG: true,
        stripAttributeLines: false,
        quoteConvert: 'none'
      },
      json: {
        arrayFormat: 'default',
        braceAllman: false,
        bracePadding: false,
        objectIndent: 'default',
        objectSort: false
      },
      style: {
        commentIndent: false,
        commentNewline: false,
        atRuleSpace: true,
        classPadding: false,
        noLeadZero: false,
        preserveComment: false,
        sortSelectors: false,
        sortProperties: false,
        quoteConvert: 'none',
        correct: false
      },
      script: {
        arrayFormat: 'default',
        braceNewline: false,
        bracePadding: false,
        braceStyle: 'none',
        braceAllman: false,
        caseSpace: false,
        commentIndent: false,
        commentNewline: false,
        elseNewline: false,
        endComma: 'never',
        functionNameSpace: false,
        functionSpace: false,
        inlineReturn: true,
        methodChain: 4,
        neverFlatten: false,
        noCaseIndent: false,
        noSemicolon: false,
        objectSort: false,
        objectIndent: 'default',
        preserveComment: false,
        quoteConvert: 'none',
        styleGuide: 'none',
        ternaryLine: false,
        variableList: true,
        vertical: false
      }
    }, null, 2);
  }

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
