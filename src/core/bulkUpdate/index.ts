// libs
import _ from 'lodash'

// types
type dynamicObject = Record<string, any>
type TBulkUpdateKey = string | string[]
type TBulkUpdatePayload = dynamicObject[]
interface IBulkUpdateOptions {
  alias?: dynamicObject,
  else?: dynamicObject
}

// helpers
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

export function bulkUpdate (
  key: TBulkUpdateKey,
  _payload: TBulkUpdatePayload = [],
  _options?: IBulkUpdateOptions
) {
  const keys: string[] = _.castArray(key)
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
      .filter((key: string) => !_.isNil(currPayload[key]))
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
      this.whereRaw(whereConditions.join(' OR '))
    })
}
