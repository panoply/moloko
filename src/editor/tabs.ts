import type { IAttrs } from 'types';
import type { Component } from 'mithril';
import { m } from 'modules';
import { file, icon } from './icons';

export const Tabs: Component<IAttrs> = {
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
