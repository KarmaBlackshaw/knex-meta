"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJCWZZ66Tjs = require('./chunk-JCWZZ66T.js');
require('./chunk-JYGDWYMG.js');
require('./chunk-DSEC33GR.js');
require('./chunk-ZUPV344C.js');
require('./chunk-YQRW52RD.js');
require('./chunk-TVNAFHMW.js');
require('./chunk-YQDP6FDP.js');
require('./chunk-A6NHQ7T2.js');
require('./chunk-GF7ILZJM.js');
require('./chunk-HR2DTKKH.js');
require('./chunk-2FBTMJI2.js');
require('./chunk-TODQZENS.js');
require('./chunk-HOFJ5C5H.js');

// src/connection.ts
var _knex = require('knex');
var knex = _chunkJCWZZ66Tjs.src_default.call(void 0, _knex.knex);
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
