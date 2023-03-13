"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('../../chunk-EZUCZHGV.js');

// src/core/metaPage/index.ts
var _lodash = require('lodash'); var _lodash2 = _interopRequireDefault(_lodash);
function metaPage({
  page,
  rows,
  isCount
} = { isCount: false }) {
  if (isCount) {
    return this;
  }
  if (!_lodash2.default.isNumber(page) || !_lodash2.default.isNumber(rows)) {
    return this;
  }
  return this.limit(rows).offset(rows * (page - 1));
}


exports.metaPage = metaPage;
