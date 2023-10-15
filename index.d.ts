import type Esthetic from 'esthetic';
import { IAttrs, IConfig } from './types/moloko';
import Mithril from 'mithril';

export * from './types/moloko';

/**
 * **🥛 Moloko Editor**
 *
 * Browser based text editor built atop of the [Monaco Editor](https://github.com/microsoft/monaco-editor).
 * Developed for usage in [Liquify](https://liquify.dev) and [Æsthetic](https://æsthetic.dev).
 */
export declare const moloko: {
  /**
   * **Moloko Mount**
   *
   * Renders the text edtior to the provided element.
   * Optionally pass in options.
   */
  mount(element: Element | HTMLElement, options?: IConfig): IAttrs;

  /**
   * **Moloko Hash**
   *
   * Returns the hash reference
   */
  hash(): string;

  /**
   * **Moloko Render**
   *
   * Renders the text edtior to the provided element.
   * Optionally pass in options.
   */
  render(element: Element | HTMLElement, options?: IConfig): Promise<{
    readonly attrs: IAttrs;
    Esthetic: Mithril.ClosureComponent<IAttrs>;
    Preview: Mithril.Component<IAttrs, {}>;
  }>

  /**
   * **Moloko Loader**
   *
   * Cherry pick editor instances
   */
  loader(options?: IConfig): {
    readonly attrs: IAttrs;
    /**
     * **Æsthetic Rules**
     *
     * Returns JSON Schema editor instances
     */
    readonly esthetic: (dom: HTMLElement, attrs: IAttrs) => {
      mount: () => void;
      unmount: () => void;
    };
  }
  /**
   * **Æsthetic**
   *
   * Returns the Æsthetic instance used by the editor. If `options.format` is
   * `false` then `null` is returned.
   */
  esthetic: typeof Esthetic;

};

export default moloko;
