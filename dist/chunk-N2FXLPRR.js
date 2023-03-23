"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDSEC33GRjs = require('./chunk-DSEC33GR.js');


var _chunkZUPV344Cjs = require('./chunk-ZUPV344C.js');


var _chunkYQRW52RDjs = require('./chunk-YQRW52RD.js');


var _chunkTVNAFHMWjs = require('./chunk-TVNAFHMW.js');


var _chunkUISBBXILjs = require('./chunk-UISBBXIL.js');


var _chunkHR2DTKKHjs = require('./chunk-HR2DTKKH.js');


var _chunk2FBTMJI2js = require('./chunk-2FBTMJI2.js');


var _chunkGF7ILZJMjs = require('./chunk-GF7ILZJM.js');


var _chunkTODQZENSjs = require('./chunk-TODQZENS.js');


var _chunkJYGDWYMGjs = require('./chunk-JYGDWYMG.js');

// src/index.ts
var src_default = (knex) => {
  knex.QueryBuilder.extend(_chunkHR2DTKKHjs.jsonObject.name, _chunkHR2DTKKHjs.jsonObject);
  knex.QueryBuilder.extend(_chunkGF7ILZJMjs.meta.name, _chunkGF7ILZJMjs.meta);
  knex.QueryBuilder.extend(_chunkTODQZENSjs.metaFilter.name, _chunkTODQZENSjs.metaFilter);
  knex.QueryBuilder.extend(_chunkJYGDWYMGjs.metaFind.name, _chunkJYGDWYMGjs.metaFind);
  knex.QueryBuilder.extend(_chunk2FBTMJI2js.metaDate.name, _chunk2FBTMJI2js.metaDate);
  knex.QueryBuilder.extend(_chunkDSEC33GRjs.metaInsert.name, _chunkDSEC33GRjs.metaInsert);
  knex.QueryBuilder.extend(_chunkZUPV344Cjs.metaPage.name, _chunkZUPV344Cjs.metaPage);
  knex.QueryBuilder.extend(_chunkYQRW52RDjs.metaQuery.name, _chunkYQRW52RDjs.metaQuery);
  knex.QueryBuilder.extend(_chunkTVNAFHMWjs.metaSort.name, _chunkTVNAFHMWjs.metaSort);
  knex.QueryBuilder.extend(_chunkUISBBXILjs.metaUpdate.name, _chunkUISBBXILjs.metaUpdate);
  return knex;
};



exports.src_default = src_default;
