import type { IAttrs } from 'types';
import m from 'mithril';
import { monaco } from '../monaco';
import esthetic from 'esthetic';

export const Rules: m.ClosureComponent<IAttrs> = (
  {
    attrs: {
      editor,
      model
    }
  }
) => {

  monaco.languages.registerDocumentRangeFormattingEditProvider(
    {
      language: 'json'
    }
    , {
      provideDocumentRangeFormattingEdits: (textModel) => {

        const text = esthetic.format(textModel.getValue());

        return [
          {
            text,
            range: textModel.getFullModelRange()
          }
        ];
      }
    }
  );

  const command = async () => {

    esthetic.rules(JSON.parse(model.rules.getValue()));

    await editor.rules.getAction('editor.action.formatDocument').run();
    await editor.input.getAction('editor.action.formatDocument').run();

  };

  return {
    oncreate: ({ dom }) => {
      editor.rules = monaco.editor.create(dom as HTMLElement, { model: model.rules });
      editor.rules.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, command);
    },
    onremove: ({ attrs: { editor: { rules } } }) => {
      rules.dispose();
    },
    view: () => m('div', { style: { height: '100%', overflow: 'hidden' } })
  };
};
