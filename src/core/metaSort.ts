/**
 * UTILITIES
 */
import {
  isArray,
  isString
} from '../utils/is'

import {
  isEmpty,
  size
} from '../utils/object'

interface ISortArguments {
  sort?: string,
  sortBy?: string,
  dictionary?: Record<string, string>,
  isCount?: boolean
}

export function metaSort ({
  sort,
  sortBy,
  dictionary = {},
  isCount = false
}: ISortArguments = {}) {
  if (isCount) {
    return this
  }

  if (!sort || !sortBy) {
    return this
  }

  if (isEmpty(dictionary)) {
    return this
  }

  const sortDirections = new Set(['asc', 'desc'])

  if (isArray(sortBy) && isArray(sort)) {
    if (size(sortBy) !== size(sort)) {
      return this
    }

    for (let i = 0; i < sortBy.length; i++) {
      const currSortBy = sortBy[i]
      const sortDirection = sort[i]

      if (!sortDirections.has(sortDirection)) {
        continue
      }

      if (!dictionary[currSortBy]) {
        continue
      }

      this.orderBy(dictionary[currSortBy], sortDirection)
    }

    return this
  }

  if (isString(sortBy) && isString(sort)) {
    if (!sortDirections.has(sort)) {
      return this
    }

    if (!dictionary[sortBy]) {
      return this
    }

    this.orderBy(dictionary[sortBy], sort)

    return this
  }
}
