import {
  isArray,
  isObject
} from "./chunk-GRXPJ7I5.mjs";

// src/utils/object.ts
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
function omitBy(obj, cb) {
  const returnObj = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (cb(value, key)) {
        returnObj[key] = value;
      }
    }
  }
  return returnObj;
}

export {
  isEmpty,
  size,
  omitBy
};
