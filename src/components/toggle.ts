import type { IAttrs } from 'types/model';
import type { Component } from 'mithril';
import { m } from 'modules';
import { Mode } from 'utils/enums';

export const Toggle: Component<IAttrs> = {
  view: ({ attrs }) => m(
    '.moloko-toggle'
    , [
      m('button.btn', {
        onclick: () => {
          attrs.preview.mode = Mode.ParseTable;
        }
      }, 'Parse Table'),
      m('button.btn', {
        onclick: () => {
          attrs.preview.mode = Mode.Formatted;
        }
      }, 'Code Output')
    ]
  )

};
