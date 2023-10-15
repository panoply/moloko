import { Component } from 'mithril';
import { esthetic, m } from 'modules';

import type { IAttrs } from 'types/model';
import { Style } from 'types/moloko';

const isEven = (n: number) => n % 2 === 0 ? 'odd' : 'even';
const active: Set<number> = new Set();

export const ParseTable: Component<IAttrs> = {
  oncreate: ({
    attrs
  }) => {
    esthetic.parse(attrs.input.model.getValue());
    m.redraw();
  },
  view: ({ attrs }) => m(
    'table.parse-table',
    {
      style: <Style>{
        width: `${attrs.preview.width}px`
      }
    },
    m(
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
      'tbody',
      esthetic.table.begin.map((_, i) => [
        m('tr', {
          id: `${i}`,
          class: `${esthetic.table.lexer[i]} ${isEven(i)} ${active.has(i) ? 'active' : ''}`,
          onclick: () => {

            active.clear();

            const start = esthetic.table.begin[i];
            const ender = esthetic.table.ender[i];

            for (let index = start; index <= ender; index++) active.add(index);

            const begin = start === -1
              ? i > 0
                ? esthetic.lines[i]
                : 1
              : esthetic.lines[start];

            const ends = ender === i ? esthetic.lines[ender] : i === -1
              ? i > 0
                ? esthetic.lines[i + 1]
                : 2
              : esthetic.lines[ender];

            attrs.input.editor.revealLineNearTop(begin, 0);
            attrs.input.editor.setSelection({
              startLineNumber: begin,
              startColumn: 0,
              endLineNumber: ends,
              endColumn: 0
            });
          }
        }, [
          m('td.index', `${i}`),
          m('td.number', `${esthetic.table.begin[i]}`),
          m('td.number', `${esthetic.table.ender[i]}`),
          m('td.index', `${esthetic.table.lines[i]}`),
          m('td.lexer', `${esthetic.table.lexer[i]}`),
          m('td.stack', `${esthetic.table.stack[i]}`),
          m('td.type', `${esthetic.table.types[i]}`),
          m('td.token', m('pre', m('code', esthetic.table.token[i])))
        ])
      ])
    )
  )

};
