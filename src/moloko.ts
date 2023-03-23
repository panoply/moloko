import type { IConfig } from 'types';
import esthetic from 'esthetic';
import * as hash from 'editor/hash';
import { attrs, config } from 'attrs';
import m from 'mithril';
import { Sidebar } from 'src/components/sidebar';
import { Footer } from 'src/components/footer';
import { Input } from 'editor/input';
import { Rules } from 'editor/rules';
import { getMonacoModule, setEditorOptions, getInputModel, getRulesModel } from './monaco';
import merge from 'mergerino';
import join from 'url-join';
import { Language } from './components/language';

esthetic.config({
  logColors: false
});

/* -------------------------------------------- */
/* INITIALIZE                                   */
/* -------------------------------------------- */

function loadExternalCSS (path: string) {

  const head = document.documentElement.firstElementChild;
  const loaded = Array.from(head.querySelectorAll('link')).map(({ id }) => id);

  for (const file of [
    'monaco.css',
    'moloko.css'
  ]) {

    const id = file.slice(0, -4);

    if (!loaded.includes(id)) {

      const link = document.createElement('link');

      link.id = id;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = join(path, file);

      head.appendChild(link);

    }
  }
}

/**
 * Quickly checks if the editor session is
 * hashed and preloads any required modules.
 */
function setMolokoOptions (options: IConfig) {

  if (options.hash) {
    if (window.location.hash.charCodeAt(1) === 77 && window.location.hash.charCodeAt(2) === 61) {
      attrs.hash = window.location.hash.slice(3);
    }
  } else {
    attrs.hash = null;
  }

  if (attrs.hash) {

    const text = hash.decode(attrs.hash);

    attrs.model.input = getInputModel(text.language, text.model);
    attrs.detectLanguage = text.detectLanguage;
    attrs.languagesOpen = text.languagesOpen;
    attrs.rulesOpen = text.rulesOpen;
    attrs.previewMode = text.previewMode;
    attrs.previewOpen = text.previewOpen;
    attrs.rulesOpen = text.rulesOpen;

    attrs.model.rules = getRulesModel(text.rules);

    esthetic.rules(text.rules);

  } else {

    esthetic.rules({ language: options.language });

    attrs.model.rules = getRulesModel(attrs.rules);
    attrs.model.input = getInputModel(options.language);

  }

};

/**
 * Moloko Initialize
 */
