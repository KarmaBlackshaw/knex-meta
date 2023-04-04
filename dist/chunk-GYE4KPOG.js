"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHR2DTKKHjs = require('./chunk-HR2DTKKH.js');


var _chunkLOPCAAGFjs = require('./chunk-LOPCAAGF.js');


var _chunk3CQKYRAEjs = require('./chunk-3CQKYRAE.js');


var _chunkYQRW52RDjs = require('./chunk-YQRW52RD.js');

// src/index.ts
var src_default = (knex) => {
  knex.QueryBuilder.extend(_chunkHR2DTKKHjs.jsonObject.name, _chunkHR2DTKKHjs.jsonObject);
  knex.QueryBuilder.extend(_chunkLOPCAAGFjs.metaInsert.name, _chunkLOPCAAGFjs.metaInsert);
  knex.QueryBuilder.extend(_chunkYQRW52RDjs.metaQuery.name, _chunkYQRW52RDjs.metaQuery);
  knex.QueryBuilder.extend(_chunk3CQKYRAEjs.metaUpdate.name, _chunk3CQKYRAEjs.metaUpdate);
  return knex;
};



exports.src_default = src_default;
