"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIOVEVJI5js = require('./chunk-IOVEVJI5.js');

// src/jsonObject.ts
function jsonObject(data) {
  const pairs = [];
  for (const key in data) {
    const curr = data[key];
    if (_chunkIOVEVJI5js.isObject.call(void 0, curr)) {
      pairs.push(`"${key}"`, jsonObject(curr));
    } else {
      pairs.push(`"${key}"`, curr);
    }
  }
  return this.client.raw(`JSON_OBJECT(${pairs.join(", ")})`);
}



exports.jsonObject = jsonObject;
