/**
 * UTILITIES
 */
type TObject = Record<string, any>;
type TPayload = TObject | TObject[];
declare function metaInsert(payload: TPayload, fillables: string[]): any;

export { TObject, TPayload, metaInsert };
