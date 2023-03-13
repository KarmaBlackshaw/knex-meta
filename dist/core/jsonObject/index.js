"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('../../chunk-EZUCZHGV.js');

// src/core/jsonObject/index.ts
var _lodash = require('lodash'); var _lodash2 = _interopRequireDefault(_lodash);
function jsonObject(data) {
  const pairs = [];
  for (const key in data) {
    const curr = data[key];
    if (_lodash2.default.isPlainObject(curr)) {
      pairs.push(`"${key}"`, jsonObject(curr));
    } else {
      pairs.push(`"${key}"`, curr);
    }
  }
  return this.client.raw(`JSON_OBJECT(${pairs.join(", ")})`);
}


exports.jsonObject = jsonObject;
