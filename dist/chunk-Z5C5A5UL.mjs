// src/core/metaSort.ts
import _ from "lodash";
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
  if (_.isEmpty(dictionary)) {
    return this;
  }
  const sortArray = _.castArray(sort);
  const sortByArray = _.castArray(sortBy);
  if (sortArray.length !== sortByArray.length) {
    return this;
  }
  const sortDirections = /* @__PURE__ */ new Set(["asc", "desc"]);
  sortByArray.forEach((currSortByKey, currSortByIndex) => {
    if (!dictionary[currSortByKey]) {
      return;
    }
    const currSort = sortArray[currSortByIndex];
    if (!sortDirections.has(currSort)) {
      return;
    }
    const currSortBy = _.castArray(dictionary[currSortByKey]);
    currSortBy.forEach((sortCol) => {
      this.orderBy(sortCol, currSort);
    });
  });
  return this;
}

export {
  metaSort
};
