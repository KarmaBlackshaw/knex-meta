import {
  isDate,
  isObject
} from "./chunk-GRXPJ7I5.mjs";

// src/core/metaDate.ts
import moment from "moment";
import _ from "lodash";
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
  if (!isDate(dateFrom)) {
    return this;
  }
  if (isObject(dictionary) && !dictionary[dateBy]) {
    return this;
  }
  const parsedDateFrom = moment(dateFrom, DATETIME_FORMAT);
  if (!parsedDateFrom.isValid()) {
    return this;
  }
  const dateFromTimestamp = hasTime(dateFrom) ? dateFrom : `${dateFrom} 00:00:00`;
  if (_.isNil(dateTo)) {
    return this.where(dictionary[dateBy], ">=", dateFromTimestamp).where(dictionary[dateBy], "<=", this.client.raw("CURRENT_TIMESTAMP"));
  }
  const parsedDateTo = moment(dateTo, DATETIME_FORMAT);
  if (!parsedDateTo.isValid()) {
    return this;
  }
  const dateToTimestamp = hasTime(dateTo) ? dateTo : `${dateTo} 23:59:59`;
  return this.where(dictionary[dateBy], ">=", dateFromTimestamp).where(dictionary[dateBy], "<=", dateToTimestamp);
}

export {
  metaDate
};
