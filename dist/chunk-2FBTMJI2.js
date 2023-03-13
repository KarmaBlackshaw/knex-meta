"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/core/metaDate/index.ts
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
  if (!_lodash2.default.isPlainObject(dictionary)) {
    return this;
  }
  const dateByArr = _lodash2.default.castArray(dateBy);
  const dateToArr = _lodash2.default.castArray(dateTo);
  const dateFromArr = _lodash2.default.castArray(dateFrom);
  dateByArr.forEach((currDateBy, index) => {
    if (!dictionary[currDateBy]) {
      return this;
    }
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
