export function isNumber(x: any): x is number {
  return !isNaN(Number(x))
}

export function isString(x: any): x is string {
  return typeof x === "string";
}

export function isArray<T>(x: any): x is Array<T> {
  return Array.isArray(x);
}

export function isDate(x: any): x is Date {
  return !isNaN(new Date(x).getTime())
}

export function isObject(x: any): x is object {
  return typeof x === 'object' &&
    x?.constructor === Object
}