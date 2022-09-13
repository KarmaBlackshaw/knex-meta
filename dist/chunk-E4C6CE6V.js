"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkHOFJ5C5Hjs = require('./chunk-HOFJ5C5H.js');




var _chunk6YPE5F7Ujs = require('./chunk-6YPE5F7U.js');

// src/core/metaFilter.ts
function searchArrayDictionary(dictionaryProp, q) {
  return this.where(function() {
    dictionaryProp.forEach((filter) => {
      this.orWhere(...whereString(filter, q));
    });
  });
}
function whereString(filterBy, q) {
  return _chunkHOFJ5C5Hjs.isQuoteWrapped.call(void 0, q) ? [filterBy, "like", _chunkHOFJ5C5Hjs.trimQuotes.call(void 0, q)] : [filterBy, "like", `%${q}%`];
}
function metaFilter({
  filterBy,
  q,
  dictionary = {},
  searchItems
} = {}) {
  if (filterBy && q) {
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
            return searchArrayDictionary.apply(this, [
              currFilter,
              currQ
            ]);
          }
          this.where(...whereString(currFilter, currQ));
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
            return searchArrayDictionary.apply(this, [
              dictionaryFilterValue,
              q
            ]);
          }
          this.orWhere(...whereString(dictionary[currFilter], q));
        });
      });
    }
    if (isArrayQ && _chunk6YPE5F7Ujs.isString.call(void 0, filterBy) && dictionary[filterBy]) {
      return this.where(function() {
        q.forEach((currQ) => {
          this.orWhere(...whereString(dictionary[filterBy], currQ));
        });
      });
    }
    if (_chunk6YPE5F7Ujs.isString.call(void 0, filterBy) && _chunk6YPE5F7Ujs.isString.call(void 0, q)) {
      const filterDictionary = dictionary[filterBy];
      const isArrayDictionary = _chunk6YPE5F7Ujs.isArray.call(void 0, filterDictionary);
      if (isArrayDictionary) {
        return searchArrayDictionary.apply(this, [
          filterDictionary,
          q
        ]);
      }
    }
    if (_chunk6YPE5F7Ujs.isString.call(void 0, filterBy) && dictionary[filterBy]) {
      return this.where(...whereString(dictionary[filterBy], q));
    }
  }
  if (!_chunk6YPE5F7Ujs.isEmpty.call(void 0, searchItems)) {
    this.where(function() {
      searchItems.forEach((_search) => {
        this.orWhere(function() {
          for (const key in _search) {
            const value = _search[key];
            if (value === void 0) {
              return;
            }
            if (!dictionary[key]) {
              return;
            }
            this.where(...whereString(dictionary[key], value));
          }
        });
      });
    });
  }
  return this;
}



exports.metaFilter = metaFilter;
