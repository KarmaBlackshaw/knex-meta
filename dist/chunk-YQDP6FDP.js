"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/core/metaUpdate/index.ts
var _lodash = require('lodash'); var _lodash2 = _interopRequireDefault(_lodash);
function metaUpdate(payload, dictionary) {
  if (!payload || !dictionary) {
    if (!payload) {
      throw new TypeError("Payload of undefined is not permitted");
    }
    if (!dictionary) {
      throw new TypeError("Dictionary of undefined is not permitted");
    }
  }
  const updateData = {};
  for (const key in payload) {
    const updateValue = payload[key];
    const currDictionary = dictionary[key];
    if (updateValue === void 0 || !currDictionary) {
      continue;
    }
    updateData[currDictionary] = updateValue;
  }
  if (_lodash2.default.isEmpty(updateData)) {
    return this;
  }
  return this.update(updateData);
}



exports.metaUpdate = metaUpdate;
