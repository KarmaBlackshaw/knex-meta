// libs
import moment, { Moment } from 'moment'

/**
 * UTILITIES
 */
import {
  isDate,
  isObject,
  isNil
} from '../utils/is'

function hasTime (momentDate: Moment) {
  return momentDate
    .format('HH:mm:ss')
    .split(':')
    .map(Number)
    .reduce((acc: number, curr: number) => acc + curr) > 0
}

export interface IDateArguments {
  dateBy?: string,
  dateTo?: string,
  dateFrom?: string,
  dictionary?: Record<string, string>
}

const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function metaDate ({
  dateBy,
  dateTo,
  dateFrom,
  dictionary
}: IDateArguments) {
  if (!dateBy || !dateFrom) {
    return this
  }

  if (!isDate(dateFrom)) {
    return this
  }

  if (isObject(dictionary) && !dictionary[dateBy]) {
    return this
  }

  const parsedDateFrom = moment(new Date(dateFrom))
  const dateFromTimestamp = hasTime(parsedDateFrom)
    ? parsedDateFrom.format(DATETIME_FORMAT)
    : parsedDateFrom.startOf('day').format(DATETIME_FORMAT)

  if (isNil(dateTo)) {
    return this
      .where(dateBy, '>=', dateFromTimestamp)
      .where(dateBy, '<=', this.client.raw('CURRENT_TIMESTAMP'))
  }

  const parsedDateTo = moment(new Date(dateTo))
  const dateToTimestamp = hasTime(parsedDateTo)
    ? parsedDateTo.format(DATETIME_FORMAT)
    : parsedDateTo.endOf('day').format(DATETIME_FORMAT)

  return this
    .where(dateBy, '>=', dateFromTimestamp)
    .where(dateBy, '<=', dateToTimestamp)
}
