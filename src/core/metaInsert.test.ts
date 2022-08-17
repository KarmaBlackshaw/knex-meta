import { expect, test } from 'vitest'

import knex from '../connection'

test('Should perform simple insert', () => {
  const fillables = [
    'name'
  ]

  const payload = {
    name: 'Jeash'
  }

  const result = knex('users')
    .metaInsert(payload, fillables)
    .toString()

  const expected = "insert into `users` (`name`) values ('Jeash')"

  expect(result).toBe(expected)
})

test('Should perform simple array insert', () => {
  const fillables = [
    'name'
  ]

  const payload = [
    {
      name: 'Jeash'
    },
    {
      name: 'Ernie'
    }
  ]

  const result = knex('users')
    .metaInsert(payload, fillables)
    .toString()

  const expected = "insert into `users` (`name`) values ('Jeash'), ('Ernie')"

  expect(result).toBe(expected)
})

test('Should set undefined values to DEFAULT', () => {
  const fillables = [
    'name'
  ]

  const payload = [
    {
      name: 'Jeash'
    },
    {
      name: undefined
    }
  ]

  const result = knex('users')
    .metaInsert(payload, fillables)
    .toString()

  const expected = "insert into `users` (`name`) values ('Jeash'), (DEFAULT)"

  expect(result).toBe(expected)
})

test('Should set undefined values to DEFAULT', () => {
  const fillables = [
    'name',
    'age'
  ]

  const payload = [
    {
      name: 'Jeash',
      age: '12'
    },
    {
      name: undefined,
      age: '52'
    }
  ]

  const result = knex('users')
    .metaInsert(payload, fillables)
    .toString()

  const expected = "insert into `users` (`age`, `name`) values ('12', 'Jeash'), ('52', DEFAULT)"

  expect(result).toBe(expected)
})
