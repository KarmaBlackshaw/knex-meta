import { expect, test } from 'vitest'

import knex from '../../connection'

test('Update with an object payload', () => {
  const updateData = {
    id: 1,
    name: 'John',
    username: 30
  }

  const options = {
    fields: {
      id: 'users.id',
      name: 'users.name',
      username: 'users.username'
    }
  }

  const result = knex('users')
    .metaUpdate('id', updateData, options)
    .toString()

  const expected = "update `users` set `name` = CASE WHEN (users.id = 1) THEN 'John'  END, `username` = CASE WHEN (users.id = 1) THEN 30  END where ((`users`.`id` = 1))"

  expect(result).toBe(expected)
})

test('Update with an object payload and else condition', () => {
  const updateData = {
    id: 1,
    name: 'John',
    username: 30
  }

  const options = {
    fields: {
      id: 'users.id',
      name: 'users.name',
      username: 'users.username'
    },
    else: {
      name: 'foo'
    }
  }

  const result = knex('users')
    .metaUpdate('id', updateData, options)
    .toString()

  const expected = "update `users` set `name` = CASE WHEN (users.id = 1) THEN 'John' ELSE 'foo' END, `username` = CASE WHEN (users.id = 1) THEN 30  END where ((`users`.`id` = 1))"

  expect(result).toBe(expected)
})

test('Update with an object whose key does not exist in the fields', () => {
  const updateData = {
    id: 1,
    name: 'John',
    username: 30
  }

  const options = {
    fields: {
      id: 'users.id',
      name: 'users.name'
    }
  }

  const result = knex('users')
    .metaUpdate('id', updateData, options)
    .toString()

  const expected = "update `users` set `name` = CASE WHEN (users.id = 1) THEN 'John'  END where ((`users`.`id` = 1))"

  expect(result).toBe(expected)
})

test('Update with multiple data', () => {
  const updateData = [
    {
      id: 1,
      name: 'John'
    },
    {
      id: 2,
      name: 'Mark'
    }
  ]

  const options = {
    fields: {
      id: 'users.id',
      name: 'users.name'
    }
  }

  const result = knex('users')
    .metaUpdate('id', updateData, options)
    .toString()

  const expected = "update `users` set `name` = CASE WHEN (users.id = 1) THEN 'John'  WHEN (users.id = 2) THEN 'Mark'  END where ((`users`.`id` = 1) or (`users`.`id` = 2))"

  expect(result).toBe(expected)
})

test('Update with multiple keys', () => {
  const updateData = [
    {
      id: 1,
      name: 'John',
      balance: 30
    },
    {
      id: 2,
      name: 'Mark',
      balance: 25
    }
  ]

  const options = {
    fields: {
      id: 'users.id',
      name: 'users.name',
      balance: 'users.balance'
    }
  }

  const result = knex('users')
    .metaUpdate(['id', 'name'], updateData, options)
    .toString()

  const expected = "update `users` set `balance` = CASE WHEN (users.id = 1 AND users.name = 'John') THEN 30  WHEN (users.id = 2 AND users.name = 'Mark') THEN 25  END where ((`users`.`id` = 1 and `users`.`name` = 'John') or (`users`.`id` = 2 and `users`.`name` = 'Mark'))"

  expect(result).toBe(expected)
})

test('Update with json fields', () => {
  const updateData = [
    {
      id: 1,
      name: 'John',
      settings: { background_color: 'red' }
    },
    {
      id: 2,
      name: 'Mark',
      settings: { background_color: 'yellow' }
    }
  ]

  const options = {
    fields: {
      id: 'users.id',
      name: 'users.name',
      settings: 'users.settings'
    }
  }

  const result = knex('users')
    .metaUpdate(['id', 'name'], updateData, options)
    .toString()

  const expected = "update `users` set `settings` = CASE WHEN (users.id = 1 AND users.name = 'John') THEN '{\"background_color\":\"red\"}'  WHEN (users.id = 2 AND users.name = 'Mark') THEN '{\"background_color\":\"yellow\"}'  END where ((`users`.`id` = 1 and `users`.`name` = 'John') or (`users`.`id` = 2 and `users`.`name` = 'Mark'))"

  expect(result).toBe(expected)
})
