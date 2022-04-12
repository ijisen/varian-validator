// 查找外部模块
// import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
// 将 CommonJS 模块转换为 ES6
// import commonjs from "@rollup/plugin-commonjs";
// import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';

export default [
  typescript(),
  // json(),
  // commonjs({ extensions: ['.js', '.ts'] }),
  babel({
    babelHelpers: 'bundled',
    extensions: ['.js', '.ts']
  })
]
