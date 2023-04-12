"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkMZJRW37Vjs = require('./chunk-MZJRW37V.js');

// src/core/metaFind/index.ts
var _lodash = require('lodash'); var _lodash2 = _interopRequireDefault(_lodash);
function metaFind(conditions, dictionary) {
  _chunkMZJRW37Vjs.deprecate.call(void 0, {
    oldMethod: "metaFind",
    newMethod: "metaQuery"
  });
  if (!conditions || !dictionary) {
    if (!conditions) {
      throw new TypeError("Conditions of undefined is not permitted");
    }
    if (!dictionary) {
      throw new TypeError("Dictionary of undefined is not permitted");
    }
  }
  let hasCondition = false;
  for (const key in conditions) {
    const curr = conditions[key];
    if (dictionary[key] && !_lodash2.default.isNil(curr)) {
      hasCondition = true;
      this.where(dictionary[key], "=", curr);
    }
  }
  if (!hasCondition) {
    return this.where("1 = 0");
  }
  return this.first();
}



exports.metaFind = metaFind;
