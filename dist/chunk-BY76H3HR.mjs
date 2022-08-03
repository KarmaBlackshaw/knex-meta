import {
  isObject
} from "./chunk-Q2BL4KY6.mjs";

// src/jsonObject.ts
function jsonObject(data) {
  const pairs = [];
  for (const key in data) {
    const curr = data[key];
    if (isObject(curr)) {
      pairs.push(`"${key}"`, jsonObject(curr));
    } else {
      pairs.push(`"${key}"`, curr);
    }
  }
  return this.client.raw(`JSON_OBJECT(${pairs.join(", ")})`);
}

export {
  jsonObject
};
