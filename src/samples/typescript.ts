export default `

export interface IAttrs {
  foo: string;
  bar: boolean;
}

function example <T extends string>(param: IAttrs, arg: T): void {

  /**
   * JSDoc Comment
   *
   * @type string
   */
  let string: string

  const type: string[] = []

  if (param.prop === 1000) {

    const condition = param.foo ? false : true;

    return [
      {
        object: {
          foo: 'string'
        }
      }
    ]
  }
}


`;
