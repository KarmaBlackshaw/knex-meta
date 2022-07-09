import _isNil from 'lodash/isNil'

/**
 * UTILITIES
 */
import {
  toArray
} from '../utils/array'

/**
 * TYPES
 */
type dynamicObject = Record<string, any>

export type TBulkUpdateKey = string | string[]

export type TBulkUpdatePayload = dynamicObject[]

export interface IBulkUpdateOptions {
  alias?: dynamicObject,
  else?: dynamicObject
}

/**
 * HELPERS
 */
const quoter = (foo: any) => {
  if (typeof foo === 'number') {
    return foo
  }

  if (typeof foo === 'string') {
    return `'${foo}'`
  }

  if (typeof foo === 'object' && foo.sql) {
    return foo.sql
  }

  console.warn(`${typeof foo} is not accounted.`)
}

function bulkUpdate (
  key: TBulkUpdateKey,
  _payload: TBulkUpdatePayload = [],
  _options?: IBulkUpdateOptions
) {
  const keys: string[] = toArray(key)
  const keysSet = new Set(keys)

  const payload = JSON.parse(JSON.stringify(_payload))

  const options = Object.assign({
    operator: 'AND',
    alias: {},
    else: {}
  }, _options)

  /**
   * Alias maker creates aliases if specified
   */
  const aliasMaker = (key: string): string => {
    return options.alias[key] ? options.alias[key] : key
  }

  /**
   * Else maker creates else statements if specified
   */
  const elseMaker = (key: string): string => {
    return options.else[key] ? ` ELSE ${quoter(options.else[key])} ` : ''
  }

  const whereConditions: string[] = []
  const setQueries: Record<string, string[]> = {}

  payload.forEach((currPayload: dynamicObject) => {
    const condition = keys
      .filter((key: string) => !_isNil(currPayload[key]))
      .map(key => `${aliasMaker(key)} = ${quoter(currPayload[key])}`)
      .join(' AND ')

    whereConditions.push(`(${condition})`)

    for (const key in currPayload) {
      const updateValue = currPayload[key]
      /**
       * Disregard keys in the condition
       */
      if (keysSet.has(key)) {
        continue
      }

      if (!setQueries[key]) {
        setQueries[key] = []
      }

      setQueries[key].push(` WHEN ${condition} THEN ${quoter(updateValue)} `)
    }
  })

  const updateQuery: Record<string, any> = {}
  for (const key in setQueries) {
    const values = setQueries[key].join('')

    updateQuery[aliasMaker(key)] = this.client.raw(`(CASE ${values} ${elseMaker(key)} END)`.replace(/\s+/g, ' '))
  }

  return this
    .update(updateQuery)
    .where(function () {
      this.whereRaw(whereConditions.join(' AND '))
    })
}

export default bulkUpdate
