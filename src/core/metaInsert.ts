/**
 * UTILITIES
 */

import {
  toArray
} from '../utils/array'

import {
  isNil
} from '../utils/is'

import _pickBy from 'lodash/pickBy'

type TObject = Record<string, any>
type TPayload = TObject | TObject[]
type TFillables = string[]

export function metaInsert (payload: TPayload | TPayload[], fillables: TFillables) {
  if (!payload || !fillables) {
    if (!payload) {
      throw new TypeError('Payload of undefined is not permitted')
    }

    if (!fillables) {
      throw new TypeError('Dictionary of undefined is not permitted')
    }
  }

  const fillablesSet = new Set(fillables)

  const arrayPayload = toArray(payload)
  const filterer = (hay: TObject) => _pickBy(hay, (val, key) => {
    return !isNil(val) && fillablesSet.has(key)
  })

  const data = arrayPayload.map(filterer)

  return this.insert(data)
}
