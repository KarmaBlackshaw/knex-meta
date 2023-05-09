import { Knex } from 'knex'

// types
export interface FilterCondition {
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

export interface Query {
  filter?: {
    $and?: FilterCondition[];
    $or?: FilterCondition[];
    $not?: FilterCondition[];
  };
  sort?: SortCondition[];
  pagination?: Pagination
}

interface FieldMapValue {
  column: string;
  filterable?: boolean;
  sortable?: boolean;
  join?: [string | Record<string, string>, string, string];
  leftJoin?: [string | Record<string, string>, string, string];
  rightJoin?: [string | Record<string, string>, string, string];
}

export interface FieldsMap {
  [key: string]: FieldMapValue;
}

function processWhere (
  conditions: FilterCondition[],
  whereMethod: 'andWhere' | 'orWhere' | 'whereNot',
  fields: FieldsMap
): Knex.QueryBuilder {
  this.where(function () {
    conditions.forEach(c => {
      this[whereMethod](function () {
        if (c.$and || c.$or || c.$not) {
          return makeWhere.call(this, c, fields)
        }

        const field = fields[c.field]

        if (!field || c.value === undefined) {
          return
        }

        if (!field.filterable) {
          return
        }

        switch (c.operator) {
          case '=':
            this.where(field.column, c.operator, c.value)
            break
          case '<':
          case '<=':
          case '>':
          case '>=':
          case 'like':
            this.where(field.column, c.operator, c.value)
            break
          case 'between':
            this.whereBetween(field.column, c.value)
            break
          case 'not between':
            this.whereNotBetween(field.column, c.value)
            break
          case 'in':
            this.whereIn(field.column, c.value)
            break
          case 'not in':
            this.whereNotIn(field.column, c.value)
            break
          case 'null':
            this.whereNull(field.column)
            break
          case 'not null':
            this.whereNotNull(field.column)
            break
          case 'not':
            this.whereNot(field.column, c.value)
            break
          default:
            this.where(field.column, '=', c.value)
        }
      })
    })
  })

  return this
}

function makeWhere (
  filters: FilterCondition,
  fields: FieldsMap
): Knex.QueryBuilder {
  if (filters && filters.$and) {
    processWhere.call(this, filters.$and, 'andWhere', fields)
  }

  if (filters && filters.$or) {
    processWhere.call(this, filters.$or, 'orWhere', fields)
  }

  if (filters && filters.$not) {
    processWhere.call(this, filters.$not, 'whereNot', fields)
  }

  return this
}

function makeSort (
  sort: SortCondition[],
  fields: FieldsMap
): Knex.QueryBuilder {
  if (!sort || !sort.length) {
    return this
  }

  sort.forEach((s: SortCondition) => {
    const field = fields[s.field]

    if (!field) {
      return
    }

    if (!field.sortable) {
      return
    }

    this.orderBy(field.column, s.direction || 'asc')
  })

  return this
}

function makePagination (
  pagination: Pagination
): Knex.QueryBuilder {
  if (!pagination || !pagination.rows || !pagination.page) {
    return this
  }

  return this
    .limit(pagination.rows)
    .offset(pagination.rows * (pagination.page - 1))
}

export function metaQuery (
  query: Query,
  fields: FieldsMap
): Knex.QueryBuilder {
  if (query && query.filter) {
    makeWhere.call(this, query.filter, fields)
  }

  if (query && query.sort) {
    makeSort.call(this, query.sort, fields)
  }

  if (query && query.pagination) {
    makePagination.call(this, query.pagination)
  }

  return this
}
