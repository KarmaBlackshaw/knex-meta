"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6YPE5F7Ujs = require('./chunk-6YPE5F7U.js');

// src/core/jsonObject.ts
function jsonObject(data) {
  const pairs = [];
  for (const key in data) {
    const curr = data[key];
    if (_chunk6YPE5F7Ujs.isObject.call(void 0, curr)) {
      pairs.push(`"${key}"`, jsonObject(curr));
    } else {
      pairs.push(`"${key}"`, curr);
    }
  }
  return this.client.raw(`JSON_OBJECT(${pairs.join(", ")})`);
}



exports.jsonObject = jsonObject;
