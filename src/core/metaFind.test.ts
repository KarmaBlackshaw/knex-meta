import { expect, test } from 'vitest'

import knex from '../connection'

test('Should perform simple find', () => {
  const dictionary = {
    name: 'users.name',
    status: 'users.status'
  }

  const condition = {
    name: 'Jeash',
    status: 'banned'
  }

  const result = knex('users')
    .metaFind(condition, dictionary)
    .toString()

  const expected = "select * from `users` where `users`.`name` like 'Jeash' and `users`.`status` like 'banned' limit 1"

  expect(result).toBe(expected)
})

test('Should ignore items not in dictionary', () => {
  const dictionary = {
    name: 'users.name',
    status: 'users.status'
  }

  const condition = {
    name: 'Jeash'
  }

  const result = knex('users')
    .metaFind(condition, dictionary)
    .toString()

  const expected = "select * from `users` where `users`.`name` like 'Jeash' limit 1"

  expect(result).toBe(expected)
})
