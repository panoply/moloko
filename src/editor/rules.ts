import type { IAttrs } from 'types/model';
import type { editor } from 'monaco-editor';
import type { ClosureComponent } from 'mithril';
import { monaco } from '../monaco';
import { esthetic, m } from 'modules';
import { encode } from './hash';

export function EstheticStatic (dom: HTMLElement, attrs: IAttrs) {

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
    mount: () => {

      attrs.esthetic.editor = monaco.editor.create(dom as HTMLElement, options);
      attrs.esthetic.editor.updateOptions({
        theme: 'potion-light'
      });

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
    unmount: () => {

      attrs.esthetic.editor.dispose();

    }
  };

}

export const Esthetic: ClosureComponent<IAttrs> = (
  {
    attrs
  }
) => {

  const options = Object.assign<editor.IEditorOptions, editor.IEditorOverrideServices>({}, attrs.config.monaco);
  options.model = attrs.esthetic.model;
  options.automaticLayout = false;

  monaco.languages.registerDocumentRangeFormattingEditProvider(
    {
      language: attrs.esthetic.model.getLanguageId()
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

  const addCommand = () => {

    attrs.esthetic.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {

      attrs.esthetic.rules = JSON.parse(attrs.esthetic.model.getValue());
      esthetic.rules(attrs.esthetic.rules);

      encode(attrs);

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

  };

  return {
    oncreate: (
      {
        dom
      }
    ) => {

      attrs.esthetic.editor = monaco.editor.create(dom as HTMLElement, options);
      attrs.esthetic.editor.onDidFocusEditorText(() => addCommand());

      const { style } = attrs.esthetic.editor.getDomNode();
      style.setProperty('--vscode-editor-background', '#121418');
      style.setProperty('--vscode-editorGutter-background', '#121418');

    },
    view: () => m('div', { style: { height: '100%' } })
  };
};
