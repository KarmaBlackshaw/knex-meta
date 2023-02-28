/**
 * UTILITIES
 */
import _ from 'lodash'

type TPayload = Record<string, any>
type TDictionary = Record<string, string>

export function metaUpdate (payload: TPayload, dictionary: TDictionary) {
  if (!payload || !dictionary) {
    if (!payload) {
      throw new TypeError('Payload of undefined is not permitted')
    }

    if (!dictionary) {
      throw new TypeError('Dictionary of undefined is not permitted')
    }
  }

  const updateData: TPayload = {}

  for (const key in payload) {
    const updateValue = payload[key]
    const currDictionary = dictionary[key]

    if (updateValue === undefined || !currDictionary) {
      continue
    }

    updateData[currDictionary] = updateValue
  }

  if (_.isEmpty(updateData)) {
    return this
  }

  return this
    .update(updateData)
}
