/**
 * UTILITIES
 */
import {
  isArray,
  isString,
  isEmpty
} from '../utils/is'

import {
  isQuoteWrapped,
  trimQuotes
} from '../utils/string'

import {
  omitBy
} from '../utils/object'

/**
 * HELPERS
 */

/**
 * If dictionary key is array.
 * name: ['users.fname', 'users.lname']
 */
function searchArrayDictionary (dictionaryProp: string[], q: string) {
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
export interface IFilterArguments {
  filterBy?: string | string[],
  q?: string | string[],
  dictionary?: Record<string, (string | string[])>,
  searchItems?: Record<string, (string | number)>[]
}

export function metaFilter ({
  filterBy,
  q,
  dictionary = {},
  searchItems
}: IFilterArguments = {}) {
  if (filterBy && q) {
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
            return searchArrayDictionary.apply(this, [
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
            return searchArrayDictionary.apply(this, [
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
        return searchArrayDictionary.apply(this, [
          filterDictionary,
          q
        ])
      }
    }

    if (isString(filterBy) && dictionary[filterBy]) {
      return this.where(...whereString(dictionary[filterBy], q))
    }
  }

  if (!isEmpty(searchItems)) {
    this.where(function () {
      searchItems.forEach(_search => {
        this.orWhere(function () {
          for (const key in _search) {
            const value = _search[key]

            if (value === undefined) {
              return
            }

            if (!dictionary[key]) {
              return
            }

            this.where(...whereString(dictionary[key], value))
          }
        })
      })
    })
  }

  return this
}
