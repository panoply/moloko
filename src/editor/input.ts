import { IAttrs } from 'types';
import * as hash from 'editor/hash';
import m from 'mithril';
import esthetic from 'esthetic';
import { monaco } from '../monaco';

export const Input: m.ClosureComponent<IAttrs> = ({
  attrs: {
    input,
    editor,
    previewOpen,
    previewMode
  }
}) => {

  monaco.languages.registerDocumentRangeFormattingEditProvider(
    {
      language: input.language
    }
    , {
      provideDocumentRangeFormattingEdits: (model) => {

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

  const command = () => editor.input.getAction('editor.action.formatDocument').run();

  return {
    oncreate: ({ dom, attrs }) => {

      const { model } = input;

      editor.input = monaco.editor.create(dom as HTMLElement, { model });
      editor.input.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, command);
      input.model.onDidChangeContent(async event => {

        hash.encode(attrs);

        if (event.isRedoing || event.isUndoing) return;

        if (previewOpen && previewMode === 'diff') {
          const value = editor.input.getValue();
          const text = esthetic.format(value);
          editor.diff = await monaco.editor.colorize(text, attrs.input.language, {});
          m.redraw();
        }

      });

    },
    view: () => m('div', { style: { height: '100%' } })
  };

};
