"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/lodash/isNil.js
var require_isNil = __commonJS({
  "node_modules/lodash/isNil.js"(exports, module2) {
    function isNil2(value) {
      return value == null;
    }
    module2.exports = isNil2;
  }
});

// index.ts
var knex_meta_exports = {};
__export(knex_meta_exports, {
  default: () => knex_meta_default
});
module.exports = __toCommonJS(knex_meta_exports);
var import_knex = require("knex");

// src/metaDate.ts
var import_moment = __toESM(require("moment"));

// utils/is.ts
function isNumber(x) {
  return !isNaN(Number(x));
}
function isString(x) {
  return typeof x === "string";
}
function isArray(x) {
  return Array.isArray(x);
}
function isDate(x) {
  return !isNaN(new Date(x).getTime());
}
function isObject(x) {
  return typeof x === "object" && (x == null ? void 0 : x.constructor) === Object;
}
function isNil(x) {
  return x === null || typeof x === "undefined";
}

// src/metaDate.ts
function hasTime(momentDate) {
  return momentDate.format("HH:mm:ss").split(":").map(Number).reduce((acc, curr) => acc + curr) > 0;
}
var DATETIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
function metaDate({
  dateBy,
  dateTo,
  dateFrom,
  dictionary
}) {
  if (!dateBy || !dateFrom) {
    return this;
  }
  if (!isDate(dateFrom)) {
    return this;
  }
  if (isObject(dictionary) && !dictionary[dateBy]) {
    return this;
  }
  const parsedDateFrom = (0, import_moment.default)(new Date(dateFrom));
  const dateFromTimestamp = hasTime(parsedDateFrom) ? parsedDateFrom.format(DATETIME_FORMAT) : parsedDateFrom.startOf("day").format(DATETIME_FORMAT);
  if (isNil(dateTo)) {
    return this.where(dateBy, ">=", dateFromTimestamp).where(dateBy, "<=", this.client.raw("CURRENT_TIMESTAMP"));
  }
  const parsedDateTo = (0, import_moment.default)(new Date(dateTo));
  const dateToTimestamp = hasTime(parsedDateTo) ? parsedDateTo.format(DATETIME_FORMAT) : parsedDateTo.endOf("day").format(DATETIME_FORMAT);
  return this.where(dateBy, ">=", dateFromTimestamp).where(dateBy, "<=", dateToTimestamp);
}
var metaDate_default = metaDate;

// src/metaFilter.ts
function handleArrayDictionary(dictionaryProp, q) {
  return this.where(function() {
    dictionaryProp.forEach((filter) => {
      this.orWhere(filter, "like", `%${q}%`);
    });
  });
}
function metaFilter({
  filterBy,
  q,
  dictionary = {}
} = {}) {
  if (!filterBy || !q) {
    return this;
  }
  const isArrayFilterBy = isArray(filterBy);
  const isArrayQ = isArray(q);
  if (isArrayFilterBy && isArrayQ) {
    return this.where(function() {
      q.forEach((currQ, currQIndex) => {
        const currFilter = dictionary[filterBy[currQIndex]];
        if (!currQ || !currFilter) {
          return;
        }
        if (isArray(currFilter)) {
          return handleArrayDictionary.apply(this, [
            currFilter,
            currQ
          ]);
        }
        this.where(currFilter, "like", `%${currQ}%`);
      });
    });
  }
  if (isArrayFilterBy && isString(q)) {
    return this.where(function() {
      filterBy.forEach((currFilter) => {
        const dictionaryFilterValue = dictionary[currFilter];
        if (!dictionaryFilterValue) {
          return;
        }
        if (isArray(dictionaryFilterValue)) {
          return handleArrayDictionary.apply(this, [
            dictionaryFilterValue,
            q
          ]);
        }
        this.orWhere(dictionary[currFilter], "like", `%${q}%`);
      });
    });
  }
  if (isArrayQ && isString(filterBy) && dictionary[filterBy]) {
    return this.where(function() {
      q.forEach((currQ) => {
        this.orWhere(dictionary[filterBy], "like", `%${currQ}%`);
      });
    });
  }
  if (isString(filterBy) && isString(q)) {
    const filterDictionary = dictionary[filterBy];
    const isArrayDictionary = isArray(filterDictionary);
    if (isArrayDictionary) {
      return handleArrayDictionary.apply(this, [
        filterDictionary,
        q
      ]);
    }
  }
  if (isString(filterBy) && dictionary[filterBy]) {
    return this.where(dictionary[filterBy], "like", `%${q}%`);
  }
  return this;
}
var metaFilter_default = metaFilter;

// src/metaPage.ts
function metaPage({
  page,
  rows,
  isCount
} = { isCount: false }) {
  if (isCount) {
    return this;
  }
  if (!isNumber(page) || !isNumber(rows)) {
    return this;
  }
  return this.limit(rows).offset(rows * (page - 1));
}
var metaPage_default = metaPage;

