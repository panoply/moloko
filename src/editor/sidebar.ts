import type { IActions, ISidebar, Style } from 'types';
import type { IAttrs } from 'types/model';
import type { ClosureComponent, Component, Vnode } from 'mithril';
import { m } from 'modules';
import { file, icon } from './icons';
import { State } from './enums';
import { copyUrl, formatCode, isOpen, entries } from './utils';
import { encode } from './hash';
import { ghissue } from './github';

function isActive (attrs: IAttrs, key: (
  | 'file'
  | 'rules'
  | 'table'
  | 'preview'
  | 'link'
  | 'export'
  | 'ghissue'
)) {

  if (attrs.table.state === State.Opened && (key === 'preview' || key === 'rules')) return 'disable';
  if (attrs.rules.state === State.Opened) {
    if (key === 'rules') return 'active';
    if (key === 'table' || key === 'preview') return 'disable';
  }

  if (key === 'file' && attrs.language.state === State.Opened) return 'active';
  if (key === 'table' && attrs.table.state === State.Opened) return 'active';

  return '';

}

function getTooltip (attrs: IAttrs, key: keyof ISidebar['actions'], action: IActions) {

  if (key === 'preview') {

    if (isOpen(attrs.table.state)) return 'Disabled in Parse Table Mode';
    if (isOpen(attrs.rules.state)) return 'Previewing Rule Changes';

  } else if (key === 'rules') {

    if (isOpen(attrs.table.state)) return 'Disabled in Parse Table Mode';

  } else if (key === 'table') {

    if (isOpen(attrs.rules.state)) return 'Disabled in Rule Mode';

  }

  return action.tooltip;

}

function getIcon (attrs: IAttrs, key: keyof ISidebar['actions'], action: IActions) {

  if (key === 'preview') {
    if (attrs.rules.state === State.Opened) return icon('eye');
    return attrs.preview.state === State.Opened ? icon(action.icon) : icon('document');
  }

  return icon(action.icon);
}

function onPreview (attrs: IAttrs, callback: () => void = null) {

  if (
    attrs.preview.state === State.Toggle ||
    attrs.preview.state === State.Reopen ||
    attrs.rules.state === State.Opened) return;

  if (attrs.preview.state === State.Opened) {

    if (attrs.table.state === State.Opened) {
      attrs.table.state = State.Toggle;
      attrs.table.node.style.flexGrow = '0';
      attrs.table.node.ontransitionend = () => {
        attrs.table.state = State.Hidden;
        attrs.rules.state = State.Hidden;
        callback && callback();
        m.redraw();
      };
    }

    attrs.preview.state = State.Toggle;
    attrs.preview.node.style.flexGrow = '0';
    attrs.preview.node.ontransitionend = () => {
      attrs.preview.state = State.Hidden;
      callback && callback();
      m.redraw();
    };

  } else if (attrs.preview.state === State.Hidden) {

    attrs.preview.state = State.Toggle;
    attrs.preview.node.style.flexGrow = '1';
    attrs.preview.node.ontransitionend = () => {
      attrs.preview.state = State.Opened;
      callback && callback();
      m.redraw();
    };
  }

}

function onRules (attrs: IAttrs, callback: () => void = null) {

  if (attrs.rules.state === State.Toggle || attrs.rules.state === State.Reopen) return;

  if (attrs.rules.state === State.Opened) {

    if (attrs.input.state === State.Reopen) {

      attrs.input.node.style.flexGrow = '1';

      attrs.preview.node.style.flexGrow = '0';
      attrs.preview.state = State.Toggle;
      attrs.preview.node.ontransitionend = () => {
        attrs.preview.state = State.Hidden;
        callback && callback();
        m.redraw();
      };
    } else {

      attrs.input.node.style.flexGrow = String(attrs.input.width);
      attrs.preview.node.style.flexGrow = String(attrs.preview.width);

    }

    attrs.rules.state = State.Toggle;
    attrs.rules.node.style.flexGrow = '0';
    attrs.rules.node.ontransitionend = () => {
      attrs.rules.state = State.Hidden;
      attrs.table.state = State.Hidden;
      attrs.input.state = State.Opened;
      formatCode(attrs);
      callback && callback();
      m.redraw();
    };

  } else if (attrs.rules.state === State.Hidden) {

    if (attrs.language.state === State.Opened) {

      onLanguage(attrs, () => onRules(attrs));

    } else {

      attrs.rules.node.style.flexGrow = '.6';
      attrs.rules.state = State.Toggle;
      attrs.table.state = State.Disable;

      attrs.preview.node.style.flexGrow = '1';
      attrs.input.node.style.flexGrow = '0';

      if (attrs.preview.state === State.Hidden) {
        attrs.preview.state = State.Toggle;
        attrs.input.state = State.Reopen;
      }

      attrs.rules.node.ontransitionend = () => {
        attrs.rules.state = State.Opened;
        attrs.preview.state = State.Opened;
        callback && callback();
        m.redraw();
      };
    }
  }

}

