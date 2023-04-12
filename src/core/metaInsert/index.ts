// libs
import _ from 'lodash'

// types
export type TObject = Record<string, any>
export type TPayload = TObject | TObject[]
export type TFields = string[]

export function metaInsert (payload: TPayload, fields: TFields) {
  if (!payload || !fields) {
    if (!payload) {
      throw new TypeError('Payload of undefined is not permitted')
    }

    if (!fields) {
      throw new TypeError('Dictionary of undefined is not permitted')
    }
  }

  const fieldSet = new Set(fields)
  const toInsert = []
  const arrayPayload = _.castArray(payload)

  arrayPayload.forEach(currPayload => {
    for (const field in currPayload) {
      const fieldValue = currPayload[field]
      if (!fieldSet.has(field)) {
        delete currPayload[field]
      }

      if (_.isObject(fieldValue)) {
        currPayload[field] = JSON.stringify(currPayload[field])
      }
    }

    toInsert.push(currPayload)
  })

  return this.insert(toInsert)
}
