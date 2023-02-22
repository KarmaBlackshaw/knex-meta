// libs
import moment from 'moment'

/**
 * UTILITIES
 */
import {
  isObject
} from '../utils/is'

import {
  toArray
} from '../utils/array'

const hasTime = (dateString: string) => {
  return !/^\d{4}-\d{2}-\d{2}$/.test(dateString.trim())
}

export interface IDateArguments {
  dateBy?: string | string[],
  dateTo?: string | string[],
  dateFrom?: string | string[],
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

  if (!isObject(dictionary)) {
    return this
  }

  const dateByArr = toArray(dateBy)
  const dateToArr = toArray(dateTo)
  const dateFromArr = toArray(dateFrom)

  dateByArr.forEach((currDateBy, index) => {
    if (!dictionary[currDateBy]) {
      return this
    }
    const currdateTo = dateToArr[index]
    const currdateFrom = dateFromArr[index]

    const parsedDateFrom = moment(dateFrom, DATETIME_FORMAT)
    const parsedDateTo = moment(dateTo, DATETIME_FORMAT)

    if (!parsedDateFrom.isValid() || !parsedDateTo.isValid()) {
      return this
    }

    const dateFromTimestamp = hasTime(currdateFrom)
      ? currdateFrom
      : `${currdateFrom} 00:00:00`

    const dateToTimestamp = hasTime(currdateTo)
      ? currdateTo
      : `${currdateTo} 23:59:59`

    this
      .where(dictionary[currDateBy], '>=', dateFromTimestamp)
      .where(dictionary[currDateBy], '<=', dateToTimestamp)
  })

  return this
}
