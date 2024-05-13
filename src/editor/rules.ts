import type { IAttrs } from 'types/model';
import type { editor } from 'monaco-editor';
import type { ClosureComponent } from 'mithril';
import type { Style } from 'types/moloko';
import { monaco } from '../monaco';
import { esthetic, m } from 'modules';
import { encode } from './hash';
import { assign } from './utils';

export function RulesStatic (dom: HTMLElement, attrs: IAttrs) {

  const options = assign<editor.IEditorOptions, editor.IEditorOverrideServices>(
    {},
    attrs.config.monaco
  );

  options.model = attrs.rules.model;

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

      attrs.rules.editor = monaco.editor.create(dom as HTMLElement, options);
      attrs.rules.editor.updateOptions({ theme: 'potion-light' });

      attrs.rules.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {

        esthetic.rules(JSON.parse(attrs.rules.model.getValue()));

        attrs.rules.editor.trigger(
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

      attrs.rules.editor.dispose();

    }
  };

}

export const Rules: ClosureComponent<IAttrs> = (
  {
    attrs
  }
) => {

  const options = assign<editor.IEditorOptions, editor.IEditorOverrideServices>(
    {},
    attrs.config.monaco
  );

  options.model = attrs.rules.model;

  monaco.languages.registerDocumentRangeFormattingEditProvider(
    {
      language: attrs.rules.model.getLanguageId()
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

    attrs.rules.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {

      attrs.rules.esthetic = JSON.parse(attrs.rules.model.getValue());
      esthetic.rules(attrs.rules.esthetic);

      encode(attrs);

      attrs.rules.editor.trigger(
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
    view: () => m(
      'moloko-rules'
      , {
        style: <Style>{ flex: 0 },
        oncreate: (
          {
            dom
          }
        ) => {

          attrs.rules.node = dom as HTMLElement;
          attrs.rules.editor = monaco.editor.create(dom as HTMLElement, options);
          attrs.rules.editor.onDidFocusEditorText(() => addCommand());

          const { style } = attrs.rules.editor.getDomNode();
          style.setProperty('--vscode-editor-background', '#121418');
          style.setProperty('--vscode-editorGutter-background', '#121418');

        }
      }
    )
  };
};
