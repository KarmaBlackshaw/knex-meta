"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk22YCQZ2Sjs = require('./chunk-22YCQZ2S.js');



var _chunkV2VUO6WCjs = require('./chunk-V2VUO6WC.js');

// node_modules/lodash/isNil.js
var require_isNil = _chunkV2VUO6WCjs.__commonJS.call(void 0, {
  "node_modules/lodash/isNil.js"(exports, module) {
    function isNil(value) {
      return value == null;
    }
    module.exports = isNil;
  }
});

// src/bulkUpdate.ts
var import_isNil = _chunkV2VUO6WCjs.__toESM.call(void 0, require_isNil());

// utils/array.ts
function toArray(foo) {
  return _chunk22YCQZ2Sjs.isArray.call(void 0, foo) ? foo : [foo];
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



exports.bulkUpdate = bulkUpdate;
