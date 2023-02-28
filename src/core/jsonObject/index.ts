import { Knex as KnexOriginal } from 'knex'

/**
 * UTILITIES
 */
import _ from 'lodash'

export type TJsonObject = Record<string, any>

export function jsonObject (data: TJsonObject): KnexOriginal {
  const pairs = []

  for (const key in data) {
    const curr = data[key]

    if (_.isPlainObject(curr)) {
      pairs.push(`"${key}"`, jsonObject(curr))
    } else {
      pairs.push(`"${key}"`, curr)
    }
  }

  return this.client.raw(`JSON_OBJECT(${pairs.join(', ')})`)
}
