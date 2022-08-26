/**
 * UTILITIES
 */
import {
  isNil
} from '../utils/is'

type TConditions = Record<string, any>
type TDictionary = Record<string, string>

export function metaFind (conditions: TConditions, dictionary: TDictionary) {
  if (!conditions || !dictionary) {
    if (!conditions) {
      throw new TypeError('Conditions of undefined is not permitted')
    }

    if (!dictionary) {
      throw new TypeError('Dictionary of undefined is not permitted')
    }
  }

  let hasCondition = false
  for (const key in conditions) {
    const curr = conditions[key]

    if (dictionary[key] && !isNil(curr)) {
      hasCondition = true
      this.where(dictionary[key], 'LIKE', curr)
    }
  }

  if (!hasCondition) {
    return this.where('1 = 0')
  }

  return this
}
