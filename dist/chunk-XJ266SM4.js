"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkVKDJXQUCjs = require('./chunk-VKDJXQUC.js');


var _chunk6YPE5F7Ujs = require('./chunk-6YPE5F7U.js');

// src/core/metaInsert.ts
var _pickBy2 = require('lodash/pickBy'); var _pickBy3 = _interopRequireDefault(_pickBy2);
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
  const arrayPayload = _chunkVKDJXQUCjs.toArray.call(void 0, payload);
  const filterer = (hay) => _pickBy3.default.call(void 0, hay, (val, key) => {
    return !_chunk6YPE5F7Ujs.isNil.call(void 0, val) && fillablesSet.has(key);
  });
  const data = arrayPayload.map(filterer);
  return this.insert(data);
}



exports.metaInsert = metaInsert;
