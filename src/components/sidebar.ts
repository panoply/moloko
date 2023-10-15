import { IActions, ISidebar } from 'types';
import type { IAttrs } from 'types/model';
import type { ClosureComponent } from 'mithril';
import { m } from 'modules';
import { file, icon } from '../utils/icons';
import { Mode, State } from 'utils/enums';
import { copyUrl, formatCode, isOpen, pixels } from 'utils/helpers';
import { encode } from 'editor/hash';

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

function transition (callback: () => void) {

  setTimeout(() => callback(), 300);
}

export const Sidebar: ClosureComponent<IAttrs> = ({ attrs }) => {

  /* -------------------------------------------- */
  /* CONSTANTS                                    */
  /* -------------------------------------------- */

  const actions = Object.entries(attrs.config.sidebar.actions);

  function onEsthetic (callback: () => void = null) {

    if (callback === null && attrs.language.state === State.Opened) return onLanguage(onEsthetic);

    if (attrs.preview.mode === Mode.ParseTable) {
      attrs.preview.mode = Mode.Formatted;
      m.redraw();
    }

    if (attrs.esthetic.state === State.Opened) {

      attrs.esthetic.editor.getContainerDomNode().parentElement.style.zIndex = '';
      attrs.esthetic.state = State.Toggle;

      transition(() => {

        attrs.esthetic.state = State.Hidden;

        if (isOpen(attrs.preview.state)) {
          attrs.preview.editor.layout({ width: pixels(50, 75), height: window.innerHeight });
        } else {
          attrs.preview.editor.layout({ width: pixels(100, 75), height: window.innerHeight });
        }

        m.redraw();
        return callback ? callback() : null;
      });

    } else if (attrs.esthetic.state === State.Hidden) {

      if (attrs.preview.state === State.Hidden) attrs.preview.state = State.Opened;

      attrs.esthetic.state = State.Opened;
      attrs.preview.editor.layout({ width: pixels(100, 675), height: window.innerHeight });

      transition(() => {
        attrs.esthetic.editor.getContainerDomNode().parentElement.style.zIndex = '300';
        m.redraw();
        return callback ? callback() : null;
      });

    }

  };

  function onLanguage (callback: () => void = null) {

    if (callback === null && attrs.esthetic.state === State.Opened) return onEsthetic(onLanguage);

    if (attrs.language.state === State.Opened) {

      attrs.language.state = State.Toggle;

      if (attrs.preview.state === State.Reopen || attrs.preview.state === State.Opened) {

        if (attrs.preview.mode === Mode.ParseTable) {
          attrs.preview.mode = Mode.Formatted;
          m.redraw();
        }

        attrs.preview.state = State.Opened;
      }

      if (attrs.preview.state === State.Opened) {
        attrs.preview.editor.layout({ width: pixels(50, 75), height: window.innerHeight });
        attrs.input.editor.layout({ width: pixels(50, 75), height: window.innerHeight });
      } else {
        attrs.input.editor.layout({ width: pixels(100, 75), height: window.innerHeight });
      }

      transition(() => {
        attrs.preview.editor.layout({ width: pixels(50, 75), height: window.innerHeight });
        attrs.language.state = State.Hidden;
        m.redraw();
        return callback ? callback() : null;
      });

    } else if (attrs.language.state === State.Hidden) {

      if (attrs.esthetic.state === State.Opened) return onEsthetic(onLanguage);

      attrs.input.editor.layout({ width: pixels(100, 200), height: window.innerHeight });
      attrs.language.state = State.Opened;

      if (attrs.preview.state === State.Opened) {
        attrs.preview.state = State.Reopen;
      }

      m.redraw();
      return callback ? callback() : null;
    }

  };

  function isActive (key: 'file' | 'rules' | 'table' | 'preview' | 'link' | 'export' | 'github') {

    if (key === 'rules' && attrs.esthetic.state === State.Opened) return 'active';
    if (key === 'file' && attrs.language.state === State.Opened) return 'active';
    if (
      key === 'table' &&
      attrs.preview.mode === Mode.ParseTable &&
      attrs.preview.state === State.Opened) return 'active';

    return '';

  }

  let copyIcon = icon('link');

  return {
    view: (
      {
        attrs
      }
    ) => [
      m(
        'button.btn-language[type="button"][data-tooltip="right"]'
        , {
          dataTooltip: 'right',
          ariaLabel: 'Change Language',
          onclick: onLanguage
        }
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
        ) => key !== 'link' ? [
          m(
            'button.btn-action[type="button"][data-tooltip="right"]'
            , {
              dataTooltip: 'right',
              ariaLabel: action.tooltip,
              class: isActive(key),
              onclick: () => {

                if (key === 'file') {

                  onEsthetic();

                } else if (key === 'rules') {

                  onEsthetic();

                } else if (key === 'preview' || key === 'table') {

                  if (attrs.language.state === State.Opened) {
                    onLanguage();
                  } else if (attrs.esthetic.state === State.Opened) {

                    onEsthetic();
                  }

                  if (key === 'table') {

                    if (attrs.preview.state === State.Hidden) {

                      attrs.preview.state = State.Opened;
                      attrs.preview.editor.getContainerDomNode().style.display = '';
                      attrs.input.editor.layout({ width: pixels(50, 75), height: window.innerHeight });

                      formatCode(attrs);

                      m.redraw();

                    }

                    if (attrs.preview.mode !== Mode.ParseTable) {
                      attrs.preview.mode = Mode.ParseTable;
                    } else {
                      attrs.preview.mode = Mode.Formatted;
                    }

                  } else {

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

                  }
                } else if (key === 'github') {

                  encode(attrs);

                  window.open(ghissue({
                    title: '',
                    labels: [ `${attrs.config.language}` ],
                    body: [
                      '<!-- DESCRIBE THE ISSUE -->',
                      '',
                      '',
                      '<!-- !! DO NOT EDIT BELOW THIS LINE !! -->',
                      '',
                    `[ÆSTHETIC PLAYGROUND LINK](${window.location.href})`
                    ].join('\n')
                  }), '_blank');

                }

              }
            }
            , key === 'preview'
              ? isOpen(attrs.preview.state)
                ? icon(action.icon)
                : icon('document')
              : icon(action.icon)
          )
        ] : m(
          'button.btn-action[type="button"][data-tooltip="right"]'
          , {
            dataTooltip: 'right',
            ariaLabel: action.tooltip,
            class: isActive(key),
            onclick: () => {
              const before = action.tooltip;
              action.tooltip = 'Copied!';
              copyIcon = icon('copy');
              encode(attrs);
              copyUrl();
              m.redraw();
              setTimeout(() => {
                m.redraw();
                action.tooltip = before;
                copyIcon = icon('link');
                m.redraw();
              }, 1000);
            }
          }
          , copyIcon
        )
      )

    ]
  };
};
