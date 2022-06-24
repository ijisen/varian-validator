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

export { Button, escape, index as version };
//# sourceMappingURL=index.js.map
