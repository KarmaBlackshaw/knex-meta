import { expect, test } from 'vitest'

import knex from '../knex'
import moment from 'moment'

test('Adds startOf day and endOf day if time is not present', () => {
  const dictionary = {
    birthdate: 'users.birthdate'
  }

  const result = knex('users')
    .metaDate({
      dateBy: 'birthdate',
      dateFrom: '07-29-1998',
      dateTo: '07-29-1998',
      dictionary
    })
    .toString()

  const expected = "select * from `users` where `birthdate` >= '1998-07-29 00:00:00' and `birthdate` <= '1998-07-29 23:59:59'"

  expect(result).toBe(expected)
})

test('Sets "dateTo" to current date if empty', () => {
  const dictionary = {
    birthdate: 'users.birthdate'
  }

  const result = knex('users')
    .metaDate({
      dateBy: 'birthdate',
      dateFrom: '07-29-1998',
      dictionary
    })
    .toString()
    .replace(/`/g, '')

  const expected = `select * from users where birthdate >= '1998-07-29 00:00:00' and birthdate <= '${moment().format('YYYY-MM-DD HH:mm:ss')}'`

  expect(result).toBe(expected)
})

test('Ignores if dateFrom is empty', () => {
  const dictionary = {
    birthdate: 'users.birthdate'
  }

  const result = knex('users')
    .metaDate({
      dateBy: 'birthdate',
      dateTo: '07-29-1998',
      dictionary
    })
    .toString()

  const expected = 'select * from `users`'

  expect(result).toBe(expected)
})

test('Works correctly with time', () => {
  const dictionary = {
    birthdate: 'users.birthdate'
  }

  const result = knex('users')
    .metaDate({
      dateBy: 'birthdate',
      dateTo: '07-29-1998 10:22:30',
      dateFrom: '07-29-1998 11:22:30',
      dictionary
    })
    .toString()

  const expected = "select * from `users` where `birthdate` >= '1998-07-29 11:22:30' and `birthdate` <= '1998-07-29 10:22:30'"

  expect(result).toBe(expected)
})
