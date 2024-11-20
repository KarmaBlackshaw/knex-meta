type TConditions = Record<string, any>;
type TDictionary = Record<string, string>;
declare function metaFind(conditions: TConditions, dictionary: TDictionary): any;

export { metaFind };
