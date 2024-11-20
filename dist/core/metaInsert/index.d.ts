type TObject = Record<string, any>;
type TPayload = TObject | TObject[];
type TFields = string[];
declare function metaInsert(payload: TPayload, fields: TFields): any;

export { TFields, TObject, TPayload, metaInsert };
