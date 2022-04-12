'use strict';

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

module.exports = validator;
//# sourceMappingURL=index.js.map
