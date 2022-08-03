import { expect, test } from 'vitest'

import knex from '../connection'

test('Simple json object', () => {
  const dictionary = {
    birthdate: 'users.birthdate'
  }

  const result = knex('users')
    .select({
      users: knex.jsonObject({
        id: 'users.id'
      })
    })
    .toString()

  const expected = 'select JSON_OBJECT("id", users.id) as `users` from `users`'

  expect(result).toBe(expected)
})

test('Simple json object with two properties', () => {
  const dictionary = {
    birthdate: 'users.birthdate'
  }

  const result = knex('users')
    .select({
      users: knex.jsonObject({
        id: 'users.id',
        name: 'users.name'
      })
    })
    .toString()

  const expected = 'select JSON_OBJECT("id", users.id, "name", users.name) as `users` from `users`'

  expect(result).toBe(expected)
})

test('Nested json object', () => {
  const dictionary = {
    birthdate: 'users.birthdate'
  }

  const result = knex('users')
    .select({
      users: knex.jsonObject({
        id: 'users.id',
        name: 'users.name',
        parents: knex.jsonObject({
          id: 'parents.id',
          name: 'parents.name'
        })
      })
    })
    .toString()

  const expected = 'select JSON_OBJECT("id", users.id, "name", users.name, "parents", JSON_OBJECT("id", parents.id, "name", parents.name)) as `users` from `users`'

  expect(result).toBe(expected)
})
