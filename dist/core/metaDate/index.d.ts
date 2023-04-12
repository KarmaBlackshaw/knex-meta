interface IDateArguments {
    dateBy?: string | string[];
    dateTo?: string | string[];
    dateFrom?: string | string[];
    dictionary?: Record<string, string>;
}
declare function metaDate({ dateBy, dateTo, dateFrom, dictionary }: IDateArguments): any;

export { IDateArguments, metaDate };
