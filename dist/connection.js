"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3OUSFJ2Ejs = require('./chunk-3OUSFJ2E.js');
require('./chunk-DSEC33GR.js');
require('./chunk-ZUPV344C.js');
require('./chunk-YQRW52RD.js');
require('./chunk-TVNAFHMW.js');
require('./chunk-UISBBXIL.js');
require('./chunk-HR2DTKKH.js');
require('./chunk-GF7ILZJM.js');
require('./chunk-TODQZENS.js');
require('./chunk-HOFJ5C5H.js');
require('./chunk-2FBTMJI2.js');
require('./chunk-JYGDWYMG.js');

// src/connection.ts
var _knex = require('knex');
var knex = _chunk3OUSFJ2Ejs.src_default.call(void 0, _knex.knex);
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
