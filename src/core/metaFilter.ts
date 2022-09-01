/**
 * UTILITIES
 */
import {
  isArray,
  isString
} from '../utils/is'

import {
  isQuoteWrapped,
  trimQuotes
} from '../utils/string'

/**
 * HELPERS
 */

/**
 * If dictionary key is array.
 * name: ['users.fname', 'users.lname']
 */
function handleArrayDictionary (dictionaryProp: string[], q: string) {
  return this.where(function () {
    dictionaryProp.forEach(filter => {
      this.orWhere(...whereString(filter, q))
    })
  })
}

function whereString (filterBy, q) {
  return isQuoteWrapped(q)
    ? [filterBy, 'like', trimQuotes(q)]
    : [filterBy, 'like', `%${q}%`]
}

/**
 * TYPES
 */
interface IFilterArguments {
  filterBy?: string | string[],
  q?: string | string[],
  dictionary?: Record<string, (string | string[])>
}

export function metaFilter ({
  filterBy,
  q,
  dictionary = {}
}: IFilterArguments = {}) {
  if (!filterBy || !q) {
    return this
  }

  const isArrayFilterBy = isArray(filterBy)
  const isArrayQ = isArray(q)

  /**
   * For array "filterBy" and "q"
   */
  if (isArrayFilterBy && isArrayQ) {
    return this.where(function () {
      q.forEach((currQ, currQIndex) => {
        const currFilter = dictionary[filterBy[currQIndex]]

        if (!currQ || !currFilter) {
          return
        }

        if (isArray(currFilter)) {
          return handleArrayDictionary.apply(this, [
            currFilter,
            currQ
          ])
        }

        this.where(...whereString(currFilter, currQ))
      })
    })
  }

  /**
   * For array "filterBy"
   */
  if (isArrayFilterBy && isString(q)) {
    return this.where(function () {
      filterBy.forEach(currFilter => {
        const dictionaryFilterValue = dictionary[currFilter]

        if (!dictionaryFilterValue) {
          return
        }

        if (isArray(dictionaryFilterValue)) {
          return handleArrayDictionary.apply(this, [
            dictionaryFilterValue,
            q
          ])
        }

        this.orWhere(...whereString(dictionary[currFilter], q))
      })
    })
  }

  /**
   * For array "q"
   */
  if (isArrayQ && isString(filterBy) && dictionary[filterBy]) {
    return this.where(function () {
      q.forEach(currQ => {
        this.orWhere(...whereString(dictionary[filterBy], currQ))
      })
    })
  }

  /**
   * For string "filterBy" and "q"
   */
  if (isString(filterBy) && isString(q)) {
    const filterDictionary = dictionary[filterBy]
    const isArrayDictionary = isArray<string>(filterDictionary)

    if (isArrayDictionary) {
      return handleArrayDictionary.apply(this, [
        filterDictionary,
        q
      ])
    }
  }

  if (isString(filterBy) && dictionary[filterBy]) {
    return this.where(...whereString(dictionary[filterBy], q))
  }

  return this
}
