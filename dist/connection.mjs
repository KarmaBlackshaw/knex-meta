import {
  metaInsert
} from "./chunk-FEWOXX5B.mjs";
import {
  metaPage
} from "./chunk-WKLMP7EO.mjs";
import {
  metaSort
} from "./chunk-Z5C5A5UL.mjs";
import {
  metaUpdate
} from "./chunk-56VUBGSP.mjs";
import {
  bulkUpdate
} from "./chunk-5GELIHSZ.mjs";
import "./chunk-QFJUJ4KH.mjs";
import {
  jsonObject
} from "./chunk-CTIIIQYB.mjs";
import {
  meta
} from "./chunk-ZIC3VHGY.mjs";
import {
  metaDate
} from "./chunk-6AUII5VQ.mjs";
import {
  metaFilter
} from "./chunk-YSZTSPB4.mjs";
import "./chunk-AMSJFKOM.mjs";
import {
  metaFind
} from "./chunk-HVL3JYWA.mjs";
import "./chunk-GRXPJ7I5.mjs";

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
