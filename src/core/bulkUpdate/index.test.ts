import { expect, test } from 'vitest'

import knex from '../../connection'

test('Single data', () => {
  const updateData = [
    {
      id: 1,
      name: 'John',
      age: 30,
      address: 'Cebu'
    }
  ]

  const result = knex('users')
    .bulkUpdate('id', updateData)
    .toString()

  const expected = "update `users` set `name` = (CASE WHEN id = 1 THEN 'John' END), `age` = (CASE WHEN id = 1 THEN 30 END), `address` = (CASE WHEN id = 1 THEN 'Cebu' END) where ((id = 1))"

  expect(result).toBe(expected)
})

test('Single data with multiple keys', () => {
  const updateData = [
    {
      id: 1,
      name: 'John',
      age: 30,
      address: 'Cebu'
    }
  ]

  const result = knex('users')
    .bulkUpdate(['id', 'name'], updateData)
    .toString()

  const expected = "update `users` set `age` = (CASE WHEN id = 1 AND name = 'John' THEN 30 END), `address` = (CASE WHEN id = 1 AND name = 'John' THEN 'Cebu' END) where ((id = 1 AND name = 'John'))"

  expect(result).toBe(expected)
})

test('Multiple data', () => {
  const updateData = [
    {
      id: 1,
      name: 'John',
      age: 30,
      address: 'Cebu'
    },
    {
      id: 2,
      name: 'Mark',
      age: 25,
      address: 'Manila'
    }
  ]

  const result = knex('users')
    .bulkUpdate('id', updateData)
    .toString()

  const expected = "update `users` set `name` = (CASE WHEN id = 1 THEN 'John' WHEN id = 2 THEN 'Mark' END), `age` = (CASE WHEN id = 1 THEN 30 WHEN id = 2 THEN 25 END), `address` = (CASE WHEN id = 1 THEN 'Cebu' WHEN id = 2 THEN 'Manila' END) where ((id = 1) OR (id = 2))"

  expect(result).toBe(expected)
})

test('Multiple data with multiple keys', () => {
  const updateData = [
    {
      id: 1,
      name: 'John',
      age: 30,
      address: 'Cebu'
    },
    {
      id: 2,
      name: 'Mark',
      age: 25,
      address: 'Manila'
    }
  ]

  const result = knex('users')
    .bulkUpdate(['id', 'name'], updateData)
    .toString()

  const expected = "update `users` set `age` = (CASE WHEN id = 1 AND name = 'John' THEN 30 WHEN id = 2 AND name = 'Mark' THEN 25 END), `address` = (CASE WHEN id = 1 AND name = 'John' THEN 'Cebu' WHEN id = 2 AND name = 'Mark' THEN 'Manila' END) where ((id = 1 AND name = 'John') OR (id = 2 AND name = 'Mark'))"

  expect(result).toBe(expected)
})

test('Works with alias', () => {
  const updateData = [
    {
      id: 1,
      name: 'John',
      age: 30,
      address: 'Cebu'
    },
    {
      id: 2,
      name: 'Mark',
      age: 25,
      address: 'Manila'
    }
  ]

  const updateOptions = {
    alias: {
      name: 'users.name',
      age: 'users.age'
    }
  }

  const result = knex('users')
    .bulkUpdate(['id', 'name'], updateData, updateOptions)
    .toString()

  const expected = "update `users` set `users`.`age` = (CASE WHEN id = 1 AND users.name = 'John' THEN 30 WHEN id = 2 AND users.name = 'Mark' THEN 25 END), `address` = (CASE WHEN id = 1 AND users.name = 'John' THEN 'Cebu' WHEN id = 2 AND users.name = 'Mark' THEN 'Manila' END) where ((id = 1 AND users.name = 'John') OR (id = 2 AND users.name = 'Mark'))"

  expect(result).toBe(expected)
})

test('Works with else', () => {
  const updateData = [
    {
      id: 1,
      name: 'John',
      age: 30,
      address: 'Cebu'
    },
    {
      id: 2,
      name: 'Mark',
      age: 25,
      address: 'Manila'
    }
  ]

  const updateOptions = {
    else: {
      age: knex.client.raw('users.age')
    }
  }

  const result = knex('users')
    .bulkUpdate(['id', 'name'], updateData, updateOptions)
    .toString()

  const expected = "update `users` set `age` = (CASE WHEN id = 1 AND name = 'John' THEN 30 WHEN id = 2 AND name = 'Mark' THEN 25 ELSE users.age END), `address` = (CASE WHEN id = 1 AND name = 'John' THEN 'Cebu' WHEN id = 2 AND name = 'Mark' THEN 'Manila' END) where ((id = 1 AND name = 'John') OR (id = 2 AND name = 'Mark'))"

  expect(result).toBe(expected)
})
