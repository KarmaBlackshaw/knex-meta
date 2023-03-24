"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHR2DTKKHjs = require('./chunk-HR2DTKKH.js');


var _chunkYQRW52RDjs = require('./chunk-YQRW52RD.js');


var _chunkUISBBXILjs = require('./chunk-UISBBXIL.js');


var _chunkIO6QNODYjs = require('./chunk-IO6QNODY.js');

// src/index.ts
var src_default = (knex) => {
  knex.QueryBuilder.extend(_chunkHR2DTKKHjs.jsonObject.name, _chunkHR2DTKKHjs.jsonObject);
  knex.QueryBuilder.extend(_chunkYQRW52RDjs.metaQuery.name, _chunkYQRW52RDjs.metaQuery);
  knex.QueryBuilder.extend(_chunkUISBBXILjs.metaUpdate.name, _chunkUISBBXILjs.metaUpdate);
  knex.QueryBuilder.extend(_chunkIO6QNODYjs.metaInsert.name, _chunkIO6QNODYjs.metaInsert);
  return knex;
};



exports.src_default = src_default;
