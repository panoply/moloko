import m from 'mithril';
import { IAttrs } from 'types/moloko';
import type { editor } from 'monaco-editor';
import join from 'url-join';

export function post (dom: HTMLIFrameElement, attrs: IAttrs) {

  return (model: editor.ITextModel) => {

    dom.contentWindow.postMessage({
      content: model
    }, '*');

  };

}

export function setIframeListener (attrs: IAttrs) {

  window.addEventListener('message', function (e) {

    console.log(e);
    e.target.innerHTML = e.data;

  });

}
export const Runtime: m.Component<IAttrs> = {
  oncreate: ({ dom, attrs }) => {

    attrs.runtime.iframe = dom;

  },
  view: ({ attrs }) => m(
    'div.moloko-iframe'
  )
};
