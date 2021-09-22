// Import rollup plugins
import html from '@web/rollup-plugin-html'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import minifyHTML from 'rollup-plugin-minify-html-literals'
import summary from 'rollup-plugin-summary'
import serve from 'rollup-plugin-serve'
import copy from 'rollup-plugin-copy'

console.log(process.env.BUILD)

export default {
  plugins: [
    typescript(),
    // Entry point for application build; can specify a glob to build multiple
    // HTML files for non-SPA app
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    // Print bundle summary
    summary(),
    // Optional: copy any static assets to build directory
    copy({
      targets: [
        { src: ['manifest.json', 'background.js'], dest: 'build' },
        {
          src: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
          dest: 'build/polyfills',
        },
      ],
    }),
    process.env.BUILD === 'production' && minifyHTML(),
  ],
  input: 'src/index.ts',
  output: {
    dir: 'build',
  },
  preserveEntrySignatures: 'strict',
}
