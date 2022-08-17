import { Knex as KnexOriginal } from 'knex'

/**
 * UTILITIES
 */
import {
  isObject
} from '../utils/is'

export type TJsonObject = Record<string, any>

export function jsonObject (data: TJsonObject): KnexOriginal {
  const pairs = []

  for (const key in data) {
    const curr = data[key]

    if (isObject(curr)) {
      pairs.push(`"${key}"`, jsonObject(curr))
    } else {
      pairs.push(`"${key}"`, curr)
    }
  }

  return this.client.raw(`JSON_OBJECT(${pairs.join(', ')})`)
}
