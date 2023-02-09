import { Knex } from 'knex'

export interface FilterCondition {
  field?: string;
  operator?: string;
  value?: any;
  must?: FilterCondition[];
  should?: FilterCondition[];
  mustNot?: FilterCondition[];
}

interface SortCondition {
  field: string;
  direction?: 'asc' | 'desc';
}

interface Pagination {
  rows: number;
  offset: number;
}

export interface Query {
  filter?: {
    must?: FilterCondition[];
    should?: FilterCondition[];
    mustNot?: FilterCondition[];
  };
  sort?: SortCondition[];
  pagination?: Pagination
}

interface FieldMapValue {
  column: string;
  filterable?: boolean;
  sortable?: boolean;
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
        if (c.must || c.should || c.mustNot) {
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
  if (filters && filters.must) {
    processWhere.call(this, filters.must, 'andWhere', fields)
  }

  if (filters && filters.should) {
    processWhere.call(this, filters.should, 'orWhere', fields)
  }

  if (filters && filters.mustNot) {
    processWhere.call(this, filters.mustNot, 'whereNot', fields)
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
  if (!pagination || !pagination.rows || !pagination.offset) {
    return this
  }

  return this
    .limit(pagination.rows)
    .offset(pagination.offset)
}

export function metaQuery (
  query: Query,
  fields: FieldsMap
): Knex.QueryBuilder {
  makeWhere.call(this, query.filter, fields)
  makeSort.call(this, query.sort, fields)
  makePagination.call(this, query.pagination)

  return this
}
