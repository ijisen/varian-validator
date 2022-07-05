import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
// 插件可以告诉 Rollup 如何查找外部模块
import { nodeResolve } from '@rollup/plugin-node-resolve';
// 将 CommonJS 模块转换为 ES2015 供 Rollup 处理
import commonjs from '@rollup/plugin-commonjs';
import dts from "rollup-plugin-dts";
import del from "rollup-plugin-delete";

export default {
  js: [
    del({
      targets: ['dist/*', 'es/*', 'lib/*'],
      verbose: true,
      runOnce: true
    }),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    commonjs(),
    json({
      preferConst: true
    }),
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.ts']
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.ts']
    })
  ],
  ts: [
    json(),
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.ts']
    }),
    dts()
  ]
}
