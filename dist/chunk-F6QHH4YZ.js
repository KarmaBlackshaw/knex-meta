"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


var _chunk6YPE5F7Ujs = require('./chunk-6YPE5F7U.js');

// src/core/metaDate.ts
var _moment = require('moment'); var _moment2 = _interopRequireDefault(_moment);
var _lodash = require('lodash'); var _lodash2 = _interopRequireDefault(_lodash);
var hasTime = (dateString) => {
  return !/^\d{4}-\d{2}-\d{2}$/.test(dateString.trim());
};
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
  if (!_chunk6YPE5F7Ujs.isDate.call(void 0, dateFrom)) {
    return this;
  }
  if (_chunk6YPE5F7Ujs.isObject.call(void 0, dictionary) && !dictionary[dateBy]) {
    return this;
  }
  const parsedDateFrom = _moment2.default.call(void 0, dateFrom, DATETIME_FORMAT);
  if (!parsedDateFrom.isValid()) {
    return this;
  }
  const dateFromTimestamp = hasTime(dateFrom) ? dateFrom : `${dateFrom} 00:00:00`;
  if (_lodash2.default.isNil(dateTo)) {
    return this.where(dictionary[dateBy], ">=", dateFromTimestamp).where(dictionary[dateBy], "<=", this.client.raw("CURRENT_TIMESTAMP"));
  }
  const parsedDateTo = _moment2.default.call(void 0, dateTo, DATETIME_FORMAT);
  if (!parsedDateTo.isValid()) {
    return this;
  }
  const dateToTimestamp = hasTime(dateTo) ? dateTo : `${dateTo} 23:59:59`;
  return this.where(dictionary[dateBy], ">=", dateFromTimestamp).where(dictionary[dateBy], "<=", dateToTimestamp);
}



exports.metaDate = metaDate;
