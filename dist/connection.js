"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGTGYESEVjs = require('./chunk-GTGYESEV.js');
require('./chunk-MBFLX26N.js');
require('./chunk-44JQLRBC.js');
require('./chunk-LOPCAAGF.js');
require('./chunk-HFEOMZW7.js');
require('./chunk-QACOCXUB.js');
require('./chunk-5ZTS5JX7.js');
require('./chunk-7C2ZDA3G.js');
require('./chunk-HOFJ5C5H.js');
require('./chunk-HR2DTKKH.js');
require('./chunk-DW2L55WO.js');
require('./chunk-GF7ILZJM.js');
require('./chunk-RJNELI77.js');
require('./chunk-MZJRW37V.js');

// src/connection.ts
var _knex = require('knex');
var knex = _chunkGTGYESEVjs.src_default.call(void 0, _knex.knex);
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
