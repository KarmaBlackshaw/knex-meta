import {
  isArray
} from "./chunk-PCDTXPNN.mjs";

// utils/array.ts
function toArray(foo) {
  return isArray(foo) ? foo : [foo];
}

export {
  toArray
};
