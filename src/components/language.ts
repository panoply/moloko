import { IAttrs } from 'types';
import m from 'mithril';
import { monaco } from '../monaco';
import { file } from './icons';

const LANGUAGE = [
  [ 'text', 'Plain Text', '#809abd' ],
  [ 'liquid', 'Liquid', '#004999' ],
  [ 'html', 'HTML', '#f16729' ],
  [ 'xml', 'XML', '#f16729' ],
  [ 'css', 'CSS', '#1472b6' ],
  [ 'scss', 'SCSS', '#cd6699' ],
  [ 'json', 'JSON', '#f5de1a' ],
  [ 'javascript', 'JavaScript', '#f5de1a' ],
  [ 'typescript', 'TypeScript', '#007acc' ],
  [ 'jsx', 'JSX', '#00d8fe' ],
  [ 'tsx', 'TSX', '#007acc' ],
  [ 'yaml', 'YAML', '#fbc02d' ]
];

export const Language: m.Component<IAttrs> = {
  view: ({
    attrs: {
      model,
      editor
    }
  }) => m(
    'div'
    , {
      style: {
        height: '100%'
      }
    },
    [
      m(
        '.select-lang',
        'Select Language'
      )
      , LANGUAGE.map((
        [
          language,
          langname,
          hex
        ]
      ) => m(
        'button.button[type="button"]'
        , {
          class: model.input.getLanguageId() === language ? 'current' : '',
          style: `--moloko-accent: ${hex}`,
          onclick: () => {

            const value = model.input.getValue();

            model.input.dispose();
            model.input = monaco.editor.createModel(value, language);

            editor.input.setModel(model.input);

          }
        }
        , [
          m('span', langname),
          file(language)
        ]
      ))
    ]
  )
};
