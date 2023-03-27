import { IAttrs } from 'types/model';
import type { editor } from 'monaco-editor';
import { Style } from 'types';
import * as hash from 'editor/hash';
import m from 'mithril';
import esthetic from 'esthetic';
import { monaco } from '../monaco';
import { State } from 'utils/enums';
import { formatCode } from 'utils/helpers';

export const Input: m.ClosureComponent<IAttrs> = (
  {
    attrs
  }
) => {

  const options = Object.assign<editor.IEditorOptions, editor.IEditorOverrideServices>({}, attrs.config.monaco);
  options.model = attrs.input.model;

  monaco.languages.registerDocumentRangeFormattingEditProvider(
    {
      language: attrs.input.model.getLanguageId()
    },
    {
      provideDocumentRangeFormattingEdits: model => {

        const text = esthetic.format(model.getValue());

        return [
          {
            text,
            range: model.getFullModelRange()
          }
        ];
      }
    }
  );

  attrs.input.model.onDidChangeContent(() => {

    if (attrs.preview.state === State.Opened) {

      formatCode(attrs);

      if (attrs.hash !== null) hash.encode(attrs);

    } else if (attrs.hash !== null) {

      hash.encode(attrs);

    }

  });

  return {
    oncreate: (
      {
        dom
      }
    ) => {

      attrs.input.editor = monaco.editor.create(dom as HTMLElement, options);

      attrs.input.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
        attrs.input.editor.trigger(
          'editor',
          'editor.action.formatDocument',
          null
        );
      });

    },
    view: () => m('div', { style: <Style>{ height: '100%' } })
  };

};
