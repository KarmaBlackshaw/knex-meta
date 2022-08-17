import {
  isArray,
  isString
} from "./chunk-GRXPJ7I5.mjs";

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
  const isArrayFilterBy = isArray(filterBy);
  const isArrayQ = isArray(q);
  if (isArrayFilterBy && isArrayQ) {
    return this.where(function() {
      q.forEach((currQ, currQIndex) => {
        const currFilter = dictionary[filterBy[currQIndex]];
        if (!currQ || !currFilter) {
          return;
        }
        if (isArray(currFilter)) {
          return handleArrayDictionary.apply(this, [
            currFilter,
            currQ
          ]);
        }
        this.where(currFilter, "like", `%${currQ}%`);
      });
    });
  }
  if (isArrayFilterBy && isString(q)) {
    return this.where(function() {
      filterBy.forEach((currFilter) => {
        const dictionaryFilterValue = dictionary[currFilter];
        if (!dictionaryFilterValue) {
          return;
        }
        if (isArray(dictionaryFilterValue)) {
          return handleArrayDictionary.apply(this, [
            dictionaryFilterValue,
            q
          ]);
        }
        this.orWhere(dictionary[currFilter], "like", `%${q}%`);
      });
    });
  }
  if (isArrayQ && isString(filterBy) && dictionary[filterBy]) {
    return this.where(function() {
      q.forEach((currQ) => {
        this.orWhere(dictionary[filterBy], "like", `%${currQ}%`);
      });
    });
  }
  if (isString(filterBy) && isString(q)) {
    const filterDictionary = dictionary[filterBy];
    const isArrayDictionary = isArray(filterDictionary);
    if (isArrayDictionary) {
      return handleArrayDictionary.apply(this, [
        filterDictionary,
        q
      ]);
    }
  }
  if (isString(filterBy) && dictionary[filterBy]) {
    return this.where(dictionary[filterBy], "like", `%${q}%`);
  }
  return this;
}

export {
  metaFilter
};
