export function isNumber (x: any): x is number {
  return !isNaN(Number(x))
}

export function isString (x: any): x is string {
  return typeof x === 'string'
}

export function isArray<T> (x: any): x is Array<T> {
  return Array.isArray(x)
}

export function isDate (x: any): x is Date {
  return !isNaN(new Date(x).getTime())
}

export function isObject (x: any): x is object {
  return typeof x === 'object' &&
    x?.constructor === Object
}

export function isNil (x: unknown): x is null | undefined {
  return x === null || typeof x === 'undefined'
}

export function isEmpty (x: unknown): x is null | undefined {
  if (!x) {
    return true
  }

  if (isArray(x)) {
    return x.length === 0
  }

  if (isObject(x)) {
    return Object.values(x).length === 0
  }

  throw new Error('uncaught type')
}
