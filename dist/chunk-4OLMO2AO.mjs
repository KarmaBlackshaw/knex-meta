import {
  toArray
} from "./chunk-QFJUJ4KH.mjs";
import {
  __commonJS,
  __toESM
} from "./chunk-ICSNCPDD.mjs";

// node_modules/lodash/isNil.js
var require_isNil = __commonJS({
  "node_modules/lodash/isNil.js"(exports, module) {
    function isNil(value) {
      return value == null;
    }
    module.exports = isNil;
  }
});

// src/core/bulkUpdate.ts
var import_isNil = __toESM(require_isNil());
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

export {
  bulkUpdate
};
