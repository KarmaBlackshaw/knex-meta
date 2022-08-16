"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



var _chunkIOVEVJI5js = require('./chunk-IOVEVJI5.js');

// src/metaDate.ts
var _moment = require('moment'); var _moment2 = _interopRequireDefault(_moment);
function hasTime(momentDate) {
  return momentDate.format("HH:mm:ss").split(":").map(Number).reduce((acc, curr) => acc + curr) > 0;
}
var DATETIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
function metaDate({
  dateBy,
  dateTo,
  dateFrom,
  dictionary
}) {
  if (!dateBy || !dateFrom) {
    return this;
  }
  if (!_chunkIOVEVJI5js.isDate.call(void 0, dateFrom)) {
    return this;
  }
  if (_chunkIOVEVJI5js.isObject.call(void 0, dictionary) && !dictionary[dateBy]) {
    return this;
  }
  const parsedDateFrom = _moment2.default.call(void 0, new Date(dateFrom));
  const dateFromTimestamp = hasTime(parsedDateFrom) ? parsedDateFrom.format(DATETIME_FORMAT) : parsedDateFrom.startOf("day").format(DATETIME_FORMAT);
  if (_chunkIOVEVJI5js.isNil.call(void 0, dateTo)) {
    return this.where(dateBy, ">=", dateFromTimestamp).where(dateBy, "<=", this.client.raw("CURRENT_TIMESTAMP"));
  }
  const parsedDateTo = _moment2.default.call(void 0, new Date(dateTo));
  const dateToTimestamp = hasTime(parsedDateTo) ? parsedDateTo.format(DATETIME_FORMAT) : parsedDateTo.endOf("day").format(DATETIME_FORMAT);
  return this.where(dateBy, ">=", dateFromTimestamp).where(dateBy, "<=", dateToTimestamp);
}



exports.metaDate = metaDate;
