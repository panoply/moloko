import { IActions, IAttrs, ISidebar } from 'types';
import m from 'mithril';
import { file, icon } from './icons';
import { config } from 'attrs';
import esthetic from 'esthetic';
import { monaco } from '../monaco';

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

  const actions = Object.entries(config.sidebar.actions);

  const timeout = (prop: 'languagesOpen' | 'rulesOpen' | 'previewOpen') => () => {
    attrs[prop] = 0;
    m.redraw();
  };

  const closeRules = (action: IActions) => {

    if (attrs.rulesOpen === 1) {
      action.active = false;
      attrs.rulesOpen = 2;
      setTimeout(timeout('rulesOpen'), 250);
    } else if (attrs.rulesOpen === 0) {
      attrs.rulesOpen = 1;
      action.active = true;
    } else {
      action.active = false;
    }

  };

  const closePreview = async (action: IActions) => {

    if (config.sidebar.actions.rules.active) {
      closeRules(config.sidebar.actions.rules);
    }

    if (attrs.previewOpen === 1) {

      action.active = false;
      attrs.previewOpen = 0;

    } else if (attrs.previewOpen === 0) {

      attrs.previewOpen = 1;
      action.active = true;

      const value = attrs.model.input.getValue();
      const text = esthetic.format(value);
      attrs.model.preview = await monaco.editor.colorize(text, attrs.model.input.getLanguageId(), {});

    }

  };

  const closeLanguage = () => {

    if (config.sidebar.actions.rules.active) {
      closeRules(config.sidebar.actions.rules);
    }

    if (attrs.languagesOpen === 1) {
      attrs.languagesOpen = 2;
      setTimeout(timeout('languagesOpen'), 250);
    } else {
      attrs.languagesOpen = 1;
    }

  };

  return {
    view: ({ attrs: { model } }) => m(
      '.moloko-sidebar'
      , {
        style: {
          width: `${config.sidebar.width}px`,
          top: `${config.offset}px`,
          background: config.sidebar.background,
          borderColor: attrs.languagesOpen === 1 ? config.colors.backdrop : config.colors.borders
        }
      }
      , m(
        'button.button.lang[type="button"]'
        , {
          style: {
            backgroundColor: attrs.languagesOpen === 1 ? config.colors.backdrop : 'initial'
          },
          onclick: closeLanguage
        }
        , file(model.input.getLanguageId())
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
          'button.button[type="button"][data-tooltip="right"]'
          , {
            dataTooltip: 'right',
            ariaLabel: action.tooltip,
            onclick: async () => {

              if (attrs.languagesOpen !== 0) closeLanguage();

              if (key === 'file') {
                config.sidebar.actions.rules.active = false;
                closeRules(action);
              } else if (key === 'rules') {
                closeRules(action);
              } else if (key === 'preview') {
                await closePreview(action);
              }

            },
            style: {
              '--moloko-accent': config.colors.accents,
              color: action.active ? config.colors.accents : ''
            }
          }
          , key === 'preview'
            ? action.active ? icon(action.icon) : icon('document') : icon(action.icon)
        )
      )
    )
  };
};
