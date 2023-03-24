/**
 * UTILITIES
 */

import _ from 'lodash'

export type TObject = Record<string, any>
export type TPayload = TObject | TObject[]
export type TOptions = {
  fields: string[],
  // eslint-disable-next-line camelcase
  json_fields: string[]
}
export function metaInsert (payload: TPayload, options: TOptions) {
  const fields = options.fields
  const jsonFields = options.json_fields

  if (!payload || !fields) {
    if (!payload) {
      throw new TypeError('Payload of undefined is not permitted')
    }

    if (!fields) {
      throw new TypeError('Dictionary of undefined is not permitted')
    }
  }

  const fieldSet = new Set(fields)
  const jsonFieldSet = new Set(jsonFields)

  const toInsert = []
  const arrayPayload = _.castArray(payload)

  arrayPayload.forEach(currPayload => {
    for (const field in currPayload) {
      const fieldValue = currPayload[field]
      if (!fieldSet.has(field)) {
        delete currPayload[field]
      }

      if (jsonFieldSet.has(field) && _.isObject(fieldValue)) {
        currPayload[field] = JSON.stringify(currPayload[field])
      }
    }

    toInsert.push(currPayload)
  })

  return this.insert(toInsert)
}
