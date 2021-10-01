// Import rollup plugins
import html from '@web/rollup-plugin-html'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import minifyHTML from 'rollup-plugin-minify-html-literals'
import summary from 'rollup-plugin-summary'
import serve from 'rollup-plugin-serve'
import copy from 'rollup-plugin-copy'
import replace from 'rollup-plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { babel } from '@rollup/plugin-babel'

const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  commonjs(),
  resolve(),
  summary(),
  copy({
    targets: [
      { src: ['manifest.json'], dest: 'build' },
      {
        src: [
          'node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
        ],
        dest: 'build/polyfills',
      },
      {
        src: [
          'assets',
        ],
        dest: 'build/assets',
      },
    ],
  }),
]

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'build',
    },
    preserveEntrySignatures: 'strict',
    plugins: [...plugins, typescript({ outDir: 'build' })],
  },
  {
    input: 'src/popup/app.ts',
    output: {
      dir: 'build/popup',
    },
    preserveEntrySignatures: 'strict',
    plugins: [
      ...plugins,
      typescript({
        outDir: 'build/popup',
        declaration: false,
        declarationMap: false,
      }),
      html({input: './src/popup/popup.html' }),
    ],
  },
]
