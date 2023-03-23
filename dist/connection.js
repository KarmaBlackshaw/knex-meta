"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWPEWFLKEjs = require('./chunk-WPEWFLKE.js');
require('./chunk-HR2DTKKH.js');
require('./chunk-YQRW52RD.js');
require('./chunk-DSEC33GR.js');
require('./chunk-UISBBXIL.js');

// src/connection.ts
var _knex = require('knex');
var knex = _chunkWPEWFLKEjs.src_default.call(void 0, _knex.knex);
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
