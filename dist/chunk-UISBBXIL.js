"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/core/metaUpdate/index.ts
var _lodash = require('lodash'); var _lodash2 = _interopRequireDefault(_lodash);
var quoter = (foo) => {
  if (typeof foo === "number") {
    return foo;
  }
  if (typeof foo === "string") {
    return `'${foo}'`;
  }
  if (foo == null ? void 0 : foo.sql) {
    return foo.sql;
  }
  console.warn(`${typeof foo} is not accounted.`);
};
function metaUpdate(keyConditions, payload = [], options) {
  const keyConditionsArray = _lodash2.default.castArray(keyConditions);
  const payloadArray = _lodash2.default.castArray(payload);
  const fields = options.fields || {};
  const elses = options.else || {};
  const whereConditions = [];
  const caseConditionsByField = {};
  payloadArray.forEach((currPayload) => {
    const condition = {};
    keyConditionsArray.forEach((key) => {
      if (!fields[key]) {
        console.warn(`[WARNING] bulkUpdates: "${key}" is not defined in fields`);
      }
      condition[fields[key]] = currPayload[key];
      delete currPayload[key];
    });
    whereConditions.push(condition);
    const whenCondition = Object.entries(condition).map(([field, value]) => `${field} = ${quoter(value)}`).join(" AND ");
    for (const field in currPayload) {
      if (!fields[field]) {
        continue;
      }
      if (!caseConditionsByField[field]) {
        caseConditionsByField[field] = [];
      }
      const elseStr = elses[field] ? `ELSE ${quoter(elses[field])}` : "";
      const whenStr = `WHEN (${whenCondition}) THEN ${quoter(currPayload[field])} ${elseStr}`;
      caseConditionsByField[field].push(whenStr);
    }
  });
  for (const field in caseConditionsByField) {
    const fieldCases = caseConditionsByField[field];
    caseConditionsByField[field] = this.client.raw(`CASE ${fieldCases.join(" ")} END`);
  }
  return this.where(function() {
    whereConditions.forEach((condition) => {
      this.orWhere(condition);
    });
  }).update(caseConditionsByField);
}



exports.metaUpdate = metaUpdate;
