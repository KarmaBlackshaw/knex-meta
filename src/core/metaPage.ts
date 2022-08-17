/**
 * UTILITIES
 */
import {
  isNumber
} from '../utils/is'

interface IPageArguments {
  page?: number,
  rows?: number,
  isCount: (boolean | number)
}

export function metaPage ({
  page,
  rows,
  isCount
}: IPageArguments = { isCount: false }) {
  if (isCount) {
    return this
  }

  if (!isNumber(page) || !isNumber(rows)) {
    return this
  }

  return this.limit(rows).offset(rows * (page - 1))
}
