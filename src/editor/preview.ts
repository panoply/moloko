import type { editor } from 'monaco-editor';
import type { Component } from 'mithril';
import type { Style } from 'types';
import type { IAttrs } from 'types/model';
import { m } from 'modules';
import { monaco } from '../monaco';
import { assign } from './utils';
import { State } from './enums';

export const Preview: Component<IAttrs> = ({
  onremove: (
    {
      attrs
    }
  ) => {

    attrs.preview.editor.dispose();

  },
  oncreate: (
    {
      dom,
      attrs
    }
  ) => {

    attrs.preview.node = dom as HTMLElement;

    const options = assign<editor.IEditorOptions, editor.IEditorOverrideServices>(
      {},
      attrs.config.monaco
    );

    options.model = attrs.preview.model;
    options.lineNumbers = 'on';
    options.readOnly = true;
    options.domReadOnly = true;
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
  view: (
    {
      attrs
    }
  ) => m(
    'moloko-preview'
    , {
      ariaLabel: attrs.preview.state === State.Opened ? 'Output Preview' : '',
      style: <Style>{
        flex: attrs.preview.width
      }
    }
  )
});
