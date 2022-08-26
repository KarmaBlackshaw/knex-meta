"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6YPE5F7Ujs = require('./chunk-6YPE5F7U.js');

// src/core/metaFind.ts
function metaFind(conditions, dictionary) {
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
    if (dictionary[key] && !_chunk6YPE5F7Ujs.isNil.call(void 0, curr)) {
      hasCondition = true;
      this.where(dictionary[key], "LIKE", curr);
    }
  }
  if (!hasCondition) {
    return this.where("1 = 0");
  }
  return this.first();
}



exports.metaFind = metaFind;
