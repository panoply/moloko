import { IAttrs } from 'types/model';
import join from 'url-join';
import { State } from './enums';
import { esthetic } from 'modules';

export const { entries, assign } = Object;

export function loadExternalCSS (path: string) {

  const head = document.documentElement.firstElementChild;
  const loaded = Array.from(head.querySelectorAll('link')).map(({ id }) => id);

  for (const file of [ 'monaco/monaco.css', 'moloko.css' ]) {

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

export function delay (ms: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('WAIT');
    }, ms);
  });
}

export function copyUrl () {

  const el = document.createElement('textarea');
  el.value = window.location.href;

  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  return true;

}

export function isOpen (state: State) {

  return state !== State.Hidden;

}

export function isToggle (state: State) {

  return state === State.Toggle;

}

export function formatCode (attrs: IAttrs) {

  const value = attrs.input.model.getValue();
  const text = esthetic.format(value);

  attrs.preview.model.setValue(text);

}
