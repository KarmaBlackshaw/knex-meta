"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQOS55Z3Ejs = require('./chunk-QOS55Z3E.js');
require('./chunk-LOPCAAGF.js');
require('./chunk-HR2DTKKH.js');
require('./chunk-YQRW52RD.js');
require('./chunk-6FSILDB4.js');

// src/connection.ts
var _knex = require('knex');
var knex = _chunkQOS55Z3Ejs.src_default.call(void 0, _knex.knex);
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
