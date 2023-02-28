/**
 * UTILITIES
 */
import _ from 'lodash'

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

    if (dictionary[key] && !_.isNil(curr)) {
      hasCondition = true
      this.where(dictionary[key], '=', curr)
    }
  }

  if (!hasCondition) {
    return this.where('1 = 0')
  }

  return this.first()
}
