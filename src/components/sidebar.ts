import { IActions, ISidebar } from 'types';
import { IAttrs } from 'types/model';
import m from 'mithril';
import { file, icon } from '../utils/icons';
import { State } from 'utils/enums';
import { formatCode, isOpen, pixels, setWidths, toggleRedraw } from 'utils/helpers';

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

export const Sidebar: m.ClosureComponent<IAttrs> = ({ attrs }) => {

  /* -------------------------------------------- */
  /* CONSTANTS                                    */
  /* -------------------------------------------- */

  const actions = Object.entries(attrs.config.sidebar.actions);

  const onEsthetic = () => {

    if (attrs.esthetic.state === State.Opened) {

      attrs.esthetic.state = State.Hidden;

      if (isOpen(attrs.preview.state)) {
        attrs.input.editor.layout({
          width: pixels(50),
          height: window.innerHeight
        });
      } else {
        attrs.input.editor.layout({
          width: pixels(100, 75),
          height: window.innerHeight
        });
      }

    } else if (attrs.esthetic.state === State.Hidden) {

      attrs.esthetic.state = State.Opened;

      attrs.input.editor.layout({
        width: pixels(100, 700),
        height: window.innerHeight
      });

    }

    m.redraw();

  };

  const onLanguage = () => {

    if (attrs.language.state === State.Opened) {

      attrs.language.state = State.Hidden;

      if (isOpen(attrs.preview.state)) {
        attrs.input.editor.layout({
          width: pixels(50),
          height: window.innerHeight
        });
      } else {
        attrs.input.editor.layout({
          width: pixels(100, 75),
          height: window.innerHeight
        });
      }

    } else if (attrs.language.state === State.Hidden) {

      attrs.preview.state = State.Hidden;
      attrs.language.state = State.Opened;

      attrs.input.editor.layout({
        width: pixels(100, 275),
        height: window.innerHeight
      });

      m.redraw();

    }

  };

  let last: HTMLButtonElement;

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
            onclick: (event) => {

              if (last === event.currentTarget) {
                last.classList.remove('active');
                last = undefined;
              } else {
                last = event.currentTarget;
                last.classList.add('active');
              }

              if (key === 'file') {
                onEsthetic();
              } else if (key === 'rules') {
                onEsthetic();
              } else if (key === 'preview') {

                if (attrs.preview.state === State.Opened) {
                  attrs.preview.state = State.Hidden;
                  attrs.preview.editor.getContainerDomNode().style.display = 'none';
                  attrs.input.editor.layout({
                    width: pixels(100, 75),
                    height: window.innerHeight
                  });
                } else if (attrs.preview.state === State.Hidden) {
                  attrs.preview.state = State.Opened;
                  attrs.preview.editor.getContainerDomNode().style.display = '';
                  attrs.input.editor.layout({
                    width: pixels(50, 75),
                    height: window.innerHeight
                  });
                  formatCode(attrs);
                }
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
