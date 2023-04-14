"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk44JQLRBCjs = require('./chunk-44JQLRBC.js');


var _chunkLOPCAAGFjs = require('./chunk-LOPCAAGF.js');


var _chunkBQ3XUVKMjs = require('./chunk-BQ3XUVKM.js');


var _chunk55YT53L6js = require('./chunk-55YT53L6.js');


var _chunk5ZTS5JX7js = require('./chunk-5ZTS5JX7.js');


var _chunkPJUUQE6Tjs = require('./chunk-PJUUQE6T.js');


var _chunkHR2DTKKHjs = require('./chunk-HR2DTKKH.js');


var _chunkDW2L55WOjs = require('./chunk-DW2L55WO.js');


var _chunkRJNELI77js = require('./chunk-RJNELI77.js');


var _chunkMBFLX26Njs = require('./chunk-MBFLX26N.js');

// src/index.ts
var src_default = (knex) => {
  knex.QueryBuilder.extend(_chunkDW2L55WOjs.bulkUpdate.name, _chunkDW2L55WOjs.bulkUpdate);
  knex.QueryBuilder.extend(_chunkHR2DTKKHjs.jsonObject.name, _chunkHR2DTKKHjs.jsonObject);
  knex.QueryBuilder.extend(_chunkMBFLX26Njs.metaFilter.name, _chunkMBFLX26Njs.metaFilter);
  knex.QueryBuilder.extend(_chunkRJNELI77js.metaDate.name, _chunkRJNELI77js.metaDate);
  knex.QueryBuilder.extend(_chunkLOPCAAGFjs.metaInsert.name, _chunkLOPCAAGFjs.metaInsert);
  knex.QueryBuilder.extend(_chunk44JQLRBCjs.metaFind.name, _chunk44JQLRBCjs.metaFind);
  knex.QueryBuilder.extend(_chunkBQ3XUVKMjs.metaPage.name, _chunkBQ3XUVKMjs.metaPage);
  knex.QueryBuilder.extend(_chunk55YT53L6js.metaQuery.name, _chunk55YT53L6js.metaQuery);
  knex.QueryBuilder.extend(_chunk5ZTS5JX7js.metaSort.name, _chunk5ZTS5JX7js.metaSort);
  knex.QueryBuilder.extend(_chunkPJUUQE6Tjs.metaUpdate.name, _chunkPJUUQE6Tjs.metaUpdate);
  return knex;
};



exports.src_default = src_default;
