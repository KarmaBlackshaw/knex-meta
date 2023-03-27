"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLOPCAAGFjs = require('./chunk-LOPCAAGF.js');


var _chunkHR2DTKKHjs = require('./chunk-HR2DTKKH.js');


var _chunkYQRW52RDjs = require('./chunk-YQRW52RD.js');


var _chunk6FSILDB4js = require('./chunk-6FSILDB4.js');

// src/index.ts
var src_default = (knex) => {
  knex.QueryBuilder.extend(_chunkHR2DTKKHjs.jsonObject.name, _chunkHR2DTKKHjs.jsonObject);
  knex.QueryBuilder.extend(_chunkLOPCAAGFjs.metaInsert.name, _chunkLOPCAAGFjs.metaInsert);
  knex.QueryBuilder.extend(_chunk6FSILDB4js.metaUpdate.name, _chunk6FSILDB4js.metaUpdate);
  knex.QueryBuilder.extend(_chunkYQRW52RDjs.metaQuery.name, _chunkYQRW52RDjs.metaQuery);
  return knex;
};



exports.src_default = src_default;
