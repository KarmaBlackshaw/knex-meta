import {
  isEmpty,
  size
} from "./chunk-FHW35CUF.mjs";
import {
  isArray,
  isString
} from "./chunk-GRXPJ7I5.mjs";

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
      this.orderBy(dictionary[currSortBy], sortDirection);
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
    this.orderBy(dictionary[sortBy], sort);
    return this;
  }
}

export {
  metaSort
};
