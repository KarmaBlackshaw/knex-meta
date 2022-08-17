"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6YPE5F7Ujs = require('./chunk-6YPE5F7U.js');

// src/core/metaPage.ts
function metaPage({
  page,
  rows,
  isCount
} = { isCount: false }) {
  if (isCount) {
    return this;
  }
  if (!_chunk6YPE5F7Ujs.isNumber.call(void 0, page) || !_chunk6YPE5F7Ujs.isNumber.call(void 0, rows)) {
    return this;
  }
  return this.limit(rows).offset(rows * (page - 1));
}



exports.metaPage = metaPage;
