import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                //               exports: 'named',
                //             sourcemap: true
            },
        ],
        plugins: [
            resolve(),
            terser()
        ]
    },
    {
        input: 'src/index.js',
        output: [
            {
                file: pkg.module,
                format: 'es',
                //    exports: 'named',
                //   sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            terser()
        ]
    }
];