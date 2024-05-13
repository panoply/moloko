import type { Options } from 'tsup';
import { copyFileSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const cwd = process.cwd();
const json = readFileSync('./node_modules/@liquify/schema/esthetic.json', 'utf-8');
const store = [
  '/* eslint-disable */',
  `export const schema = ${json}`
].join('\n');

writeFileSync(join(cwd, 'src/monaco/schema.ts'), store);

const PROD = process.env.NODE_ENV === 'production';
const BUILD: Options[] = [
  {
    entry: {
      moloko: './src/index.ts',
      'sample/plaintext': './src/samples/plaintext.ts',
      'sample/html': './src/samples/html.ts',
      'sample/xml': './src/samples/xml.ts',
      'sample/liquid': './src/samples/liquid.ts',
      'sample/css': './src/samples/css.ts',
      'sample/json': './src/samples/json.ts',
      'sample/scss': './src/samples/scss.ts',
      'sample/javascript': './src/samples/javascript.ts',
      'sample/typescript': './src/samples/typescript.ts',
      'sample/jsx': './src/samples/jsx.ts',
      'sample/tsx': './src/samples/tsx.ts',
      'sample/yaml': './src/samples/yaml.ts'
    },
    clean: false,
    platform: 'browser',
    name: 'Moloko',
    noExternal: [
      'url-join',
      'lz-string',
      'mergerino'
    ],
    minify: PROD,
    treeshake: 'smallest',
    splitting: false,
    shims: false,
    target: 'es2018',
    bundle: true,
    format: [ 'esm' ]
  },
  {
    entry: {
      'functions/shortner': './src/functions/shortner.ts'
    },
    outDir: 'public',
    clean: false,
    platform: 'node',
    name: 'Functions',
    minify: true,
    splitting: false,
    external: [
      '@octokit/core'
    ],
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
    minify: PROD,
    platform: 'browser',
    treeshake: 'smallest',
    splitting: false,
    shims: false,
    target: 'es2018',
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
      monaco: './node_modules/monaco-editor/esm/vs/editor/edcore.main.js',
      'workers/json': './node_modules/monaco-editor/esm/vs/language/json/json.worker.js',
      'workers/css': './node_modules/monaco-editor/esm/vs/language/css/css.worker.js',
      'workers/html': './node_modules/monaco-editor/esm/vs/language/html/html.worker.js',
      'workers/typescript': './node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js',
      'workers/editor': './node_modules/monaco-editor/esm/vs/editor/editor.worker.js'
    },
    name: 'Moloko',
    outDir: 'dist/monaco',
    clean: false,
    minify: PROD,
    platform: 'browser',
    treeshake: 'smallest',
    splitting: false,
    shims: false,
    target: 'es2018',
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
