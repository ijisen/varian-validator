/**! 
 * varian-validator v0.0.1 
 * Lightweight JavaScript form validation. 
 * 
 * Copyright (c) 2022 ji sen  (https://github.com/jaywcjlove) 
 * http://ijisen.github.io/validator.js 
 * Licensed under the MIT license 
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Validator = factory());
})(this, (function () { 'use strict';

    function matchedData(options) {
      if (options === void 0) {
        options = {};
      }

      console.log(options);
    }
    function getData(options) {
      if (options === void 0) {
        options = {
          include: true,
          only: false
        };
      }

      console.log(options);
    }

    var version = '0.0.1';
    var validator = {
      version: version,
      matchedData: matchedData,
      getData: getData
    };

    return validator;

}));
//# sourceMappingURL=validator.js.map
