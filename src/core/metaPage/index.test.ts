import { expect, test } from 'vitest'

import knex from '../../connection'

test('Test 1', () => {
  const result = knex('users')
    .metaPage({ page: 1, rows: 3, isCount: 0 })
    .toString()

  const expected = 'select * from `users` limit 3'

  expect(result).toBe(expected)
})

test('Test 2', () => {
  const result = knex('users')
    .metaPage({ page: 1, rows: 3, isCount: 1 })
    .toString()

  const expected = 'select * from `users`'

  expect(result).toBe(expected)
})

test('Test 3', () => {
  const result = knex('users')
    .metaPage({ page: 2, rows: 3, isCount: 0 })
    .toString()

  const expected = 'select * from `users` limit 3 offset 3'

  expect(result).toBe(expected)
})
