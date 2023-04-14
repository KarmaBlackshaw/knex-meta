import { IDateArguments } from '../metaDate/index.js';
import { IFilterArguments } from '../metaFilter/index.js';
import { ISortArguments } from '../metaSort/index.js';
import { IPageArguments } from '../metaPage/index.js';

interface IMetaArguments {
    filterDictionary?: IFilterArguments['dictionary'];
    filterBy?: IFilterArguments['filterBy'];
    q?: IFilterArguments['q'];
    sortDictionary?: ISortArguments['dictionary'];
    sortBy?: ISortArguments['sortBy'];
    sort?: ISortArguments['sort'];
    page?: IPageArguments['page'];
    rows?: IPageArguments['rows'];
    isCount?: IPageArguments['isCount'];
    dateDictionary?: IDateArguments['dictionary'];
    dateBy?: IDateArguments['dateBy'];
    dateFrom?: IDateArguments['dateFrom'];
    dateTo?: IDateArguments['dateTo'];
}
declare function meta({ page, rows, isCount, filterBy, filterDictionary, q, sortBy, sort, sortDictionary, dateBy, dateTo, dateFrom, dateDictionary }?: IMetaArguments): any;

export { meta };
