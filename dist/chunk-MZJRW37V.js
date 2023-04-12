"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/utils/log.ts
var deprecate = ({
  oldMethod,
  newMethod
}) => {
  console.warn(`Deprecation warning: [${oldMethod}] is deprecated and will be removed soon. Please use the new [${newMethod}] feature instead`);
};



exports.deprecate = deprecate;
