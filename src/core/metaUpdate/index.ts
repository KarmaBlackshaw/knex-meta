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
  if (!_.isUndefined(foo?.raw)) {
    return foo.raw
  }

  if (_.isObject(foo)) {
    return `'${JSON.stringify(foo)}'`
  }

  console.warn(`${typeof foo} is not accounted.`)
}

function wrapWithBackticks (str) {
  return str.split('.')
    .map((s: string) => `\`${s}\``)
    .join('.')
    .toLowerCase()
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

      const field = fields[key]
      const value = currPayload[key]

      condition[field] = value

      /**
       * Do not update condition keys
       */
      delete currPayload[key]
    })

    const whenCondition = Object
      .entries(condition)
      .map(([field, value]) => {
        const backtickedField = wrapWithBackticks(field)
        if (Array.isArray(value)) {
          return `${backtickedField} IN (${value.join(', ')})`
        }

        return `${backtickedField} = ${quoter(value)}`
      })
      .join(' AND ')

    whereConditions.push(`(${whenCondition})`)

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
      whereConditions.forEach(condition => this.orWhereRaw(condition))
    })
    .update(caseConditionsByField)
}
