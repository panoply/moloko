/* eslint-disable no-unused-vars */

export enum Mode {
  /**
   * Formatted Input Result
   */
  Formatted = 1,
  /**
   * Æsthetic Parse Error
   */
  ParseError,
  /**
   * Æsthetic Parse Table
   */
  ParseTable,
  /**
   * Runtime iFrame
   *
   * **NOT YET AVAILABLE**
   */
  Runtime,

}

export enum State {
  /**
   * The pane (editor) is not active
   */
  Hidden = 1,
  /**
   * The pane is opening or in transition
   */
  Toggle = 2,
  /**
   * The pane is opened
   */
  Opened = 3,
  /**
   * The pane is opening or in transition
   */
  Reopen = 4,
}
