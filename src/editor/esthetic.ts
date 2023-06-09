import type { IAttrs } from 'types/model';
import type { editor } from 'monaco-editor';
import m from 'mithril';
import { monaco } from '../monaco';
import esthetic from 'esthetic';

export const Esthetic: m.ClosureComponent<IAttrs> = (
  {
    attrs
  }
) => {

  const options = Object.assign<editor.IEditorOptions, editor.IEditorOverrideServices>({}, attrs.config.monaco);

  options.model = attrs.esthetic.model;
  options.automaticLayout = false;

  monaco.languages.registerDocumentRangeFormattingEditProvider(
    {
      language: 'json'
    }
    ,
    {
      provideDocumentRangeFormattingEdits: model => {

        const text = esthetic.json(model.getValue());

        return [
          {
            text,
            range: model.getFullModelRange()
          }
        ];
      }
    }
  );

  return {
    oncreate: (
      {
        dom,
        attrs
      }
    ) => {

      attrs.esthetic.editor = monaco.editor.create(dom as HTMLElement, options);
      attrs.esthetic.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {

        esthetic.rules(JSON.parse(attrs.esthetic.model.getValue()));

        attrs.esthetic.editor.trigger(
          'editor',
          'editor.action.formatDocument',
          null
        );

        attrs.input.editor.trigger(
          'editor',
          'editor.action.formatDocument',
          null
        );

      });
    },
    onremove: (
      {
        attrs
      }
    ) => {

      attrs.esthetic.editor.dispose();

    },
    view: () => m('div', { style: { height: '100%' } })
  };
};
