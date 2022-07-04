const _isEmpty = require('lodash/isEmpty')
const _size = require('lodash/size')

/**
 * UTILITIES
 */
import {
  isArray,
  isString
} from '../utils/is'

export interface Arguments {
  sort?: string,
  sortBy?: string,
  dictionary?: Record<string, string>,
  isCount?: boolean
}

function metaSort({
  sort,
  sortBy,
  dictionary = {},
  isCount = false
}: Arguments = {}) {
  if (isCount) {
    return this
  }

  if (!sort || !sortBy) {
    return this
  }

  if (_isEmpty(dictionary)) {
    return this
  }

  const sortDirections = new Set(['asc', 'desc'])

  if (isArray(sortBy) && isArray(sort)) {
    if (_size(sortBy) !== _size(sort)) {
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

      this.orderBy(currSortBy, sortDirection)
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

    this.orderBy(sortBy, sort)

    return this
  }
}


export default metaSort