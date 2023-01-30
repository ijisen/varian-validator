import plugins from './config/rollup.output.plugins'
import format from './config/rollup.output.format';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';
// 添加[package.jsons]说明文本
import banner from 'bannerjs';


// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !!process.env.ROLLUP_WATCH;

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        // /lib/index
        format: format.cjs,
        // name: 'Validator',
        exports: 'auto',
        banner: banner.multibanner(),
        sourcemap: true
      },
      {
        // file: pkg.module,
        file: pkg.module,
        // es/index
        format: format.esm,
        // name: 'Validator',
        banner: banner.multibanner(),
        sourcemap: true
      },
      {
        file: pkg.unpkg,
        // dist/validator.js
        format: format.umd,
        // 当format为 life/umd时必须提供；做为全局变量挂在window下面。 window.A
        name: 'Validator',
        banner: banner.multibanner(),
        sourcemap: true
      }
    ],
    plugins: [
      ...plugins.js,
      production && terser({
        compress: {
          drop_console: true
        }
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/validator.min.js',
        format: format.umd,
        // 当format为 life/umd时必须提供；做为全局变量挂在window下面。 window.A
        name: 'Validator',
        banner: banner.onebanner(),
        sourcemap: true
      }
    ],
    plugins: [
      ...plugins.js,
      production && terser({
        compress: {
          drop_console: true
        }
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.types,
        format: "es"
      }
    ],
    plugins: plugins.ts
  }
]
