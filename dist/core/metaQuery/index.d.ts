import { Knex } from 'knex';

interface FilterCondition {
    field?: string;
    operator?: string;
    value?: any;
    $and?: FilterCondition[];
    $or?: FilterCondition[];
    $not?: FilterCondition[];
}
interface SortCondition {
    field: string;
    direction?: 'asc' | 'desc';
}
interface Pagination {
    rows: number;
    page: number;
}
interface Query {
    filter?: {
        $and?: FilterCondition[];
        $or?: FilterCondition[];
        $not?: FilterCondition[];
    };
    sort?: SortCondition[];
    pagination?: Pagination;
}
interface FieldMapValue {
    column: string;
    filterable?: boolean;
    sortable?: boolean;
    join?: [string | Record<string, string>, string, string];
    leftJoin?: [string | Record<string, string>, string, string];
    rightJoin?: [string | Record<string, string>, string, string];
}
interface FieldsMap {
    [key: string]: FieldMapValue;
}
declare function metaQuery(query: Query, fields: FieldsMap): Knex.QueryBuilder;

export { FieldsMap, FilterCondition, Query, metaQuery };
