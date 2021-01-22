/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

const env = process.env.NODE_ENV

export default {
  input: './dist-transpiled/index.js',
  output: {
    file: 'dist/index.cjs.js',
    format: 'cjs',
    sourcemap: true
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: '**/node_modules/**' }),
  ],
};
