"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkVKDJXQUCjs = require('./chunk-VKDJXQUC.js');


var _chunk6YPE5F7Ujs = require('./chunk-6YPE5F7U.js');

// src/core/metaDate.ts
var _moment = require('moment'); var _moment2 = _interopRequireDefault(_moment);
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
  if (!_chunk6YPE5F7Ujs.isObject.call(void 0, dictionary)) {
    return this;
  }
  const dateByArr = _chunkVKDJXQUCjs.toArray.call(void 0, dateBy);
  const dateToArr = _chunkVKDJXQUCjs.toArray.call(void 0, dateTo);
  const dateFromArr = _chunkVKDJXQUCjs.toArray.call(void 0, dateFrom);
  dateByArr.forEach((currDateBy, index) => {
    if (!dictionary[currDateBy]) {
      return this;
    }
    console.log(currDateBy);
    const currdateTo = dateToArr[index];
    const currdateFrom = dateFromArr[index];
    const parsedDateFrom = _moment2.default.call(void 0, dateFrom, DATETIME_FORMAT);
    const parsedDateTo = _moment2.default.call(void 0, dateTo, DATETIME_FORMAT);
    if (!parsedDateFrom.isValid() || !parsedDateTo.isValid()) {
      return this;
    }
    const dateFromTimestamp = hasTime(currdateFrom) ? currdateFrom : `${currdateFrom} 00:00:00`;
    const dateToTimestamp = hasTime(currdateTo) ? currdateTo : `${currdateTo} 23:59:59`;
    this.where(dictionary[currDateBy], ">=", dateFromTimestamp).where(dictionary[currDateBy], "<=", dateToTimestamp);
  });
  return this;
}



exports.metaDate = metaDate;