// utils/object.ts
function isEmpty(val) {
  if (isArray(val)) {
    return val.length === 0;
  }
  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }
  return !val;
}
function size(val) {
  if (isArray(val)) {
    return val.length;
  }
  if (isObject(val)) {
    return Object.keys(val).length;
  }
  return 0;
}

// src/metaSort.ts
function metaSort({
  sort,
  sortBy,
  dictionary = {},
  isCount = false
} = {}) {
  if (isCount) {
    return this;
  }
  if (!sort || !sortBy) {
    return this;
  }
  if (isEmpty(dictionary)) {
    return this;
  }
  const sortDirections = /* @__PURE__ */ new Set(["asc", "desc"]);
  if (isArray(sortBy) && isArray(sort)) {
    if (size(sortBy) !== size(sort)) {
      return this;
    }
    for (let i = 0; i < sortBy.length; i++) {
      const currSortBy = sortBy[i];
      const sortDirection = sort[i];
      if (!sortDirections.has(sortDirection)) {
        continue;
      }
      if (!dictionary[currSortBy]) {
        continue;
      }
      this.orderBy(currSortBy, sortDirection);
    }
    return this;
  }
  if (isString(sortBy) && isString(sort)) {
    if (!sortDirections.has(sort)) {
      return this;
    }
    if (!dictionary[sortBy]) {
      return this;
    }
    this.orderBy(sortBy, sort);
    return this;
  }
}
var metaSort_default = metaSort;

// src/meta.ts
function meta({
  page,
  rows,
  isCount,
  filterBy,
  filterDictionary,
  q,
  sortBy,
  sort,
  sortDictionary,
  dateBy,
  dateTo,
  dateFrom,
  dateDictionary
} = {}) {
  return this.metaPage({ page, rows, isCount }).metaDate({ dateBy, dateFrom, dateTo, dictionary: dateDictionary }).metaFilter({ filterBy, q, dictionary: filterDictionary }).metaSort({ sortBy, sort, dictionary: sortDictionary, isCount });
}
var meta_default = meta;

// src/bulkUpdate.ts
var import_isNil = __toESM(require_isNil());

// utils/array.ts
function toArray(foo) {
  return isArray(foo) ? foo : [foo];
}

// src/bulkUpdate.ts
var quoter = (foo) => {
  if (typeof foo === "number") {
    return foo;
  }
  if (typeof foo === "string") {
    return `'${foo}'`;
  }
  if (typeof foo === "object" && foo.sql) {
    return foo.sql;
  }
  console.warn(`${typeof foo} is not accounted.`);
};
function bulkUpdate(key, _payload = [], _options) {
  const keys = toArray(key);
  const keysSet = new Set(keys);
  const payload = JSON.parse(JSON.stringify(_payload));
  const options = Object.assign({
    operator: "AND",
    alias: {},
    else: {}
  }, _options);
  const aliasMaker = (key2) => {
    return options.alias[key2] ? options.alias[key2] : key2;
  };
  const elseMaker = (key2) => {
    return options.else[key2] ? ` ELSE ${quoter(options.else[key2])} ` : "";
  };
  const whereConditions = [];
  const setQueries = {};
  payload.forEach((currPayload) => {
    const condition = keys.filter((key2) => !(0, import_isNil.default)(currPayload[key2])).map((key2) => `${aliasMaker(key2)} = ${quoter(currPayload[key2])}`).join(" AND ");
    whereConditions.push(`(${condition})`);
    for (const key2 in currPayload) {
      const updateValue = currPayload[key2];
      if (keysSet.has(key2)) {
        continue;
      }
      if (!setQueries[key2]) {
        setQueries[key2] = [];
      }
      setQueries[key2].push(` WHEN ${condition} THEN ${quoter(updateValue)} `);
    }
  });
  const updateQuery = {};
  for (const key2 in setQueries) {
    const values = setQueries[key2].join("");
    updateQuery[aliasMaker(key2)] = this.client.raw(`(CASE ${values} ${elseMaker(key2)} END)`.replace(/\s+/g, " "));
  }
  return this.update(updateQuery).where(function() {
    this.whereRaw(whereConditions.join(" AND "));
  });
}
var bulkUpdate_default = bulkUpdate;

// src/jsonObject.ts
function jsonObject(data) {
  const pairs = [];
  for (const key in data) {
    const curr = data[key];
    if (isObject(curr)) {
      pairs.push(`"${key}"`, jsonObject(curr));
    } else {
      pairs.push(`"${key}"`, curr);
    }
  }
  return this.client.raw(`JSON_OBJECT(${pairs.join(", ")})`);
}
var jsonObject_default = jsonObject;

// index.ts
var extensions = [
  metaDate_default,
  metaFilter_default,
  metaPage_default,
  metaSort_default,
  meta_default,
  bulkUpdate_default,
  jsonObject_default
];
extensions.forEach((extension) => {
  import_knex.knex.QueryBuilder.extend(extension.name, extension);
});
var knex_meta_default = import_knex.knex;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
