import { expect, test } from 'vitest'

import knex from '../connection'

test('Adds startOf day and endOf day if time is not present', () => {
  const dictionary = {
    birthdate: 'users.birthdate'
  }

  const result = knex('users')
    .metaDate({
      dateBy: 'birthdate',
      dateFrom: '1998-07-29',
      dateTo: '1998-07-29',
      dictionary
    })
    .toString()

  const expected = "select * from `users` where `users`.`birthdate` >= '1998-07-29 00:00:00' and `users`.`birthdate` <= '1998-07-29 23:59:59'"

  expect(result).toBe(expected)
})

test('Sets "dateTo" to current date if empty', () => {
  const dictionary = {
    birthdate: 'users.birthdate'
  }

  const result = knex('users')
    .metaDate({
      dateBy: 'birthdate',
      dateFrom: '1998-07-29',
      dictionary
    })
    .toString()
    .replace(/`/g, '')

  const expected = 'select * from users where users.birthdate >= \'1998-07-29 00:00:00\' and users.birthdate <= CURRENT_TIMESTAMP'

  expect(result).toBe(expected)
})

test('Ignores if dateFrom is empty', () => {
  const dictionary = {
    birthdate: 'users.birthdate'
  }

  const result = knex('users')
    .metaDate({
      dateBy: 'birthdate',
      dateTo: '1998-07-29',
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
      dateTo: '1998-07-29 10:22:30',
      dateFrom: '1998-07-29 11:22:30',
      dictionary
    })
    .toString()

  const expected = "select * from `users` where `users`.`birthdate` >= '1998-07-29 11:22:30' and `users`.`birthdate` <= '1998-07-29 10:22:30'"

  expect(result).toBe(expected)
})