function onLanguage (attrs: IAttrs, callback: () => void = null) {

  if (attrs.language.state === State.Opened) {

    attrs.language.node.style.flexGrow = '0';
    attrs.language.node.ontransitionend = () => {
      attrs.language.state = State.Hidden;
      callback && callback();
      m.redraw();
    };
  } else {

    if (attrs.rules.state === State.Opened) {

      onRules(attrs, () => onLanguage(attrs));

    } else {

      attrs.language.node.style.flexGrow = '0.35';
      attrs.language.state = State.Toggle;
      attrs.language.node.ontransitionend = () => {
        attrs.language.state = State.Opened;
        callback && callback();
      };

    }
  }

}

function onParseTable (attrs: IAttrs) {

  if (attrs.table.state === State.Toggle || attrs.table.state === State.Reopen) return;

  if (attrs.table.state === State.Opened) {

    if (attrs.preview.state === State.Reopen) {
      attrs.preview.state = State.Toggle;
      attrs.preview.node.style.flexGrow = '1';
      attrs.preview.node.ontransitionend = () => {
        attrs.preview.state = State.Opened;
        m.redraw();
      };
    }

    attrs.table.state = State.Toggle;
    attrs.table.node.style.flexGrow = '0';
    attrs.table.node.ontransitionend = () => {
      attrs.table.state = State.Hidden;
      attrs.rules.state = State.Hidden;
      m.redraw();
    };

  } else if (attrs.table.state === State.Hidden) {

    if (attrs.preview.state === State.Opened) {
      attrs.preview.state = State.Toggle;
      attrs.preview.node.style.flexGrow = '0';
      attrs.preview.node.ontransitionend = () => {
        attrs.preview.state = State.Reopen;
        m.redraw();
      };
    }

    attrs.table.state = State.Toggle;
    attrs.table.node.style.flexGrow = '1';
    attrs.table.node.ontransitionend = () => {
      attrs.table.state = State.Opened;
      attrs.rules.state = State.Disable;
      m.redraw();
    };

  }

}

function onCopy (action: IActions, attrs: IAttrs, state: { copy: Vnode }) {

  const before = action.tooltip;

  action.tooltip = 'Copied!';
  state.copy = icon('copy');

  encode(attrs);
  copyUrl();

  setTimeout(() => {

    action.tooltip = before;
    state.copy = icon('link');
    m.redraw();

  }, 750);

}

function onAction (key: keyof ISidebar['actions'], attrs: IAttrs) {

  if (key === 'file') {

    onRules(attrs);

  } else if (key === 'rules') {

    onRules(attrs);

  } else if (key === 'preview') {

    onPreview(attrs);

  } else if (key === 'table') {

    onParseTable(attrs);

  } else if (key === 'ghissue') {

    encode(attrs);

    window.open(ghissue({ title: '', labels: [ attrs.config.language ], body: '' }), '_blank');

  }
}

export const Sidebar: ClosureComponent<IAttrs> = (
  {
    attrs
  }
): Component<IAttrs, {
  copy: Vnode;
}> => ({
  oninit: (
    {
      state
    }
  ) => {

    state.copy = icon('link');

  },
  view: (
    {
      state
    }
  ) => attrs.config.sidebar.enable ? m(
    'moloko-sidebar'
    , {
      style: <Style>{
        top: `${attrs.config.offset}px`
      }
    }
    , m(
      'button.moloko-language[data-tooltip="right"]'
      , {
        type: 'button',
        ariaLabel: 'Change Language',
        onclick: () => onLanguage(attrs)
      }
      , file(attrs.language.current)
    )
    , entries(attrs.config.sidebar.actions).map(([
      key,
      action
    ]: [
      keyof ISidebar['actions'],
      IActions
    ]) => ({
      link: m(
        'button.moloko-action[data-tooltip="right"]'
        , {
          type: 'button',
          ariaLabel: action.tooltip,
          onclick: () => onCopy(action, attrs, state)
        }
        , state.copy
      ),
      default: m(
        'button.moloko-action[data-tooltip="right"]'
        , {
          type: 'button',
          ariaLabel: getTooltip(attrs, key, action),
          class: isActive(attrs, key),
          onclick: () => onAction(key, attrs)
        }
        , getIcon(attrs, key, action)
      )
    }[key === 'link' ? key : 'default']))

  ) : null
});
