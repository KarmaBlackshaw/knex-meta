type dynamicObject = Record<string, any>;
type TBulkUpdateKey = string | string[];
type TBulkUpdatePayload = dynamicObject[];
interface IBulkUpdateOptions {
    alias?: dynamicObject;
    else?: dynamicObject;
}
declare function bulkUpdate(key: TBulkUpdateKey, _payload?: TBulkUpdatePayload, _options?: IBulkUpdateOptions): any;

export { bulkUpdate };
