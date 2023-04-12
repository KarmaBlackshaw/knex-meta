"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkMZJRW37Vjs = require('./chunk-MZJRW37V.js');

// src/core/metaSort/index.ts
var _lodash = require('lodash'); var _lodash2 = _interopRequireDefault(_lodash);
function metaSort({
  sort,
  sortBy,
  dictionary = {},
  isCount = false
} = {}) {
  _chunkMZJRW37Vjs.deprecate.call(void 0, {
    oldMethod: "metaSort",
    newMethod: "metaQuery"
  });
  if (isCount) {
    return this;
  }
  if (!sort || !sortBy) {
    return this;
  }
  if (_lodash2.default.isEmpty(dictionary)) {
    return this;
  }
  const sortArray = _lodash2.default.castArray(sort);
  const sortByArray = _lodash2.default.castArray(sortBy);
  if (sortArray.length !== sortByArray.length) {
    return this;
  }
  const sortDirections = /* @__PURE__ */ new Set(["asc", "desc"]);
  sortByArray.forEach((currSortByKey, currSortByIndex) => {
    if (!dictionary[currSortByKey]) {
      return;
    }
    const currSort = sortArray[currSortByIndex];
    if (!sortDirections.has(currSort)) {
      return;
    }
    const currSortBy = _lodash2.default.castArray(dictionary[currSortByKey]);
    currSortBy.forEach((sortCol) => {
      this.orderBy(sortCol, currSort);
    });
  });
  return this;
}



exports.metaSort = metaSort;
