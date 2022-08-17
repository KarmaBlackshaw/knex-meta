"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6YPE5F7Ujs = require('./chunk-6YPE5F7U.js');

// src/core/metaUpdate.ts
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
  if (_chunk6YPE5F7Ujs.isEmpty.call(void 0, updateData)) {
    return this;
  }
  return this.update(updateData);
}



exports.metaUpdate = metaUpdate;
