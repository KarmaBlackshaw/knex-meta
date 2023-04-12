interface IPageArguments {
    page?: number;
    rows?: number;
    isCount: (boolean | number);
}
declare function metaPage({ page, rows, isCount }?: IPageArguments): any;

export { IPageArguments, metaPage };
