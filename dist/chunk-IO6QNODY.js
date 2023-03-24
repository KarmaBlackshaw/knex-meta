"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/core/metaInsert/index.ts
var _lodash = require('lodash'); var _lodash2 = _interopRequireDefault(_lodash);
function metaInsert(payload, options) {
  const fields = options.fields;
  const jsonFields = options.json_fields;
  if (!payload || !fields) {
    if (!payload) {
      throw new TypeError("Payload of undefined is not permitted");
    }
    if (!fields) {
      throw new TypeError("Dictionary of undefined is not permitted");
    }
  }
  const fieldSet = new Set(fields);
  const jsonFieldSet = new Set(jsonFields);
  const toInsert = [];
  const arrayPayload = _lodash2.default.castArray(payload);
  arrayPayload.forEach((currPayload) => {
    for (const field in currPayload) {
      const fieldValue = currPayload[field];
      if (!fieldSet.has(field)) {
        delete currPayload[field];
      }
      if (jsonFieldSet.has(field) && _lodash2.default.isObject(fieldValue)) {
        currPayload[field] = JSON.stringify(currPayload[field]);
      }
    }
    toInsert.push(currPayload);
  });
  return this.insert(toInsert);
}



exports.metaInsert = metaInsert;
