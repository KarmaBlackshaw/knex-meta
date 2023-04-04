"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSL5DGEU6js = require('./chunk-SL5DGEU6.js');
require('./chunk-HR2DTKKH.js');
require('./chunk-LOPCAAGF.js');
require('./chunk-YQRW52RD.js');
require('./chunk-PJUUQE6T.js');

// src/connection.ts
var _knex = require('knex');
var knex = _chunkSL5DGEU6js.src_default.call(void 0, _knex.knex);
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
