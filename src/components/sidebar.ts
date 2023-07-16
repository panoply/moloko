import { IActions, ISidebar } from 'types';
import type { IAttrs } from 'types/model';
import type { ClosureComponent } from 'mithril';
import { m } from 'modules';
import { file, icon } from '../utils/icons';
import { State } from 'utils/enums';
import { formatCode, isOpen, pixels } from 'utils/helpers';

export function ghissue (options = {}) {

  const url = new URL('https://github.com/panoply/esthetic/issues/new');

  const types = [
    'body',
    'title',
    'labels',
    'template',
    'milestone',
    'assignee',
    'projects'
  ];

  for (const type of types) {

    let value = options[type];

    if (value === undefined) continue;

    if (type === 'labels' || type === 'projects') {
      if (!Array.isArray(value)) throw new TypeError(`The \`${type}\` option should be an array`);
      value = value.join(',');
    }

    url.searchParams.set(type, value);

  }

  return url.toString();
}

export const Sidebar: ClosureComponent<IAttrs> = ({ attrs }) => {

  /* -------------------------------------------- */
  /* CONSTANTS                                    */
  /* -------------------------------------------- */

  const actions = Object.entries(attrs.config.sidebar.actions);

  const onEsthetic = () => {

    if(attrs.language.state === State.Opened) {

      attrs.language.state = State.Toggle;

      setTimeout(() => {

        attrs.language.state = State.Hidden

        if (isOpen(attrs.preview.state)) {
          attrs.input.editor.layout({ width: pixels(50, 75), height: window.innerHeight });
        } else {
          attrs.input.editor.layout({ width: pixels(100, 75),  height: window.innerHeight });
        }

        onEsthetic()

      }, 300)

    } else {

      if (attrs.esthetic.state === State.Opened) {

        attrs.esthetic.state = State.Toggle;

        setTimeout(() => {

          attrs.esthetic.state = State.Hidden


          if (isOpen(attrs.preview.state)) {
            attrs.input.editor.layout({ width: pixels(50, 75), height: window.innerHeight });
          } else {
            attrs.input.editor.layout({ width: pixels(100, 75),  height: window.innerHeight });
          }


          last = ''
          m.redraw()

        }, 300)


      } else if (attrs.esthetic.state === State.Hidden) {

        attrs.esthetic.state = State.Opened;
        attrs.input.editor.layout({ width: pixels(100, 675), height: window.innerHeight });

        last = 'rules'
        m.redraw()

      }

    }
  };

  const onLanguage = () => {

    if(attrs.esthetic.state === State.Opened) {

      attrs.esthetic.state = State.Toggle;

      setTimeout(() => {

        attrs.esthetic.state = State.Hidden

        if (isOpen(attrs.preview.state)) {
          attrs.input.editor.layout({ width: pixels(50, 75), height: window.innerHeight });
        } else {
          attrs.input.editor.layout({ width: pixels(100, 75), height: window.innerHeight });
        }

      last = ''
       onLanguage()

      }, 300)

    } else {

      if (attrs.language.state === State.Opened) {

        attrs.language.state = State.Toggle;

        setTimeout(() => {

          attrs.language.state = State.Hidden

          if (isOpen(attrs.preview.state)) {
            attrs.input.editor.layout({ width: pixels(50, 75), height: window.innerHeight });
          } else {
            attrs.input.editor.layout({ width: pixels(100, 75),  height: window.innerHeight });
          }


          m.redraw()

        }, 300)

      } else if (attrs.language.state === State.Hidden) {

        // attrs.preview.state = State.Hidden;
        attrs.language.state = State.Opened;
        attrs.input.editor.layout({ width: pixels(100, 275), height: window.innerHeight });

        m.redraw()


      }

    }

  };

  let last: string;

  return {
    view: (
      {
        attrs
      }
    ) => [
      m(
        'button.btn-language[type="button"]'
        , { onclick: onLanguage }
        , file(attrs.language.current)
      )
      , actions.map(
        (
          [
            key,
            action
          ]: [
            keyof ISidebar['actions'],
            IActions
          ]
        ) => m(
          'button.btn-action[type="button"][data-tooltip="right"]'
          , {
            dataTooltip: 'right',
            ariaLabel: action.tooltip,
            class: last === key ? 'active' : '',
            onclick: () => {

              console.log(key)

              if (key === 'file') {

                onEsthetic();

              } else if (key === 'rules') {

                onEsthetic();

              } else if (key === 'preview') {

                if(attrs.language.state === State.Opened) {
                  onLanguage()
                } else if (attrs.esthetic.state === State.Opened) {
                  onEsthetic()
                }

                if (attrs.preview.state === State.Opened) {

                  attrs.preview.state = State.Hidden;
                  attrs.preview.editor.getContainerDomNode().style.display = 'none';
                  attrs.input.editor.layout({ width: pixels(100, 75), height: window.innerHeight });

                } else if (attrs.preview.state === State.Hidden) {

                  attrs.preview.state = State.Opened;
                  attrs.preview.editor.getContainerDomNode().style.display = '';
                  attrs.input.editor.layout({ width: pixels(50, 75), height: window.innerHeight });

                  formatCode(attrs);

                }
              } else if (key === 'github') {
                window.open(ghissue({
                  title: '',
                  labels: [`${attrs.config.language}`],
                  body: [
                    '<!-- DESCRIBE THE ISSUE -->',
                    '',
                    '',
                    '<!--',
                    '  DO NOT EDIT BELOW THIS LINE AS IT CONTAINS PLAYGROUND LINK',
                    '-->',
                    '',
                    `[ÆSTHETIC PLAYGROUND](${window.location.href})`,
                  ].join('\n')
                }), "_blank");
              }

            }
          }
          , key === 'preview'
            ? isOpen(attrs.preview.state)
              ? icon(action.icon)
              : icon('document')
            : icon(action.icon)
        )
      )
    ]
  };
};
