import type { IAttrs } from 'types/model';
import type { Style } from 'types/moloko';
import type { Component } from 'mithril';
import { m } from 'modules';
import { monaco } from '../monaco';
import { file } from './icons';
import { formatCode } from './utils';

export const Language: Component<IAttrs> = {
  oncreate: (
    {
      dom,
      attrs
    }
  ) => {

    attrs.language.node = dom as HTMLElement;

  },
  view: (
    {
      attrs
    }
  ) => m(
    'moloko-language'
    , {
      style: <Style>{
        flex: 0
      }
    }
    , [
      m(
        'h1.language-label'
        , 'Select Language'
      )
      , [
        [ 'plaintext', 'Plain Text', '#809abd' ],
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
      ].map(
        (
          [
            language,
            langname,
            hex
          ]
        ) => m(
          'button.language'
          , {
            type: 'button',
            class: attrs.language.current === language ? 'current' : '',
            style: `--moloko-accent: ${hex}`,
            onclick: () => {

              const cache = attrs.documents[attrs.language.current];
              const value = attrs.documents[language].input === ''
                ? attrs.documents[language].sample
                : attrs.documents[language].input;

              cache.input = attrs.input.model.getValue();

              attrs.input.model.dispose();
              attrs.input.model = monaco.editor.createModel(value, language);
              attrs.input.editor.setModel(attrs.input.model);
              attrs.preview.editor.setModel(attrs.input.model);
              attrs.language.current = language;
              attrs.language.detect = true;

              formatCode(attrs);

            }
          }
          , m('span', langname)
          , file(language)
        )
      )
    ]
  )
};
