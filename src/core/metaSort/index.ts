// libs
import _ from 'lodash'

// utils
import { deprecate } from '../../utils/log'

// types
export interface ISortArguments {
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
  deprecate({
    oldMethod: 'metaSort',
    newMethod: 'metaQuery'
  })

  if (isCount) {
    return this
  }

  if (!sort || !sortBy) {
    return this
  }

  if (_.isEmpty(dictionary)) {
    return this
  }

  const sortArray = _.castArray(sort)
  const sortByArray = _.castArray(sortBy)

  if (sortArray.length !== sortByArray.length) {
    return this
  }

  const sortDirections = new Set(['asc', 'desc'])
  sortByArray.forEach((currSortByKey, currSortByIndex) => {
    if (!dictionary[currSortByKey]) {
      return
    }

    const currSort = sortArray[currSortByIndex]
    if (!sortDirections.has(currSort)) {
      return
    }

    const currSortBy = _.castArray(dictionary[currSortByKey])

    currSortBy.forEach(sortCol => {
      this.orderBy(sortCol, currSort)
    })
  })

  return this
}
