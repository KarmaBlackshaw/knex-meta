"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkFJ273CS6js = require('./chunk-FJ273CS6.js');



var _chunk6YPE5F7Ujs = require('./chunk-6YPE5F7U.js');

// src/core/metaSort.ts
function metaSort({
  sort,
  sortBy,
  dictionary = {},
  isCount = false
} = {}) {
  if (isCount) {
    return this;
  }
  if (!sort || !sortBy) {
    return this;
  }
  if (_chunkFJ273CS6js.isEmpty.call(void 0, dictionary)) {
    return this;
  }
  const sortDirections = /* @__PURE__ */ new Set(["asc", "desc"]);
  if (_chunk6YPE5F7Ujs.isArray.call(void 0, sortBy) && _chunk6YPE5F7Ujs.isArray.call(void 0, sort)) {
    if (_chunkFJ273CS6js.size.call(void 0, sortBy) !== _chunkFJ273CS6js.size.call(void 0, sort)) {
      return this;
    }
    for (let i = 0; i < sortBy.length; i++) {
      const currSortBy = sortBy[i];
      const sortDirection = sort[i];
      if (!sortDirections.has(sortDirection)) {
        continue;
      }
      if (!dictionary[currSortBy]) {
        continue;
      }
      this.orderBy(dictionary[currSortBy], sortDirection);
    }
    return this;
  }
  if (_chunk6YPE5F7Ujs.isString.call(void 0, sortBy) && _chunk6YPE5F7Ujs.isString.call(void 0, sort)) {
    if (!sortDirections.has(sort)) {
      return this;
    }
    if (!dictionary[sortBy]) {
      return this;
    }
    this.orderBy(dictionary[sortBy], sort);
    return this;
  }
}



exports.metaSort = metaSort;
