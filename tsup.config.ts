import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: {
      moloko: './src/index.ts'
    },
    clean: false,
    platform: 'browser',
    external: process.env.production ? [
      'mithril',
      'esthetic'
    ] : [],
    noExternal: process.env.production ? [] : [
      'bss',
      'lz-string',
      'mergerino',
      'mithril',
      'esthetic'
    ],
    minify: process.env.production ? 'terser' : false,
    skipNodeModulesBundle: false,
    treeshake: 'smallest',
    splitting: false,
    shims: false,
    loader: {
      '.ttf': 'file'
    },
    target: 'es6',
    bundle: true,
    format: [ 'esm' ],
    outExtension () {
      return {
        js: '.js'
      };
    }
  }
  // {
  //   entry: {
  //     monaco: './node_modules/monaco-editor/esm/vs/editor/editor.main.js'
  //   },
  //   clean: false,
  //   platform: 'browser',
  //   minify: 'terser',
  //   treeshake: 'smallest',
  //   splitting: false,
  //   shims: false,
  //   target: 'es6',
  //   bundle: true,
  //   format: [ 'esm' ],
  //   outExtension () {
  //     return {
  //       js: '.js'
  //     };
  //   }
  // },
  // {
  //   entry: {
  //     monaco: './node_modules/monaco-editor/esm/vs/editor/editor.main.js',
  //     'workers/json': './node_modules/monaco-editor/esm/vs/language/json/json.worker.js',
  //     'workers/css': './node_modules/monaco-editor/esm/vs/language/css/css.worker.js',
  //     'workers/html': './node_modules/monaco-editor/esm/vs/language/html/html.worker.js',
  //     'workers/typescript': './node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js',
  //     'workers/editor': './node_modules/monaco-editor/esm/vs/editor/editor.worker.js'
  //   },
  //   clean: false,
  //   platform: 'browser',
  //   minify: 'terser',
  //   treeshake: 'smallest',
  //   splitting: false,
  //   shims: false,
  //   target: 'es6',
  //   bundle: true,
  //   format: [ 'iife' ],
  //   outExtension () {
  //     return {
  //       js: '.js'
  //     };
  //   }
  // }
]);
