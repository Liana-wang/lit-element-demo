/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const babelConfig = {
  babelrc: false,
  ...{
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            ie: '11',
          },
        },
      ],
    ],
    include: ['src/**', 'node_modules/lit-element/**', 'node_modules/lit-html/**']
  },
};

// const copyConfig = {
//   targets: [
//     { src: 'node_modules/@webcomponents', dest: 'dist/node_modules' },
//     { src: 'node_modules/systemjs/dist/s.min.js', dest: 'dist/node_modules/systemjs/dist' },
//   ],
// };

const configs = [
  // The main JavaScript bundle for modern browsers that support
  // JavaScript modules and other ES2015+ features.
  {
    input: 'dist-transpiled/index.js',
    output: {
      dir: 'dist/',
      entryFileNames: '[name].esm.js',
      format: 'es',
    },
    plugins: [
      babel(babelConfig),
      resolve()
    ],
    preserveEntrySignatures: false,
  },
  // The main JavaScript bundle for older browsers that don't support
  // JavaScript modules or ES2015+.
  {
    input: ['dist-transpiled/index.js'],
    output: {
      dir: 'dist',
      format: 'cjs',
    },
    plugins: [
      commonjs({ include: ['node_modules/**'] }),
      babel(babelConfig),
      resolve(),
    ],
    preserveEntrySignatures: false,
  }
];

export default configs;
