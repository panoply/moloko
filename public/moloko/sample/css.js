// src/samples/css.ts
var css_default = `

  :root {
    --some-variable: #fff;
  }

  code[class*="language-"] {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 1em 3.8em;
    overflow: auto;
    inset: 0;
  }

  .selector {
    color: var(--some-variable);
  }


`;

export { css_default as default };
