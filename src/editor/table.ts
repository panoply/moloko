import { Component } from 'mithril';
import { esthetic, m } from 'modules';

import type { IAttrs } from 'types/model';
import { Style } from 'types/moloko';

const isEven = (n: number) => n % 2 === 0 ? 'odd' : 'even';

const active: Set<number> = new Set();

export function onClickHighlight (attrs: IAttrs, i: number) {

  active.clear();

  const start = esthetic.table.begin[i];
  const ender = esthetic.table.ender[i];
  const space = esthetic.table.lines[i];
  const lines = esthetic.lines[i];

  for (let index = start; index <= ender; index++) active.add(index);

  const begin = (ender > -1 ? (esthetic.lines[start]) : (lines - space));
  const ends = lines + (space > 0 ? (space - 1) : space);

  attrs.input.editor.revealLineNearTop(begin, 0);

  attrs.input.editor.setSelection({
    startLineNumber: begin,
    startColumn: 0,
    endLineNumber: ends,
    endColumn: 0
  });
}

export const ParseTable: Component<IAttrs, { highlightFeatureOnClick: boolean }> = {
  oninit: (
    {
      state
    }
  ) => {

    // Currently disabled until if come up with a better solution
    // within in esthetic for handling line and range numbers.
    state.highlightFeatureOnClick = false;
  },
  oncreate: (
    {
      attrs,
      dom
    }
  ) => {

    attrs.table.node = dom as HTMLElement;

    esthetic.parse(attrs.input.model.getValue());

  },
  view: (
    {
      attrs,
      state
    }
  ) => m(
    'moloko-parse-table'
    , {
      style: <Style>{
        flex: 0,
        top: `${attrs.config.offset}px`
      }
    }
    , m(
      'table'
      , m(
        'thead',
        m('tr', [
          m('th.index', 'Index'),
          m('th.number', 'Begin'),
          m('th.number', 'Ender'),
          m('th.number', 'Lines'),
          m('th.lexer', 'Lexer'),
          m('th.stack', 'Stack'),
          m('th.type', 'Type'),
          m('th.token', 'Token')
        ])
      ),
      m(
        'tbody'
        , esthetic.table.begin.map((_, i) => m(
          'tr'
          , {
            id: `${i}`,
            class: `${esthetic.table.lexer[i]} ${isEven(i)} ${active.has(i) ? 'active' : ''}`,
            onclick: () => state.highlightFeatureOnClick ? onClickHighlight(attrs, i) : null
          }
          , m('td.index', `${i}`)
          , m('td.number', `${esthetic.table.begin[i]}`)
          , m('td.number', `${esthetic.table.ender[i]}`)
          , m('td.index', `${esthetic.table.lines[i]}`)
          , m('td.lexer', `${esthetic.table.lexer[i]}`)
          , m('td.stack', `${esthetic.table.stack[i]}`)
          , m('td.type', `${esthetic.table.types[i]}`)
          , m('td.token', m('pre', m('code', esthetic.table.token[i])))

        ))
      )
    )
  )
};
