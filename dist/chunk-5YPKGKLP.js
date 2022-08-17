"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk6YPE5F7Ujs = require('./chunk-6YPE5F7U.js');

// src/utils/object.ts
function isEmpty(val) {
  if (_chunk6YPE5F7Ujs.isArray.call(void 0, val)) {
    return val.length === 0;
  }
  if (_chunk6YPE5F7Ujs.isObject.call(void 0, val)) {
    return Object.keys(val).length === 0;
  }
  return !val;
}
function size(val) {
  if (_chunk6YPE5F7Ujs.isArray.call(void 0, val)) {
    return val.length;
  }
  if (_chunk6YPE5F7Ujs.isObject.call(void 0, val)) {
    return Object.keys(val).length;
  }
  return 0;
}




exports.isEmpty = isEmpty; exports.size = size;
