import type { IConfig } from 'types';
import type { IAttrs } from 'types/model';
import { State, Mode } from './editor/enums';
import merge from 'mergerino';
import join from 'url-join';

export const model = new class Model implements IAttrs {

  /**
   * Internal state reference defaults, immutable
   */
  static config: IConfig = {
    resolve: {
      origin: window.location.origin,
      path: '',
      mithril: true,
      esthetic: true
    },
    splash: true,
    tabs: false,
    monaco: {
      automaticLayout: true,
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
        bottom: 100
      },
      renderWhitespace: 'boundary',
      formatOnPaste: false,
      scrollBeyondLastLine: false,
      fontFamily: "consolas, monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
      fontWeight: '100',
      disableMonospaceOptimizations: true,
      fontVariations: true,
      fontSize: 13.7,
      letterSpacing: 0.3,
      lineHeight: 1.7,
      cursorBlinking: 'blink',
      cursorStyle: 'line-thin',
      cursorWidth: 1,
      bracketPairColorization: {
        enabled: false,
        independentColorPoolPerBracketType: false
      }
    },
    preview: {
      enable: true
    },
    rules: {
      enable: true,
      esthetic: {
        crlf: false,
        correct: false,
        preset: 'default',
        language: 'liquid',
        endNewline: false,
        indentChar: ' ',
        indentLevel: 0,
        indentSize: 2,
        preserveLine: 2,
        wrap: 0,
        wrapFraction: 0,
        liquid: {
          commentNewline: false,
          commentIndent: true,
          delimiterTrims: 'preserve',
          delimiterPlacement: 'preserve',
          forceFilter: 0,
          forceArgument: 0,
          ignoreTagList: [],
          indentAttribute: false,
          lineBreakSeparator: 'before',
          normalizeSpacing: true,
          preserveComment: false,
          dedentTagList: [],
          quoteConvert: 'none'
        },
        markup: {
          attributeCasing: 'preserve',
          attributeSort: false,
          commentNewline: false,
          commentIndent: true,
          commentDelimiters: 'force',
          delimiterTerminus: 'inline',
          forceAttribute: 3,
          forceIndent: false,
          ignoreCSS: false,
          ignoreJS: true,
          ignoreJSON: false,
          lineBreakValue: 'preserve',
          preserveComment: false,
          preserveText: false,
          preserveAttribute: false,
          selfCloseSpace: true,
          selfCloseSVG: true,
          stripAttributeLines: false,
          quoteConvert: 'none'
        },
        json: {
          arrayFormat: 'default',
          braceAllman: false,
          bracePadding: false,
          objectIndent: 'default',
          objectSort: false
        },
        style: {
          commentIndent: false,
          commentNewline: false,
          atRuleSpace: true,
          classPadding: false,
          noLeadZero: false,
          preserveComment: false,
          sortSelectors: false,
          sortProperties: false,
          quoteConvert: 'none'
        },
        script: {
          arrayFormat: 'default',
          braceNewline: false,
          bracePadding: false,
          braceStyle: 'none',
          braceAllman: false,
          caseSpace: false,
          commentIndent: false,
          commentNewline: false,
          elseNewline: false,
          endComma: 'never',
          functionNameSpace: false,
          functionSpace: false,
          inlineReturn: true,
          methodChain: 4,
          neverFlatten: false,
          noCaseIndent: false,
          noSemicolon: false,
          objectSort: false,
          objectIndent: 'default',
          preserveComment: false,
          quoteConvert: 'none',
          styleGuide: 'none',
          ternaryLine: false,
          variableList: 'none',
          vertical: false
        }
      }
    },
    offset: 0,
    detect: true,
    diff: false,
    hash: true,
    input: '',
    language: 'liquid',
    samples: {
      plaintext: true,
      html: true,
      xml: true,
      liquid: true,
      css: true,
      json: true,
      scss: true,
      javascript: true,
      typescript: true,
      jsx: true,
      tsx: true,
      yaml: true
    },
    sidebar: {
      enable: true,
      width: 75,
      actions: {
        rules: {
          active: false,
          icon: 'rules',
          tooltip: 'Formatting Rules'
        },
        table: {
          active: false,
          icon: 'table',
          tooltip: 'Parse Table'
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
        ghissue: {
          active: false,
          icon: 'ghissue',
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

  public config: IConfig = Model.config;
  public hash = '';
  public open = null;
  public path = join(Model.config.resolve.origin, Model.config.resolve.path);

  public documents = {
    plaintext: { sample: '', input: '' },
    html: { sample: '', input: '' },
    xml: { sample: '', input: '' },
    liquid: { sample: '', input: '' },
    css: { sample: '', input: '' },
    json: { sample: '', input: '' },
    scss: { sample: '', input: '' },
    javascript: { sample: '', input: '' },
    typescript: { sample: '', input: '' },
    jsx: { sample: '', input: '' },
    tsx: { sample: '', input: '' },
    yaml: { sample: '', input: '' }
  };

  public language = {
    state: State.Hidden,
    node: null,
    current: 'auto',
    detect: true
  };

  public input = {
    width: 1,
    editor: null,
    model: null,
    node: null,
    state: State.Opened
  };

  public preview = {
    width: 1,
    editor: null,
    mode: Mode.Formatted,
    state: State.Opened,
    model: null,
    node: null
  };

  public table = {
    width: 0,
    state: State.Hidden,
    node: null
  };

  public rules = {
    width: 0,
    editor: null,
    model: null,
    state: State.Hidden,
    esthetic: Model.config.rules.esthetic,
    node: null
  };

  update (options: IConfig) {

    this.config = merge(this.config, options);
    this.hash = this.config.hash ? '' : null;
    this.path = join(this.config.resolve.origin, this.config.resolve.path);
    this.language.current = this.config.language || 'auto';
    this.language.detect = this.config.detect;
    this.rules.esthetic = this.config.rules.esthetic;

    return this;

  }

}();
