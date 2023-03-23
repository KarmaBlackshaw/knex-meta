"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHR2DTKKHjs = require('./chunk-HR2DTKKH.js');


var _chunkYQRW52RDjs = require('./chunk-YQRW52RD.js');


var _chunkDSEC33GRjs = require('./chunk-DSEC33GR.js');


var _chunkUISBBXILjs = require('./chunk-UISBBXIL.js');

// src/index.ts
var src_default = (knex) => {
  knex.QueryBuilder.extend(_chunkHR2DTKKHjs.jsonObject.name, _chunkHR2DTKKHjs.jsonObject);
  knex.QueryBuilder.extend(_chunkDSEC33GRjs.metaInsert.name, _chunkDSEC33GRjs.metaInsert);
  knex.QueryBuilder.extend(_chunkUISBBXILjs.metaUpdate.name, _chunkUISBBXILjs.metaUpdate);
  knex.QueryBuilder.extend(_chunkYQRW52RDjs.metaQuery.name, _chunkYQRW52RDjs.metaQuery);
  return knex;
};



exports.src_default = src_default;
