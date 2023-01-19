"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXJ266SM4js = require('./chunk-XJ266SM4.js');


var _chunkARB7AYYIjs = require('./chunk-ARB7AYYI.js');


var _chunkN3L4R74Sjs = require('./chunk-N3L4R74S.js');


var _chunk4L4OTXTAjs = require('./chunk-4L4OTXTA.js');


var _chunkU4YCN3EJjs = require('./chunk-U4YCN3EJ.js');


var _chunk6CERQZMTjs = require('./chunk-6CERQZMT.js');


var _chunkSZF7J4BUjs = require('./chunk-SZF7J4BU.js');


var _chunkUMZYGAJWjs = require('./chunk-UMZYGAJW.js');
require('./chunk-VKDJXQUC.js');


var _chunkE4C6CE6Vjs = require('./chunk-E4C6CE6V.js');
require('./chunk-HOFJ5C5H.js');


var _chunkYRBIPXPCjs = require('./chunk-YRBIPXPC.js');
require('./chunk-6YPE5F7U.js');

// src/connection.ts
var _knex = require('knex');
var extensions = [
  _chunkUMZYGAJWjs.metaDate,
  _chunkE4C6CE6Vjs.metaFilter,
  _chunkARB7AYYIjs.metaPage,
  _chunkN3L4R74Sjs.metaSort,
  _chunkSZF7J4BUjs.meta,
  _chunkU4YCN3EJjs.bulkUpdate,
  _chunk6CERQZMTjs.jsonObject,
  _chunk4L4OTXTAjs.metaUpdate,
  _chunkXJ266SM4js.metaInsert,
  _chunkYRBIPXPCjs.metaFind
];
extensions.forEach((extension) => {
  _knex.knex.QueryBuilder.extend(extension.name, extension);
});
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
