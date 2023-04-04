"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHR2DTKKHjs = require('./chunk-HR2DTKKH.js');


var _chunkLOPCAAGFjs = require('./chunk-LOPCAAGF.js');


var _chunkYQRW52RDjs = require('./chunk-YQRW52RD.js');


var _chunkPJUUQE6Tjs = require('./chunk-PJUUQE6T.js');

// src/index.ts
var src_default = (knex) => {
  knex.QueryBuilder.extend(_chunkHR2DTKKHjs.jsonObject.name, _chunkHR2DTKKHjs.jsonObject);
  knex.QueryBuilder.extend(_chunkLOPCAAGFjs.metaInsert.name, _chunkLOPCAAGFjs.metaInsert);
  knex.QueryBuilder.extend(_chunkYQRW52RDjs.metaQuery.name, _chunkYQRW52RDjs.metaQuery);
  knex.QueryBuilder.extend(_chunkPJUUQE6Tjs.metaUpdate.name, _chunkPJUUQE6Tjs.metaUpdate);
  return knex;
};



exports.src_default = src_default;
