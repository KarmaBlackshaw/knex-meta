"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIOVEVJI5js = require('./chunk-IOVEVJI5.js');

// src/metaPage.ts
function metaPage({
  page,
  rows,
  isCount
} = { isCount: false }) {
  if (isCount) {
    return this;
  }
  if (!_chunkIOVEVJI5js.isNumber.call(void 0, page) || !_chunkIOVEVJI5js.isNumber.call(void 0, rows)) {
    return this;
  }
  return this.limit(rows).offset(rows * (page - 1));
}



exports.metaPage = metaPage;
