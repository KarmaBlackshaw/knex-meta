import {
  isNumber
} from "./chunk-Q2BL4KY6.mjs";

// src/metaPage.ts
function metaPage({
  page,
  rows,
  isCount
} = { isCount: false }) {
  if (isCount) {
    return this;
  }
  if (!isNumber(page) || !isNumber(rows)) {
    return this;
  }
  return this.limit(rows).offset(rows * (page - 1));
}

export {
  metaPage
};
