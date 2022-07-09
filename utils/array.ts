import {
  isArray
} from './is'

export function toArray(foo: any | any[]): any[] {
  return isArray(foo) ? foo : [foo]
}