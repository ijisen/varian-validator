import plugins from './config/rollup.output.plugins'
import format from './config/rollup.output.format';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';
// 添加[package.jsons]说明文本
import banner from 'bannerjs';


// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.typings, format: "es" }
    ],
    plugins: plugins.ts
  }
]
