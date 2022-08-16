"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkIOVEVJI5js = require('./chunk-IOVEVJI5.js');

// utils/object.ts
function isEmpty(val) {
  if (_chunkIOVEVJI5js.isArray.call(void 0, val)) {
    return val.length === 0;
  }
  if (_chunkIOVEVJI5js.isObject.call(void 0, val)) {
    return Object.keys(val).length === 0;
  }
  return !val;
}
function size(val) {
  if (_chunkIOVEVJI5js.isArray.call(void 0, val)) {
    return val.length;
  }
  if (_chunkIOVEVJI5js.isObject.call(void 0, val)) {
    return Object.keys(val).length;
  }
  return 0;
}

// src/metaSort.ts
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
  if (isEmpty(dictionary)) {
    return this;
  }
  const sortDirections = /* @__PURE__ */ new Set(["asc", "desc"]);
  if (_chunkIOVEVJI5js.isArray.call(void 0, sortBy) && _chunkIOVEVJI5js.isArray.call(void 0, sort)) {
    if (size(sortBy) !== size(sort)) {
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
      this.orderBy(currSortBy, sortDirection);
    }
    return this;
  }
  if (_chunkIOVEVJI5js.isString.call(void 0, sortBy) && _chunkIOVEVJI5js.isString.call(void 0, sort)) {
    if (!sortDirections.has(sort)) {
      return this;
    }
    if (!dictionary[sortBy]) {
      return this;
    }
    this.orderBy(sortBy, sort);
    return this;
  }
}



exports.metaSort = metaSort;
