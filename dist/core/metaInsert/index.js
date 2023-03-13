"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('../../chunk-EZUCZHGV.js');

// src/core/metaInsert/index.ts
var _lodash = require('lodash'); var _lodash2 = _interopRequireDefault(_lodash);
function metaInsert(payload, fillables) {
  if (!payload || !fillables) {
    if (!payload) {
      throw new TypeError("Payload of undefined is not permitted");
    }
    if (!fillables) {
      throw new TypeError("Dictionary of undefined is not permitted");
    }
  }
  const fillablesSet = new Set(fillables);
  const arrayPayload = _lodash2.default.castArray(payload);
  const filterer = (hay) => _lodash2.default.pickBy(hay, (val, key) => {
    return !_lodash2.default.isNil(val) && fillablesSet.has(key);
  });
  const data = arrayPayload.map(filterer);
  return this.insert(data);
}


exports.metaInsert = metaInsert;
