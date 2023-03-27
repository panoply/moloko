import type { IAttrs } from 'types/model';
import m from 'mithril';
import { Style } from 'types';

export const ResizeRules: m.Component<IAttrs> = {
  view: ({ attrs }) => m('.moloko-resize', {

  })
};

export const ResizePreview: m.Component<IAttrs> = {
  view: (
    {
      attrs
    }
  ) => m(
    '.moloko-resize'
    , {

      onmousedown: (event: MouseEvent) => {

        const mousemove = (e) => {

          const node = (document.body.clientWidth - config.sidebar.width);
          const left = attrs.editor.input.getContentWidth();

          console.log(node, left, e.clientX);

          attrs.panes.preview = left - (e.clientX - node);

          event.target.style.left = `${attrs.panes.preview}px`;

          console.log(attrs.panes);

        };

        addEventListener('mouseup', function mouseUp (up) {

          removeEventListener('mousemove', mousemove, false);
          removeEventListener('mouseup', mouseUp, false);

          attrs.editor.input.layout({
            width: attrs.panes.preview,
            height: isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight
          });

          event.target.style.background = 'transparent';
          m.redraw();

        }, false);

        addEventListener('mousemove', mousemove, false);

      }
    }
  )
};
