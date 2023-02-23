"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/core/metaQuery.ts
function processWhere(conditions, whereMethod, fields) {
  this.where(function() {
    conditions.forEach((c) => {
      this[whereMethod](function() {
        if (c.$and || c.$or || c.$not) {
          return makeWhere.call(this, c, fields);
        }
        const field = fields[c.field];
        if (!field || c.value === void 0) {
          return;
        }
        if (!field.filterable) {
          return;
        }
        switch (c.operator) {
          case "=":
            this.where(field.column, c.operator, c.value);
            break;
          case "<":
          case "<=":
          case ">":
          case ">=":
          case "like":
            this.where(field.column, c.operator, c.value);
            break;
          case "between":
            this.whereBetween(field.column, c.value);
            break;
          case "not between":
            this.whereNotBetween(field.column, c.value);
            break;
          case "in":
            this.whereIn(field.column, c.value);
            break;
          case "not in":
            this.whereNotIn(field.column, c.value);
            break;
          case "null":
            this.whereNull(field.column);
            break;
          case "not null":
            this.whereNotNull(field.column);
            break;
          case "not":
            this.whereNot(field.column, c.value);
            break;
          default:
            this.where(field.column, "=", c.value);
        }
      });
    });
  });
  return this;
}
function makeWhere(filters, fields) {
  if (filters && filters.$and) {
    processWhere.call(this, filters.$and, "andWhere", fields);
  }
  if (filters && filters.$or) {
    processWhere.call(this, filters.$or, "orWhere", fields);
  }
  if (filters && filters.$not) {
    processWhere.call(this, filters.$not, "whereNot", fields);
  }
  return this;
}
function makeSort(sort, fields) {
  if (!sort || !sort.length) {
    return this;
  }
  sort.forEach((s) => {
    const field = fields[s.field];
    if (!field) {
      return;
    }
    if (!field.sortable) {
      return;
    }
    this.orderBy(field.column, s.direction || "asc");
  });
  return this;
}
function makePagination(pagination) {
  if (!pagination || !pagination.rows || !pagination.page) {
    return this;
  }
  return this.limit(pagination.rows).offset(pagination.rows * (pagination.page - 1));
}
function metaQuery(query, fields) {
  if (query && query.filter) {
    makeWhere.call(this, query.filter, fields);
  }
  if (query && query.sort) {
    makeSort.call(this, query.sort, fields);
  }
  if (query && query.pagination) {
    makePagination.call(this, query.pagination);
  }
  return this;
}



exports.metaQuery = metaQuery;
