import {
  isDate,
  isNil,
  isObject
} from "./chunk-Q2BL4KY6.mjs";

// src/metaDate.ts
import moment from "moment";
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
  if (!isDate(dateFrom)) {
    return this;
  }
  if (isObject(dictionary) && !dictionary[dateBy]) {
    return this;
  }
  const parsedDateFrom = moment(new Date(dateFrom));
  const dateFromTimestamp = hasTime(parsedDateFrom) ? parsedDateFrom.format(DATETIME_FORMAT) : parsedDateFrom.startOf("day").format(DATETIME_FORMAT);
  if (isNil(dateTo)) {
    return this.where(dateBy, ">=", dateFromTimestamp).where(dateBy, "<=", this.client.raw("CURRENT_TIMESTAMP"));
  }
  const parsedDateTo = moment(new Date(dateTo));
  const dateToTimestamp = hasTime(parsedDateTo) ? parsedDateTo.format(DATETIME_FORMAT) : parsedDateTo.endOf("day").format(DATETIME_FORMAT);
  return this.where(dateBy, ">=", dateFromTimestamp).where(dateBy, "<=", dateToTimestamp);
}

export {
  metaDate
};
