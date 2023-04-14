"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/core/meta/index.ts
function meta({
  page,
  rows,
  isCount,
  filterBy,
  filterDictionary,
  q,
  sortBy,
  sort,
  sortDictionary,
  dateBy,
  dateTo,
  dateFrom,
  dateDictionary
} = {}) {
  return this.metaPage({ page, rows, isCount }).metaDate({ dateBy, dateFrom, dateTo, dictionary: dateDictionary }).metaFilter({ filterBy, q, dictionary: filterDictionary }).metaSort({ sortBy, sort, dictionary: sortDictionary, isCount });
}



exports.meta = meta;
