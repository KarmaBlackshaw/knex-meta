"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk6YPE5F7Ujs = require('./chunk-6YPE5F7U.js');

// src/core/metaFilter.ts
function handleArrayDictionary(dictionaryProp, q) {
  return this.where(function() {
    dictionaryProp.forEach((filter) => {
      this.orWhere(filter, "like", `%${q}%`);
    });
  });
}
function metaFilter({
  filterBy,
  q,
  dictionary = {}
} = {}) {
  if (!filterBy || !q) {
    return this;
  }
  const isArrayFilterBy = _chunk6YPE5F7Ujs.isArray.call(void 0, filterBy);
  const isArrayQ = _chunk6YPE5F7Ujs.isArray.call(void 0, q);
  if (isArrayFilterBy && isArrayQ) {
    return this.where(function() {
      q.forEach((currQ, currQIndex) => {
        const currFilter = dictionary[filterBy[currQIndex]];
        if (!currQ || !currFilter) {
          return;
        }
        if (_chunk6YPE5F7Ujs.isArray.call(void 0, currFilter)) {
          return handleArrayDictionary.apply(this, [
            currFilter,
            currQ
          ]);
        }
        this.where(currFilter, "like", `%${currQ}%`);
      });
    });
  }
  if (isArrayFilterBy && _chunk6YPE5F7Ujs.isString.call(void 0, q)) {
    return this.where(function() {
      filterBy.forEach((currFilter) => {
        const dictionaryFilterValue = dictionary[currFilter];
        if (!dictionaryFilterValue) {
          return;
        }
        if (_chunk6YPE5F7Ujs.isArray.call(void 0, dictionaryFilterValue)) {
          return handleArrayDictionary.apply(this, [
            dictionaryFilterValue,
            q
          ]);
        }
        this.orWhere(dictionary[currFilter], "like", `%${q}%`);
      });
    });
  }
  if (isArrayQ && _chunk6YPE5F7Ujs.isString.call(void 0, filterBy) && dictionary[filterBy]) {
    return this.where(function() {
      q.forEach((currQ) => {
        this.orWhere(dictionary[filterBy], "like", `%${currQ}%`);
      });
    });
  }
  if (_chunk6YPE5F7Ujs.isString.call(void 0, filterBy) && _chunk6YPE5F7Ujs.isString.call(void 0, q)) {
    const filterDictionary = dictionary[filterBy];
    const isArrayDictionary = _chunk6YPE5F7Ujs.isArray.call(void 0, filterDictionary);
    if (isArrayDictionary) {
      return handleArrayDictionary.apply(this, [
        filterDictionary,
        q
      ]);
    }
  }
  if (_chunk6YPE5F7Ujs.isString.call(void 0, filterBy) && dictionary[filterBy]) {
    return this.where(dictionary[filterBy], "like", `%${q}%`);
  }
  return this;
}



exports.metaFilter = metaFilter;