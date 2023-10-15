# Moloko

Moloko is an embedded web based code editor built atop of [Monaco](https://github.com/microsoft/monaco-editor).

<p align="center">
<img src="https://raw.githubusercontent.com/panoply/moloko/master/screenshot.png">
</p>

# Installation

Moloko has peer dependencies on [mithril.js](https://mithril.js.org) and [Æsthetic](https://github.com/panoply/esthetic). Both these modules need to be installed in order for moloko to be used.

[Live Example](https://molokojs.netlify.app)

```bash
pnpm add moloko
```

### Peer Dependencies

```bash
pnpm add mithril esthetic
```

### Use Case?

Moloko is developed for playground usage within [Æsthetic](https://github.com/panoply/esthetic) and [Liquify](https://github.com/panoply/liquify).

### Requirements

Moloko is running atop of [Monaco](https://github.com/microsoft/monaco-editor) and thus it requires workers be integrated into a distribution bundle of your project.

### Supported Themes

Currently Moloko provides support for a single (dark) theme:

- Potion

### Supported Languages

In addition to Liquid, Moloko also supports several other languages:

- HTML
- Liquid
- XML
- JavaScript
- TypeScript
- CSS
- SCSS
- JSON
- YAML

# Usage

Moloko leverages the powerful [mithril.js](https://mithril.js.org) SPA framework together with the [Æsthetic](https://github.com/panoply/esthetic) beautification tool and [Monaco](https://github.com/microsoft/monaco-editor) text editor.

```typescript
import moloko from 'moloko';

// Render the editor to a document element
moloko.mount(document.body, options?: Options);

```

# Contributing

Despite running atop of Monaco, Moloko will spin up its own build and expose it. In order to support the grammars and embedded languages of the Shopify Liquid variation the module employs its own Liquid grammar.

<details>
<summary>
  Pre-requisites
</summary>
<p>

- [Git](https://git-scm.com/)
- [Node v16^](https://nodejs.org/)
- [Pnpm v7^](https://pnpm.js.org/)
- [VSCode](https://code.visualstudio.com/)

</p>
</details>

### Setup

- Ensure [pnpm](https://pnpm.js.org/) is installed globally `npm i pnpm -g`
- Leverage `pnpm env` if you need to align node versions
- Clone this repository `git clone https://github.com/panoply/moloko.git`
- Run `pnpm i` in the root directory
- Run `pnpm dev` and start coding

You can run `pnpm build` to generate a distributed bundle.

# Author

🥛 [Νίκος Σαβίδης](mailto:nicos@gmx.com) <img align="right" src="https://img.shields.io/badge/-@niksavvidis-1DA1F2?logo=twitter&logoColor=fff" />
