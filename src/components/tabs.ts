import type { IAttrs, Style } from 'types';
import m from 'mithril';
import { file, icon } from 'utils/icons';

export const Tabs: m.Component<IAttrs> = {
  view: () => [
    m(
      '.moloko-tabs'
      , [
        m('button.ml-btn.active', [ file('liquid'), m('span', 'File 1'), icon('cross') ]),
        m('button.ml-btn', [ file('liquid'), m('span', 'File 2'), icon('cross') ]),
        m('button.ml-btn', [ file('liquid'), m('span', 'File 2'), icon('cross') ]),
        m('button.ml-btn.create', icon('plus'))
      ]
    )
  ]
};
