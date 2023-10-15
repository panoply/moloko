import type { Options } from 'tsup';
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const cwd = process.cwd();

const store = [
  '/* eslint-disable */',
  `export const schema = ${JSON.stringify(require('./node_modules/@liquify/schema/esthetic.json'), null, 2)}`
].join('\n');

writeFileSync(join(cwd, 'src/monaco/schema.ts'), store);

const PROD = process.env.NODE_ENV === 'production';
const BUILD: Options[] = [
  {
    entry: {
      moloko: './src/index.ts'
    },
    clean: false,
    platform: 'browser',
    name: 'Moloko',
    noExternal: [
      'url-join',
      'lz-string',
      'mergerino'
    ],
    minify: PROD ? 'terser' : false,
    treeshake: 'smallest',
    splitting: false,
    shims: false,
    target: 'es6',
    bundle: true,
    format: [ 'esm' ]
  }
];

if (PROD) {

  mkdirSync('./dist/modules');
  copyFileSync('./node_modules/esthetic/dist/esthetic.mjs', './dist/modules/esthetic.js');
  copyFileSync('./node_modules/mithril/mithril.min.js', './dist/modules/mithril.js');

  BUILD.push({
    entry: {
      monaco: './node_modules/monaco-editor/esm/vs/editor/editor.main.js'
    },
    loader: {
      '.ttf': 'file'
    },
    name: 'Moloko',
    outDir: 'dist/monaco',
    clean: false,
    platform: 'browser',
    minify: 'terser',
    treeshake: 'smallest',
    splitting: false,
    shims: false,
    target: 'es6',
    bundle: true,
    format: [ 'esm' ],
    outExtension () {
      return {
        js: '.js'
      };
    }
  },
  {
    entry: {
      monaco: './node_modules/monaco-editor/esm/vs/editor/editor.main.js',
      'workers/json': './node_modules/monaco-editor/esm/vs/language/json/json.worker.js',
      'workers/css': './node_modules/monaco-editor/esm/vs/language/css/css.worker.js',
      'workers/html': './node_modules/monaco-editor/esm/vs/language/html/html.worker.js',
      'workers/typescript': './node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js',
      'workers/editor': './node_modules/monaco-editor/esm/vs/editor/editor.worker.js'
    },
    name: 'Moloko',
    outDir: 'dist/monaco',
    clean: false,
    platform: 'browser',
    minify: 'terser',
    treeshake: 'smallest',
    splitting: false,
    shims: false,
    target: 'es6',
    bundle: true,
    format: [ 'iife' ],
    outExtension () {
      return {
        js: '.js'
      };
    }
  });
}

export default BUILD;
