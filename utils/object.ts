import {
  isArray,
  isObject
} from './is'

export function isEmpty(val: any): boolean {
  if (isArray(val)) {
    return val.length === 0
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0
  }

  return !val
}

export function size(val: any): number {
  if (isArray(val)) {
    return val.length
  }

  if (isObject(val)) {
    return Object.keys(val).length
  }

  return 0
}