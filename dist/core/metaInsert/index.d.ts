/**
 * UTILITIES
 */
type TObject = Record<string, any>;
type TPayload = TObject | TObject[];
type TOptions = {
    fields: string[];
    json_fields: string[];
};
declare function metaInsert(payload: TPayload, options: TOptions): any;

export { TObject, TOptions, TPayload, metaInsert };
