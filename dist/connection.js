"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUE2OKVPOjs = require('./chunk-UE2OKVPO.js');


var _chunkARB7AYYIjs = require('./chunk-ARB7AYYI.js');


var _chunkR6LVYMVGjs = require('./chunk-R6LVYMVG.js');


var _chunk4L4OTXTAjs = require('./chunk-4L4OTXTA.js');
require('./chunk-5YPKGKLP.js');


var _chunk6AZZI27Njs = require('./chunk-6AZZI27N.js');
require('./chunk-VKDJXQUC.js');


var _chunk6CERQZMTjs = require('./chunk-6CERQZMT.js');


var _chunkSZF7J4BUjs = require('./chunk-SZF7J4BU.js');


var _chunkW2GS2UI3js = require('./chunk-W2GS2UI3.js');


var _chunkPE6MVFGPjs = require('./chunk-PE6MVFGP.js');
require('./chunk-HOFJ5C5H.js');


var _chunkHM6CKEXLjs = require('./chunk-HM6CKEXL.js');
require('./chunk-6YPE5F7U.js');
require('./chunk-V2VUO6WC.js');

// src/connection.ts
var _knex = require('knex');
var extensions = [
  _chunkW2GS2UI3js.metaDate,
  _chunkPE6MVFGPjs.metaFilter,
  _chunkARB7AYYIjs.metaPage,
  _chunkR6LVYMVGjs.metaSort,
  _chunkSZF7J4BUjs.meta,
  _chunk6AZZI27Njs.bulkUpdate,
  _chunk6CERQZMTjs.jsonObject,
  _chunk4L4OTXTAjs.metaUpdate,
  _chunkUE2OKVPOjs.metaInsert,
  _chunkHM6CKEXLjs.metaFind
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
