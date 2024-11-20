"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkP7L57GALjs = require('./chunk-P7L57GAL.js');
require('./chunk-MBFLX26N.js');
require('./chunk-44JQLRBC.js');
require('./chunk-LOPCAAGF.js');
require('./chunk-HFEOMZW7.js');
require('./chunk-QACOCXUB.js');
require('./chunk-5ZTS5JX7.js');
require('./chunk-GWDIRNHA.js');
require('./chunk-HOFJ5C5H.js');
require('./chunk-DW2L55WO.js');
require('./chunk-HR2DTKKH.js');
require('./chunk-RJNELI77.js');
require('./chunk-MZJRW37V.js');
require('./chunk-GF7ILZJM.js');

// src/connection.ts
var _knex = require('knex');
var knex = _chunkP7L57GALjs.src_default.call(void 0, _knex.knex);
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
