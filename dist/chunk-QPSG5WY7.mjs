import {
  isArray,
  isObject,
  isString
} from "./chunk-PCDTXPNN.mjs";

// utils/object.ts
function isEmpty(val) {
  if (isArray(val)) {
    return val.length === 0;
  }
  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }
  return !val;
}
function size(val) {
  if (isArray(val)) {
    return val.length;
  }
  if (isObject(val)) {
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
  if (isArray(sortBy) && isArray(sort)) {
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
  if (isString(sortBy) && isString(sort)) {
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

export {
  metaSort
};
