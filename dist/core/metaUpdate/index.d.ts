type dynamicObject = Record<string, any>;
type TBulkUpdateKey = string | string[];
type TBulkUpdatePayload = dynamicObject | dynamicObject[];
type TBulkUpdateOptions = {
    fields: dynamicObject;
    else?: dynamicObject;
};
declare function metaUpdate(keyConditions: TBulkUpdateKey, payload: TBulkUpdatePayload, options: TBulkUpdateOptions): any;

export { metaUpdate };
