import { IAttrs } from 'types';
import * as hash from 'editor/hash';
import m from 'mithril';
import esthetic from 'esthetic';
import { monaco } from '../monaco';

export const Input: m.ClosureComponent<IAttrs> = ({
  attrs: {
    model,
    editor,
    previewOpen,
    previewMode
  }
}) => {

  monaco.languages.registerDocumentRangeFormattingEditProvider(
    {
      language: model.input.getLanguageId(),
      hasAccessToAllModels: false
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

      if (editor.input === null) {

        editor.input = monaco.editor.create(dom as HTMLElement, { model: model.input });
        editor.input.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, command);
        model.input.onDidChangeContent(async event => {

          hash.encode(attrs);

          if (event.isRedoing || event.isUndoing) return;

          if (previewOpen && previewMode === 'diff') {
            const value = editor.input.getValue();
            const text = esthetic.format(value);
            attrs.model.preview = await monaco.editor.colorize(text, model.input.getLanguageId(), {});
            m.redraw();
          }

        });

      }
    },
    view: () => m('div', { style: { height: '100%' } })
  };

};