export async function mount (element: HTMLElement, options: IConfig = {}) {

  Object.assign(config, merge(config, options));

  attrs.path = join(config.resolve.origin, config.resolve.path);

  loadExternalCSS(attrs.path);

  try {
    await getMonacoModule(attrs.path);
  } catch (e) {
    throw new Error('Failed to load Monaco', e);
  }

  setEditorOptions(config.monaco);
  setMolokoOptions(config);

  document.body.style.backgroundColor = config.colors.background;
  document.body.style.overflow = 'hidden';

  const toggle = (type: 'input' | 'preview', prop: 'width' | 'left' | 'display') => {

    if (type === 'input') {

      if (prop === 'width') {

        // Rules and input is open
        if (attrs.rulesOpen === 1 && attrs.previewOpen === 0 && attrs.languagesOpen === 0) return '40%';

        // Preview and input is open
        if (attrs.previewOpen === 1 && attrs.languagesOpen === 0 && attrs.rulesOpen === 0) return '50%';

        // languages and input is open
        if (attrs.previewOpen === 1 && attrs.rulesOpen === 1 && attrs.languagesOpen === 0) return '0';

        return '100%';

      } else if (prop === 'left') {

        // Rules and input is open
        if (attrs.rulesOpen === 1 && attrs.previewOpen === 0 && attrs.languagesOpen === 0) return '40%';

        // languages and input is open
        if (attrs.languagesOpen === 1 && attrs.previewOpen === 0 && attrs.rulesOpen === 0) return '201px';

        return attrs.languagesOpen === 1 && attrs.previewOpen === 1 ? '201px' : '0';

      } else if (prop === 'display') {

        if (attrs.languagesOpen === 1 && attrs.previewOpen === 1) return 'none';

        if (attrs.rulesOpen === 1 && attrs.previewOpen === 1) return 'none';

        return '';

      }

    }

  };

  m.mount(element, {
    oncreate: ({ dom }) => {
      dom.parentElement.style.width = `${dom.clientWidth}px`;
      dom.parentElement.style.height = `${dom.clientHeight}px`;
      dom.parentElement.style.overflow = 'hidden';
      dom.parentElement.style['--moloko-border'] = config.colors.borders;
    },
    view: () => m('section', [
      config.sidebar.enable ? m(Sidebar, attrs) : null,
      m(
        '.moloko-wrapper'
        , {
          style: {
            top: `${config.offset}px`,
            left: `${config.sidebar.width}px`,
            bottom: config.footer.enable ? `${config.footer.height - 1}px` : '0'
          }
        }
        , m(
          '.moloko-container'
          , [
            attrs.languagesOpen >= 1
              ? m(
                '.moloko-language'
                , {
                  style: {
                    '--moloko-border': config.colors.borders,
                    backgroundColor: config.colors.backdrop
                  }
                }, m(Language, attrs)
              )
              : null,
            attrs.rulesOpen >= 1 && attrs.languagesOpen === 0
              ? m(
                '.moloko-rules'
                , {
                  dataTooltip: 'right',
                  ariaLabel: 'Æsthetic Rules'
                }
                , m(Rules, attrs)
              )
              : null
            , m(
              '.moloko-input'
              , {
                style: {
                  width: toggle('input', 'width'),
                  left: toggle('input', 'left'),
                  display: toggle('input', 'display')
                }
              }
              ,
              m(Input, attrs)
            ),
            attrs.previewOpen === 1 ? m(
              '.moloko-preview'
              , {
                ariaLabel: 'Æsthetic Preview',
                style: {
                  width: attrs.languagesOpen === 1 && attrs.previewOpen === 1
                    ? '100%'
                    : attrs.rulesOpen === 1
                      ? '60%' : '50%',
                  left: attrs.languagesOpen === 1 && attrs.previewOpen === 1
                    ? '201px'
                    : attrs.rulesOpen === 1
                      ? '40%' : '50%',
                  borderColor: config.colors.borders,
                  backgroundColor: config.colors.background
                }
              }, [
                // m(
                //   '.moloko-preview-top'
                //   , {
                //     style: {
                //       marginLeft: `${config.sidebar.width + 1}px`,
                //       top: `${config.offset}px`,
                //       borderColor: config.colors.borders,
                //       backgroundColor: config.preview.background,
                //       width: attrs.rulesOpen === 1 ? '60%' : '50%',
                //       left: attrs.rulesOpen === 1 ? '40%' : '50%'
                //     }
                //   }, m(
                //     'ul'
                //     , [
                //       m(
                //         'li'

                //       )
                //     ]
                //   )
                // )
                // ,
                m(
                  'pre.moloko-pre.potion'
                  , {
                    lang: attrs.model.input.getLanguageId(),
                    style: {
                      fontFamily: config.monaco.fontFamily,
                      backgroundColor: config.colors.background
                    }
                    , oncreate: ({ dom }) => {

                      if (config.preview.scrollSync !== 'off') {

                        attrs.editor.input.onDidScrollChange(event => {
                          dom.parentElement.scroll({
                            behavior: config.preview.scrollSync as ScrollBehavior,
                            top: event.scrollTop,
                            left: event.scrollLeft
                          });
                        });
                      }

                    }
                  }
                  , m.trust(attrs.model.preview)
                )
              ]
            ) : null
          ]
        )
      )
      , config.footer.enable ? m(Footer, attrs) : null
    ])

  });

  return attrs;

}
