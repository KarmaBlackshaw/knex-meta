import {
  isEmpty
} from "./chunk-PCDTXPNN.mjs";

// src/metaUpdate.ts
function metaUpdate(payload, dictionary) {
  if (!payload || !dictionary) {
    if (!payload) {
      throw new TypeError("Payload of undefined is not permitted");
    }
    if (!dictionary) {
      throw new TypeError("Dictionary of undefined is not permitted");
    }
  }
  const updateData = {};
  for (const key in payload) {
    const updateValue = payload[key];
    const currDictionary = dictionary[key];
    if (updateValue === void 0 || !currDictionary) {
      continue;
    }
    updateData[currDictionary] = updateValue;
  }
  if (isEmpty(updateData)) {
    return this;
  }
  return this.update(updateData);
}

export {
  metaUpdate
};
