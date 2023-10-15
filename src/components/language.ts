import { IAttrs } from 'types/model';
import type { Component } from 'mithril';
import { m } from 'modules';
import { monaco } from '../monaco';
import { file } from '../utils/icons';
import { State } from 'utils/enums';

export const Language: Component<IAttrs> = {
  view: (
    {
      attrs
    }
  ) => attrs.language.state !== State.Hidden ? [
    m('.language-label', 'Select Language')
    , [
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
    ].map(
      (
        [
          language,
          langname,
          hex
        ]
      ) => m(
        'button.btn-language[type="button"]'
        , {
          class: attrs.language.current === language ? 'current' : '',
          style: `--moloko-accent: ${hex}`,
          onclick: () => {

            const value = attrs.input.model.getValue();

            attrs.input.model.dispose();
            attrs.input.model = monaco.editor.createModel(value, language);
            attrs.input.editor.setModel(attrs.input.model);
            attrs.language.current = language;
            attrs.language.detect = true;

          }
        }
        , [
          m('span', langname)
          , file(language)
        ]
      )
    )
  ] : null
};
