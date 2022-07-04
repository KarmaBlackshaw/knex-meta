/**
 * UTILITIES
 */
import {
  isNumber,
} from '../utils/is'

export interface Arguments {
  page?: number,
  rows?: number,
  isCount: (boolean | number)
}

function metaPage({
  page,
  rows,
  isCount
}: Arguments = { isCount: false }) {
  if (isCount) {
    return this
  }

  if (!isNumber(page) || !isNumber(rows)) {
    return this
  }

  return this.limit(rows).offset(rows * (page - 1))
}


export default metaPage