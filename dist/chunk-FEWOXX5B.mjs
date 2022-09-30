import {
  toArray
} from "./chunk-QFJUJ4KH.mjs";
import {
  isNil
} from "./chunk-GRXPJ7I5.mjs";

// src/core/metaInsert.ts
import _pickBy from "lodash/pickBy";
function metaInsert(payload, fillables) {
  if (!payload || !fillables) {
    if (!payload) {
      throw new TypeError("Payload of undefined is not permitted");
    }
    if (!fillables) {
      throw new TypeError("Dictionary of undefined is not permitted");
    }
  }
  const fillablesSet = new Set(fillables);
  const arrayPayload = toArray(payload);
  const filterer = (hay) => _pickBy(hay, (val, key) => {
    return !isNil(val) && fillablesSet.has(key);
  });
  const data = arrayPayload.map(filterer);
  return this.insert(data);
}

export {
  metaInsert
};
