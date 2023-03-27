import esthetic from 'esthetic';
import type { IConfig } from 'types';
import type { IAttrs } from 'types/model';
import { State, Mode } from 'utils/enums';
import merge from 'mergerino';
import join from 'url-join';

export function model (options: IConfig): IAttrs {

  /**
   * Internal state reference.
   */
  const defaults: IConfig = {
    resolve: {
      origin: window.location.origin,
      path: ''
    },
    tabs: false,
    monaco: {
      automaticLayout: false,
      useShadowDOM: false,
      multiCursorPaste: 'full',
      experimentalWhitespaceRendering: 'off',
      copyWithSyntaxHighlighting: false,
      accessibilitySupport: 'off',
      scrollbar: {
        verticalScrollbarSize: 2
      },
      smoothScrolling: true,
      minimap: {
        enabled: false
      },
      padding: {
        top: 25,
        bottom: 200
      },
      renderWhitespace: 'boundary',
      formatOnPaste: false,
      scrollBeyondLastLine: false,
      fontFamily: 'Courier New, Monaco',
      fontWeight: '300',
      fontSize: 16,
      lineHeight: 19,
      cursorBlinking: 'blink',
      cursorStyle: 'line-thin',
      cursorWidth: 1,
      bracketPairColorization: {
        enabled: false,
        independentColorPoolPerBracketType: false
      }
    },
    offset: 0,
    detect: true,
    diff: false,
    hash: true,
    input: '',
    language: 'liquid',
    sidebar: {
      enable: true,
      width: 75,
      actions: {
        rules: {
          active: false,
          icon: 'rules',
          tooltip: 'Formatting Rules'
        },
        preview: {
          active: false,
          icon: 'pane',
          tooltip: 'Toggle Preview'
        },
        link: {
          active: false,
          icon: 'link',
          tooltip: 'Copy Link'
        },
        github: {
          active: false,
          icon: 'github',
          tooltip: 'Submit Issue to Github'
        }
      }
    },
    footer: {
      enable: false,
      height: 35,
      actions: {
        detect: {
          active: true,
          icon: 'detect',
          tooltip: 'Automatic Language Detection'
        },
        language: {
          active: true,
          icon: 'gears',
          tooltip: 'Choose Language'
        },
        formatToggle: {
          active: true,
          icon: 'check',
          tooltip: 'Toggle Formatting'
        }
      }
    },
    colors: {
      background: '#0f1215',
      backdrop: '#13171a',
      accents: '#e45589',
      borders: '#666666'
    }
  };

  const config = Object.assign(defaults, merge(defaults, options));

  /**
   * Internal state reference.
   */
  return {
    hash: config.hash ? '' : null,
    path: join(config.resolve.origin, config.resolve.path),
    get config () { return config; },
    language: {
      state: State.Hidden,
      current: config.language || 'auto',
      detect: config.detect
    },
    input: {
      width: -1,
      editor: null,
      model: null
    },
    preview: {
      width: -1,
      editor: null,
      mode: Mode.Formatted,
      state: State.Opened,
      model: null
    },
    esthetic: {
      width: -1,
      editor: null,
      model: null,
      state: State.Hidden,
      get rules () { return esthetic.rules(); }
    }
  };

}
