// libs
import _ from 'lodash'

// types
type dynamicObject = Record<string, any>
type TBulkUpdateKey = string | string[]
type TBulkUpdatePayload = dynamicObject | dynamicObject[]
type TBulkUpdateOptions = {
  fields: dynamicObject,
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

  /**
   * for raw queries
   */
  if (foo?.sql) {
    return foo.sql
  }

  console.warn(`${typeof foo} is not accounted.`)
}

export function metaUpdate (
  keyConditions: TBulkUpdateKey,
  payload: TBulkUpdatePayload = [],
  options: TBulkUpdateOptions
) {
  const keyConditionsArray = _.castArray(keyConditions)
  const payloadArray = _.castArray(payload)
  const fields = options.fields || {}
  const elses = options.else || {}

  const whereConditions = []
  const caseConditionsByField = {}

  payloadArray.forEach(currPayload => {
    const condition = {}

    keyConditionsArray.forEach(key => {
      if (!fields[key]) {
        console.warn(`[WARNING] bulkUpdates: "${key}" is not defined in fields`)
      }

      condition[fields[key]] = currPayload[key]

      /**
       * Do not update condition keys
       */
      delete currPayload[key]
    })

    whereConditions.push(condition)

    const whenCondition = Object
      .entries(condition)
      .map(([field, value]) => `${field} = ${quoter(value)}`)
      .join(' AND ')

    for (const field in currPayload) {
      /**
       * Exclude fields which are not defined
       */
      if (!fields[field]) {
        continue
      }

      if (!caseConditionsByField[field]) {
        caseConditionsByField[field] = []
      }

      const elseStr = elses[field] ? `ELSE ${quoter(elses[field])}` : ''
      const whenStr = `WHEN (${whenCondition}) THEN ${quoter(currPayload[field])} ${elseStr}`
      caseConditionsByField[field].push(whenStr)
    }
  })

  for (const field in caseConditionsByField) {
    const fieldCases = caseConditionsByField[field]

    caseConditionsByField[field] = this.client.raw(`CASE ${fieldCases.join(' ')} END`)
  }

  return this
    .where(function () {
      whereConditions.forEach(condition => {
        this.orWhere(condition)
      })
    })
    .update(caseConditionsByField)
}
