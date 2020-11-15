import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy';
import ts from "@wessberg/rollup-plugin-ts";

const production = process.env.NODE_ENV === 'production';

const output = {
  sourcemap: !production,
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
}

export default {
  input: './src/index.ts',
  output: [
    {
      ...output,
      file: 'dist/cjs/index.js',
      format: 'cjs'
    },
    {
      ...output,
      file: 'dist/es/index.js',
      format: 'es'
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE)
    }),
    ts(),
    copy({
      targets: [
        { src: 'icons/*', dest: 'dist/icons' }
      ]
    }),
    postcss({
      extract: false,
      use: ['sass']
    }),
    nodeResolve({
      browser: true
    }),
    production ? terser() : null
  ]
};
