import { Style } from 'types';
import { IAttrs } from 'types/model';
import type { editor } from 'monaco-editor';
import { Component } from 'mithril';
import { monaco } from '../monaco';
import { m } from 'modules';

export const Preview: Component<IAttrs> = {
  oncreate: (
    {
      dom,
      attrs
    }
  ) => {

    const options = Object.assign<editor.IEditorOptions, editor.IEditorOverrideServices>({}, attrs.config.monaco);

    options.model = attrs.preview.model;
    options.lineNumbers = 'off';
    options.readOnly = true;
    options.renderLineHighlight = 'none';
    options.cursorStyle = 'line-thin';

    attrs.preview.editor = monaco.editor.create(dom as HTMLElement, options);
    attrs.input.editor.onDidScrollChange((
      {
        scrollLeft,
        scrollTop
      }
    ) => {

      attrs.preview.editor.setScrollPosition({
        scrollLeft,
        scrollTop
      }, 0);

    });

  },
  onremove: (
    {
      attrs
    }
  ) => {

    attrs.preview.editor.dispose();

  },
  view: () => m('div', { style: <Style>{ height: '100%' } })

};
