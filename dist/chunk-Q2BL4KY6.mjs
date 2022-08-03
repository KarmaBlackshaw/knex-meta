// utils/is.ts
function isNumber(x) {
  return !isNaN(Number(x));
}
function isString(x) {
  return typeof x === "string";
}
function isArray(x) {
  return Array.isArray(x);
}
function isDate(x) {
  return !isNaN(new Date(x).getTime());
}
function isObject(x) {
  return typeof x === "object" && (x == null ? void 0 : x.constructor) === Object;
}
function isNil(x) {
  return x === null || typeof x === "undefined";
}

export {
  isNumber,
  isString,
  isArray,
  isDate,
  isObject,
  isNil
};
