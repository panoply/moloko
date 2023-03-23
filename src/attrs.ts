import esthetic from 'esthetic';
import type { IAttrs, IConfig } from 'types';

/**
 * Internal state reference.
 */
export const attrs: IAttrs = {
  get rules () {
    return esthetic.rules();
  },
  hash: '',
  path: '',
  detectLanguage: true,
  languagesOpen: 0,
  rulesOpen: 0,
  previewOpen: 0,
  previewMode: 'diff',
  model: {
    preview: null,
    rules: null,
    input: null
  },
  editor: {
    input: null,
    rules: null
  }
};

/**
 * Internal state reference.
 */
export const config: IConfig = {
  resolve: {
    origin: window.location.origin,
    path: ''
  },
  monaco: {
    automaticLayout: false,
    useShadowDOM: true,
    disableLayerHinting: true,
    scrollbar: {
      verticalScrollbarSize: 2
    },
    smoothScrolling: false,
    minimap: {
      enabled: false
    },
    formatOnPaste: false,
    scrollBeyondLastLine: false,
    fontFamily: 'Courier New, Monaco',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 19,
    bracketPairColorization: {
      enabled: false,
      independentColorPoolPerBracketType: false
    },
    padding: {
      top: 25,
      bottom: 25
    }
  },
  offset: 0,
  detect: true,
  diff: false,
  hash: true,
  input: '',
  language: 'liquid',
  instructions: true,
  preview: {
    background: '#13171a',
    scrollSync: 'smooth'
  },
  sidebar: {
    enable: true,
    background: '#0f1215',
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
    background: '#181b20',
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
