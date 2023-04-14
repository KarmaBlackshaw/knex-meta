"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMZJRW37Vjs = require('./chunk-MZJRW37V.js');

// src/core/metaPage/index.ts
function metaPage({
  page,
  rows,
  isCount
} = { isCount: false }) {
  _chunkMZJRW37Vjs.deprecate.call(void 0, {
    oldMethod: "metaPage",
    newMethod: "metaQuery"
  });
  if (isCount) {
    return this;
  }
  if (isNaN(page) || isNaN(rows)) {
    return this;
  }
  return this.limit(rows).offset(rows * (page - 1));
}



exports.metaPage = metaPage;
