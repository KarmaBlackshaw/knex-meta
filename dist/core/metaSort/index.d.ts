interface ISortArguments {
    sort?: string;
    sortBy?: string;
    dictionary?: Record<string, string>;
    isCount?: boolean;
}
declare function metaSort({ sort, sortBy, dictionary, isCount }?: ISortArguments): any;

export { ISortArguments, metaSort };
