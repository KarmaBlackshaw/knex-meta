// libs
import _ from 'lodash'

// utils
import { deprecate } from '../../utils/log'

export interface IPageArguments {
  page?: number,
  rows?: number,
  isCount: (boolean | number)
}

export function metaPage ({
  page,
  rows,
  isCount
}: IPageArguments = { isCount: false }) {
  deprecate({
    oldMethod: 'metaPage',
    newMethod: 'metaQuery'
  })

  if (isCount) {
    return this
  }

  if (isNaN(page) || isNaN(rows)) {
    return this
  }

  return this.limit(rows).offset(rows * (page - 1))
}
