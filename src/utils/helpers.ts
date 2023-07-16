import { IAttrs } from 'types/model';
import join from 'url-join';
import { State } from './enums';
import { esthetic, m } from 'modules';

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

export function isOpen (state: State) {

  return state !== State.Hidden;

}

export function isToggle (state: State) {

  return state === State.Toggle;

}

export function setWidths (attrs: IAttrs) {

  if (isOpen(attrs.language.state)) { // LANGUAGE IS OPEN

    attrs.input.width = cols(70, 275);

  } else if (attrs.esthetic.state === State.Opened) { // RULES IS OPEN

  } else if (attrs.preview.state === State.Opened) { // PREVIEW IS OPEN

  }

}

export function toggleRedraw (attrs: IAttrs) {

  return (pane: 'language' | 'esthetic' | 'preview', timer = 250) => {

    setWidths(attrs);

    attrs[pane].state = State.Toggle;

    setTimeout(() => {

      attrs[pane].state = State.Hidden;
      m.redraw();

    }, timer);

  };

};

export function formatCode (attrs: IAttrs) {

  const value = attrs.input.model.getValue();
  const text = esthetic.format(value);

  attrs.preview.model.setValue(text);

}

export function cols (percent: number, offset = 75) {

  return (window.innerWidth - offset) * (percent / 100);

}

export function pixels (percent: number, offset = 75) {

  return (window.innerWidth - offset) * (percent / 100);

}

export function width (clientWidth: number, offset = 275) {

  const number = ((clientWidth / (window.innerWidth - offset)) * 100);

  return {
    number,
    percent: number + '%'
  };

}
