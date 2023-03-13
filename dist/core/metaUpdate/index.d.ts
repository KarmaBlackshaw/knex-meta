type TPayload = Record<string, any>;
type TDictionary = Record<string, string>;
declare function metaUpdate(payload: TPayload, dictionary: TDictionary): any;

export { metaUpdate };
