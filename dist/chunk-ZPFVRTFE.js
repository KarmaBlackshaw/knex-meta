"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk22YCQZ2Sjs = require('./chunk-22YCQZ2S.js');

// utils/object.ts
function isEmpty(val) {
  if (_chunk22YCQZ2Sjs.isArray.call(void 0, val)) {
    return val.length === 0;
  }
  if (_chunk22YCQZ2Sjs.isObject.call(void 0, val)) {
    return Object.keys(val).length === 0;
  }
  return !val;
}
function size(val) {
  if (_chunk22YCQZ2Sjs.isArray.call(void 0, val)) {
    return val.length;
  }
  if (_chunk22YCQZ2Sjs.isObject.call(void 0, val)) {
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
  if (_chunk22YCQZ2Sjs.isArray.call(void 0, sortBy) && _chunk22YCQZ2Sjs.isArray.call(void 0, sort)) {
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
  if (_chunk22YCQZ2Sjs.isString.call(void 0, sortBy) && _chunk22YCQZ2Sjs.isString.call(void 0, sort)) {
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
