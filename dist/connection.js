"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkARB7AYYIjs = require('./chunk-ARB7AYYI.js');


var _chunkRYE4XEQEjs = require('./chunk-RYE4XEQE.js');


var _chunk4L4OTXTAjs = require('./chunk-4L4OTXTA.js');
require('./chunk-5YPKGKLP.js');


var _chunk6AZZI27Njs = require('./chunk-6AZZI27N.js');


var _chunk6CERQZMTjs = require('./chunk-6CERQZMT.js');


var _chunkSZF7J4BUjs = require('./chunk-SZF7J4BU.js');


var _chunkW2GS2UI3js = require('./chunk-W2GS2UI3.js');


var _chunkCLWHHB5Ijs = require('./chunk-CLWHHB5I.js');


var _chunkUE2OKVPOjs = require('./chunk-UE2OKVPO.js');
require('./chunk-VKDJXQUC.js');
require('./chunk-6YPE5F7U.js');
require('./chunk-V2VUO6WC.js');

// src/connection.ts
var _knex = require('knex');
var extensions = [
  _chunkW2GS2UI3js.metaDate,
  _chunkCLWHHB5Ijs.metaFilter,
  _chunkARB7AYYIjs.metaPage,
  _chunkRYE4XEQEjs.metaSort,
  _chunkSZF7J4BUjs.meta,
  _chunk6AZZI27Njs.bulkUpdate,
  _chunk6CERQZMTjs.jsonObject,
  _chunk4L4OTXTAjs.metaUpdate,
  _chunkUE2OKVPOjs.metaInsert
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
