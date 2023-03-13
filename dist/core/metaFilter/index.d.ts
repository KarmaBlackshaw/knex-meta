/**
 * TYPES
 */
interface IFilterArguments {
    filterBy?: string | string[];
    q?: string | string[];
    dictionary?: Record<string, (string | string[])>;
    searchItems?: Record<string, (string | number)>[];
}
declare function metaFilter({ filterBy, q, dictionary, searchItems }?: IFilterArguments): any;

export { IFilterArguments, metaFilter };
