import { expect, test } from 'vitest'

import knex from '../../connection'

test('Should perform simple update', () => {
  const dictionary = {
    name: 'users.name'
  }

  const payload = {
    name: 'Jeash'
  }

  const result = knex('users')
    .where('users.id', 1)
    .metaUpdate(payload, dictionary)
    .toString()

  const expected = "update `users` set `users`.`name` = 'Jeash' where `users`.`id` = 1"

  expect(result).toBe(expected)
})

test('Should not include keys not in the dictionary', () => {
  const dictionary = {
    name: 'users.name'
  }

  const payload = {
    name: 'Jeash',
    age: 12
  }

  const result = knex('users')
    .where('users.id', 1)
    .metaUpdate(payload, dictionary)
    .toString()

  const expected = "update `users` set `users`.`name` = 'Jeash' where `users`.`id` = 1"

  expect(result).toBe(expected)
})

test('Should not include undefined values', () => {
  const dictionary = {
    name: 'users.name',
    age: 'users.age'
  }

  const payload = {
    name: 'Jeash',
    age: undefined
  }

  const result = knex('users')
    .where('users.id', 1)
    .metaUpdate(payload, dictionary)
    .toString()

  const expected = "update `users` set `users`.`name` = 'Jeash' where `users`.`id` = 1"

  expect(result).toBe(expected)
})
