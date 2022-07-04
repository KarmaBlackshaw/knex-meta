// libs
import { IDateArguments } from './metaDate'
import { IFilterArguments } from './metaFilter'
import { ISortArguments } from './metaSort'
import { IPageArguments } from './metaPage'

export interface IMetaArguments {
  filterDictionary?: Pick<IFilterArguments, 'dictionary'>,
  filterBy?: Pick<IFilterArguments, 'filterBy'>,
  q?: Pick<IFilterArguments, 'q'>,
  sortDictionary?: Pick<ISortArguments, 'dictionary'>,
  sortBy?: Pick<ISortArguments, 'sortBy'>,
  sort?: Pick<ISortArguments, 'sort'>,
  page?: Pick<IPageArguments, 'page'>,
  rows?: Pick<IPageArguments, 'rows'>,
  isCount?: Pick<IPageArguments, 'isCount'>,
  dateDictionary?: Pick<IDateArguments, 'dictionary'>,
  dateBy?: Pick<IDateArguments, 'dateBy'>,
  dateFrom?: Pick<IDateArguments, 'dateFrom'>,
  dateTo?: Pick<IDateArguments, 'dateTo'>,
}

function meta({
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

export default meta
