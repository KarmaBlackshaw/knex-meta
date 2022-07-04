import { expect, test } from 'vitest'

import knex from '../knex'

test('Date meta functions correctly', () => {
  const dictionary = {
    birthdate: 'users.birthdate'
  }

  const result = knex('users')
    .meta({
      dateBy: 'birthdate',
      dateFrom: '07-29-1998',
      dateTo: '07-29-1998',
      dateDictionary: dictionary
    })
    .toString()

  const expected = "select * from `users` where `birthdate` >= '1998-07-29 00:00:00' and `birthdate` <= '1998-07-29 23:59:59'"

  expect(result).toBe(expected)
})

test('Page meta functions correctly', () => {
  const result = knex('users')
    .meta({
      page: 3,
      rows: 50
    })
    .toString()

  const expected = 'select * from `users` limit 50 offset 100'

  expect(result).toBe(expected)
})

test('Sort meta functions correctly', () => {
  const dictionary = {
    birthdate: 'users.birthdate'
  }

  const result = knex('users')
    .meta({
      sort: 'asc',
      sortBy: 'birthdate',
      sortDictionary: dictionary
    })
    .toString()

  const expected = 'select * from `users` order by `birthdate` asc'

  expect(result).toBe(expected)
})

test('Filter meta functions correctly', () => {
  const dictionary = {
    birthdate: 'users.birthdate'
  }

  const result = knex('users')
    .meta({
      filterBy: 'birthdate',
      q: 'july',
      filterDictionary: dictionary
    })
    .toString()

  const expected = "select * from `users` where `users`.`birthdate` like '%july%'"

  expect(result).toBe(expected)
})

test('All meta functions correctly', () => {
  const dictionary = {
    birthdate: 'users.birthdate'
  }

  const result = knex('users')
    .meta({
      dateBy: 'birthdate',
      dateFrom: '07-29-1998',
      dateTo: '07-29-1998',
      dateDictionary: dictionary,

      page: 3,
      rows: 50,

      sort: 'asc',
      sortBy: 'birthdate',
      sortDictionary: dictionary,

      filterBy: 'birthdate',
      q: 'july',
      filterDictionary: dictionary
    })
    .toString()

  const expected = "select * from `users` where `birthdate` >= '1998-07-29 00:00:00' and `birthdate` <= '1998-07-29 23:59:59' and `users`.`birthdate` like '%july%' order by `birthdate` asc limit 50 offset 100"

  expect(result).toBe(expected)
})
