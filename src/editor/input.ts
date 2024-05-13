import type { IAttrs } from 'types/model';
import type { editor } from 'monaco-editor';
import type { ClosureComponent } from 'mithril';
import type { Style } from 'types';
import { encode } from './hash';
import { monaco } from '../monaco';
import { State } from './enums';
import { formatCode } from './utils';
import { esthetic, m } from 'modules';

export const Input: ClosureComponent<IAttrs> = (
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

      if (attrs.hash !== null) encode(attrs);

    } else if (attrs.hash !== null) {

      encode(attrs);

    }

  });

  return {
    oncreate: (
      {
        dom
      }
    ) => {

      attrs.input.node = dom as HTMLElement;
      attrs.input.editor = monaco.editor.create(dom as HTMLElement, options);

      attrs.input.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
        attrs.input.editor.trigger(
          'editor',
          'editor.action.formatDocument',
          null
        );
      });

    },
    view: () => m(
      'moloko-input'
      , {
        style: <Style>{
          flex: attrs.input.width
        }
      }
    )
  };

};
