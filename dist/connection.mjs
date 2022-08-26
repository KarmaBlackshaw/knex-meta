import {
  metaInsert
} from "./chunk-RF3W556C.mjs";
import {
  metaPage
} from "./chunk-WKLMP7EO.mjs";
import {
  metaSort
} from "./chunk-XTTYEZ6D.mjs";
import {
  metaUpdate
} from "./chunk-56VUBGSP.mjs";
import "./chunk-UVT5OIO7.mjs";
import {
  bulkUpdate
} from "./chunk-4OLMO2AO.mjs";
import "./chunk-QFJUJ4KH.mjs";
import {
  jsonObject
} from "./chunk-CTIIIQYB.mjs";
import {
  meta
} from "./chunk-ZIC3VHGY.mjs";
import {
  metaDate
} from "./chunk-GHQRNP4I.mjs";
import {
  metaFilter
} from "./chunk-R5XBWYPM.mjs";
import {
  metaFind
} from "./chunk-ZJRGD4PJ.mjs";
import "./chunk-GRXPJ7I5.mjs";
import "./chunk-ICSNCPDD.mjs";

// src/connection.ts
import { knex } from "knex";
var extensions = [
  metaDate,
  metaFilter,
  metaPage,
  metaSort,
  meta,
  bulkUpdate,
  jsonObject,
  metaUpdate,
  metaInsert,
  metaFind
];
extensions.forEach((extension) => {
  knex.QueryBuilder.extend(extension.name, extension);
});
var connection_default = knex({
  client: "mysql",
  connection: {
    host: "10.0.10.43",
    user: "pmchan",
    password: "pm@1004@chan@tT@9415042",
    database: "inplay_sports"
  }
});
export {
  connection_default as default
};
