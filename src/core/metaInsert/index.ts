/**
 * UTILITIES
 */

import _ from 'lodash'

export type TObject = Record<string, any>
export type TPayload = TObject | TObject[]

export function metaInsert (payload: TPayload, fillables: string[]) {
  if (!payload || !fillables) {
    if (!payload) {
      throw new TypeError('Payload of undefined is not permitted')
    }

    if (!fillables) {
      throw new TypeError('Dictionary of undefined is not permitted')
    }
  }

  const fillablesSet = new Set(fillables)

  const arrayPayload = _.castArray(payload)
  const filterer = (hay: TObject) => _.pickBy(hay, (val, key) => {
    return !_.isNil(val) && fillablesSet.has(key)
  })

  const data = arrayPayload.map(filterer)

  return this.insert(data)
}
