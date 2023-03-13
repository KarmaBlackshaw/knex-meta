"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


var _chunkHOFJ5C5Hjs = require('../../chunk-HOFJ5C5H.js');
require('../../chunk-EZUCZHGV.js');

// src/core/metaFilter/index.ts
var _lodash = require('lodash'); var _lodash2 = _interopRequireDefault(_lodash);
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
    const isArrayFilterBy = _lodash2.default.isArray(filterBy);
    const isArrayQ = _lodash2.default.isArray(q);
    if (isArrayFilterBy && isArrayQ) {
      return this.where(function() {
        q.forEach((currQ, currQIndex) => {
          const currFilter = dictionary[filterBy[currQIndex]];
          if (!currQ || !currFilter) {
            return;
          }
          if (_lodash2.default.isArray(currFilter)) {
            return searchArrayDictionary.apply(this, [
              currFilter,
              currQ
            ]);
          }
          this.where(...whereString(currFilter, currQ));
        });
      });
    }
    if (isArrayFilterBy && _lodash2.default.isString(q)) {
      return this.where(function() {
        filterBy.forEach((currFilter) => {
          const dictionaryFilterValue = dictionary[currFilter];
          if (!dictionaryFilterValue) {
            return;
          }
          if (_lodash2.default.isArray(dictionaryFilterValue)) {
            return searchArrayDictionary.apply(this, [
              dictionaryFilterValue,
              q
            ]);
          }
          this.orWhere(...whereString(dictionary[currFilter], q));
        });
      });
    }
    if (isArrayQ && _lodash2.default.isString(filterBy) && dictionary[filterBy]) {
      return this.where(function() {
        q.forEach((currQ) => {
          this.orWhere(...whereString(dictionary[filterBy], currQ));
        });
      });
    }
    if (_lodash2.default.isString(filterBy) && _lodash2.default.isString(q)) {
      const filterDictionary = dictionary[filterBy];
      const isArrayDictionary = _lodash2.default.isArray(filterDictionary);
      if (isArrayDictionary) {
        return searchArrayDictionary.apply(this, [
          filterDictionary,
          q
        ]);
      }
    }
    if (_lodash2.default.isString(filterBy) && dictionary[filterBy]) {
      return this.where(...whereString(dictionary[filterBy], q));
    }
  }
  if (!_lodash2.default.isEmpty(searchItems)) {
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
