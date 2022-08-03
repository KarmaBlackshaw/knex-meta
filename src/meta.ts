// libs
import { IDateArguments } from './metaDate'
import { IFilterArguments } from './metaFilter'
import { ISortArguments } from './metaSort'
import { IPageArguments } from './metaPage'

export interface IMetaArguments {
  filterDictionary?: IFilterArguments['dictionary'],
  filterBy?: IFilterArguments['filterBy'],
  q?: IFilterArguments['q'],
  sortDictionary?: ISortArguments['dictionary'],
  sortBy?: ISortArguments['sortBy'],
  sort?: ISortArguments['sort'],
  page?: IPageArguments['page'],
  rows?: IPageArguments['rows'],
  isCount?: IPageArguments['isCount'],
  dateDictionary?: IDateArguments['dictionary'],
  dateBy?: IDateArguments['dateBy'],
  dateFrom?: IDateArguments['dateFrom'],
  dateTo?: IDateArguments['dateTo'],
}

export function meta ({
  page,
  rows,
  isCount,
  filterBy,
  filterDictionary,
  q,
  sortBy,
  sort,
  sortDictionary,
  dateBy,
  dateTo,
  dateFrom,
  dateDictionary
}: IMetaArguments = {}) {
  return this
    .metaPage({ page, rows, isCount })
    .metaDate({ dateBy, dateFrom, dateTo, dictionary: dateDictionary })
    .metaFilter({ filterBy, q, dictionary: filterDictionary })
    .metaSort({ sortBy, sort, dictionary: sortDictionary, isCount })
}
