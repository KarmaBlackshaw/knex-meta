"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/core/metaUpdate/index.ts
var _lodash = require('lodash'); var _lodash2 = _interopRequireDefault(_lodash);
var quoter = (foo) => {
  if (typeof foo === "number") {
    return foo;
  }
  if (typeof foo === "string") {
    return `'${foo}'`;
  }
  if (!_lodash2.default.isUndefined(foo == null ? void 0 : foo.raw)) {
    return foo.raw;
  }
  if (_lodash2.default.isObject(foo)) {
    return `'${JSON.stringify(foo)}'`;
  }
  if (_lodash2.default.isNull(foo)) {
    return "NULL";
  }
  console.warn(`${typeof foo} is not accounted.`);
};
function wrapWithBackticks(str) {
  return str.split(".").map((s) => `\`${s}\``).join(".").toLowerCase();
}
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
      const field = fields[key];
      const value = currPayload[key];
      condition[field] = value;
      delete currPayload[key];
    });
    const whenCondition = Object.entries(condition).map(([field, value]) => {
      const backtickedField = wrapWithBackticks(field);
      if (Array.isArray(value)) {
        return `${backtickedField} IN (${value.join(", ")})`;
      }
      return `${backtickedField} = ${quoter(value)}`;
    }).join(" AND ");
    whereConditions.push(`(${whenCondition})`);
    for (const fieldName in currPayload) {
      const fieldValue = currPayload[fieldName];
      if (!fields[fieldName]) {
        continue;
      }
      if (_lodash2.default.isUndefined(fieldValue)) {
        continue;
      }
      if (!caseConditionsByField[fieldName]) {
        caseConditionsByField[fieldName] = [];
      }
      const elseStr = elses[fieldName] ? `ELSE ${quoter(elses[fieldName])}` : "";
      const whenStr = `WHEN (${whenCondition}) THEN ${quoter(currPayload[fieldName])} ${elseStr}`;
      caseConditionsByField[fieldName].push(whenStr);
    }
  });
  for (const field in caseConditionsByField) {
    const fieldCases = caseConditionsByField[field];
    caseConditionsByField[field] = this.client.raw(`CASE ${fieldCases.join(" ")} END`);
  }
  return this.where(function() {
    whereConditions.forEach((condition) => this.orWhereRaw(condition));
  }).update(caseConditionsByField);
}



exports.metaUpdate = metaUpdate;
