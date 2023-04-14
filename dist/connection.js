"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4QYV4SS2js = require('./chunk-4QYV4SS2.js');
require('./chunk-44JQLRBC.js');
require('./chunk-LOPCAAGF.js');
require('./chunk-BQ3XUVKM.js');
require('./chunk-55YT53L6.js');
require('./chunk-5ZTS5JX7.js');
require('./chunk-PJUUQE6T.js');
require('./chunk-HR2DTKKH.js');
require('./chunk-DW2L55WO.js');
require('./chunk-RJNELI77.js');
require('./chunk-MBFLX26N.js');
require('./chunk-HOFJ5C5H.js');
require('./chunk-MZJRW37V.js');

// src/connection.ts
var _knex = require('knex');
var knex = _chunk4QYV4SS2js.src_default.call(void 0, _knex.knex);
var connection_default = knex({
  client: "mysql",
  connection: {
    host: "10.0.10.43",
    user: "pmchan",
    password: "pm@1004@chan@tT@9415042",
    database: "inplay_sports"
  }
});


exports.default = connection_default;
