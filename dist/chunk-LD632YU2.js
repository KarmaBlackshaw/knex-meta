"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMBFLX26Njs = require('./chunk-MBFLX26N.js');


var _chunk44JQLRBCjs = require('./chunk-44JQLRBC.js');


var _chunkLOPCAAGFjs = require('./chunk-LOPCAAGF.js');


var _chunkHFEOMZW7js = require('./chunk-HFEOMZW7.js');


var _chunkYQRW52RDjs = require('./chunk-YQRW52RD.js');


var _chunk5ZTS5JX7js = require('./chunk-5ZTS5JX7.js');


var _chunk7C2ZDA3Gjs = require('./chunk-7C2ZDA3G.js');


var _chunkDW2L55WOjs = require('./chunk-DW2L55WO.js');


var _chunkHR2DTKKHjs = require('./chunk-HR2DTKKH.js');


var _chunkGF7ILZJMjs = require('./chunk-GF7ILZJM.js');


var _chunkRJNELI77js = require('./chunk-RJNELI77.js');

// src/index.ts
var src_default = (knex) => {
  knex.QueryBuilder.extend(_chunkDW2L55WOjs.bulkUpdate.name, _chunkDW2L55WOjs.bulkUpdate);
  knex.QueryBuilder.extend(_chunkGF7ILZJMjs.meta.name, _chunkGF7ILZJMjs.meta);
  knex.QueryBuilder.extend(_chunkHR2DTKKHjs.jsonObject.name, _chunkHR2DTKKHjs.jsonObject);
  knex.QueryBuilder.extend(_chunkRJNELI77js.metaDate.name, _chunkRJNELI77js.metaDate);
  knex.QueryBuilder.extend(_chunkMBFLX26Njs.metaFilter.name, _chunkMBFLX26Njs.metaFilter);
  knex.QueryBuilder.extend(_chunk44JQLRBCjs.metaFind.name, _chunk44JQLRBCjs.metaFind);
  knex.QueryBuilder.extend(_chunkLOPCAAGFjs.metaInsert.name, _chunkLOPCAAGFjs.metaInsert);
  knex.QueryBuilder.extend(_chunkHFEOMZW7js.metaPage.name, _chunkHFEOMZW7js.metaPage);
  knex.QueryBuilder.extend(_chunkYQRW52RDjs.metaQuery.name, _chunkYQRW52RDjs.metaQuery);
  knex.QueryBuilder.extend(_chunk5ZTS5JX7js.metaSort.name, _chunk5ZTS5JX7js.metaSort);
  knex.QueryBuilder.extend(_chunk7C2ZDA3Gjs.metaUpdate.name, _chunk7C2ZDA3Gjs.metaUpdate);
  return knex;
};



exports.src_default = src_default;
