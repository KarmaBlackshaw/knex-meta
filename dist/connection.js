"use strict";Object.defineProperty(exports, "__esModule", {value: true});require('./chunk-EZUCZHGV.js');

// src/connection.ts
var _knex = require('knex');
var connection_default = _knex.knex.call(void 0, {
  client: "mysql",
  connection: {
    host: "10.0.10.43",
    user: "pmchan",
    password: "pm@1004@chan@tT@9415042",
    database: "inplay_sports"
  }
});


exports.default = connection_default;
