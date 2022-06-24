/**! 
 * varian-validator v0.0.2 
 * Lightweight JavaScript form validation. 
 * 
 * Copyright (c) 2022 ji sen  (https://github.com/ijisen) 
 * https://github.com/ijisen/varian-validator 
 * Licensed under the MIT license 
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Validator = {}));
})(this, (function (exports) { 'use strict';

    const Button = 'export default Button;';

    /**
     * 标签语义化
     *
     * */
    var escape = (str => {
      if (typeof str !== "string") {
        return false;
      }

      return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
    });

    var index = {
      version: 'version'
    };

    exports.Button = Button;
    exports.escape = escape;
    exports.version = index;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=validator.js.map
