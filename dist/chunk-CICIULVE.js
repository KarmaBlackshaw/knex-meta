"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk22YCQZ2Sjs = require('./chunk-22YCQZ2S.js');

// src/metaPage.ts
function metaPage({
  page,
  rows,
  isCount
} = { isCount: false }) {
  if (isCount) {
    return this;
  }
  if (!_chunk22YCQZ2Sjs.isNumber.call(void 0, page) || !_chunk22YCQZ2Sjs.isNumber.call(void 0, rows)) {
    return this;
  }
  return this.limit(rows).offset(rows * (page - 1));
}



exports.metaPage = metaPage;
