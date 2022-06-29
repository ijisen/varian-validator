export default {
  /**
   * 【cjs】 (CommonJS:同步导入模块) const a = require(****); module.exports = {};
   * 【CommonJS，适用于 Node 和 Browserify/Webpack】
   * 1、CommonJS 在NodeJS 环境用，不适用于浏览器；
   * 2、一个文件一个模块；如果有多个导出，则去最后一个导出；
   * 3、使用 exports.xx = ... 或者 module.exports ={} 暴露模块；
   * 4、使用 require() 方法引入一个模块；
   * 5、CJS 是同步导入模块
   * 6、CJS 不能在浏览器中工作。它必须经过转换和打包
   * */
  cjs: 'cjs',

  /**
   * AMD (Asynchronous module definition（异步模块定义）) define(function () {})
   * 1、使用 define(...) 定义一个模块；
   * 2、使用require(...) 加载一个模块；
   * 3、依赖前置，提前执行；
   * 4、RequireJS 是AMD 的一种实现
   *  模块的定义：define(id,dependencies,factory)
   *  模块的使用：require（[module],callback）;
   * */
  amd: 'amd',

  /**
   * AMD (asynchronously：异步模块定义) define(function () {})
   * 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
   * */
  iife: 'iife',

  /**
   * UMD（Universal Module Definition：通用模块定义）;以cjs，amd 和 iife 为一体
   * 这个万能模块，可以在服务端使用，也可以在浏览器端使用；
   * 主要做了三件事：
   *    1、判断是否支持AMD
   *    2、判断是否支持CommonJS
   *    3、如果都不支持，使用全局变量
   * */
  umd: 'umd',

  /**
   * esm – ESM (ECMAScript Module 模块, 异步导入，用于浏览器端)
   * 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
   *  1、它兼具两方面的优点：具有 CJS 的简单语法和 AMD 的异步
   *  2、得益于 ES6 的静态模块结构，可以进行 Tree Shaking
   *  3、ESM 允许像 Rollup 这样的打包器，删除不必要的代码，减少代码包可以获得更快的加载
   *  export xxx； export default xxx；
   * */
  esm: 'esm',

  /**
   *  SystemJS 加载器格式
   * */
  system: 'system'
}
