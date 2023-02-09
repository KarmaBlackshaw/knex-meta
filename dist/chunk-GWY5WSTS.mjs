// src/core/metaQuery.ts
function processWhere(conditions, whereMethod, fields) {
  this.where(function() {
    conditions.forEach((c) => {
      this[whereMethod](function() {
        if (c.must || c.should || c.mustNot) {
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
  if (filters && filters.must) {
    processWhere.call(this, filters.must, "andWhere", fields);
  }
  if (filters && filters.should) {
    processWhere.call(this, filters.should, "orWhere", fields);
  }
  if (filters && filters.mustNot) {
    processWhere.call(this, filters.mustNot, "whereNot", fields);
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
  makeWhere.call(this, query.filter, fields);
  makeSort.call(this, query.sort, fields);
  makePagination.call(this, query.pagination);
  return this;
}

export {
  metaQuery
};
