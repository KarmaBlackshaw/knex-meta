// libs
import moment, { Moment } from "moment";

/**
 * UTILITIES
 */
import {
  isDate,
  isObject
} from '../utils/is'

function hasTime(momentDate: Moment) {
  return momentDate
    .format('HH:mm:ss')
    .split(':')
    .map(Number)
    .reduce((acc: number, curr: number) => acc + curr) > 0
}

export interface IDateArguments {
  dateBy?: string,
  dateTo: (string | Date),
  dateFrom?: string,
  dictionary?: Record<string, string>
}

function metaDate({
  dateBy,
  dateTo = new Date(),
  dateFrom,
  dictionary
}: IDateArguments = { dateTo: new Date() }) {
  if (!dateBy || !dateFrom) {
    return this
  }

  if (!isDate(dateFrom) || !isDate(dateTo)) {
    return this
  }

  if (isObject(dictionary) && !dictionary[dateBy]) {
    return this
  }

  const parsedDateFrom = moment(new Date(dateFrom))
  const parsedDateTo = moment(new Date(dateTo))

  const format = 'YYYY-MM-DD HH:mm:ss'

  const dateFromTimestamp = hasTime(parsedDateFrom)
    ? parsedDateFrom.format(format)
    : parsedDateFrom.startOf('day').format(format)

  const dateToTimestamp = hasTime(parsedDateTo)
    ? parsedDateTo.format(format)
    : parsedDateTo.endOf('day').format(format)

  return this
    .where(dateBy, '>=', dateFromTimestamp)
    .where(dateBy, '<=', dateToTimestamp)
}


export default metaDate