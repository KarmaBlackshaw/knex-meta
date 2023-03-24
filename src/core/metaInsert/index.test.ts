import { expect, test } from 'vitest'

import knex from '../../connection'

test('Simple insert', () => {
  const options = {
    fields: [
      'name'
    ]
  }

  const payload = {
    name: 'Jeash'
  }

  const result = knex('users')
    .metaInsert(payload, options)
    .toString()

  const expected = "insert into `users` (`name`) values ('Jeash')"

  expect(result).toBe(expected)
})

test('Simple insert with multiple payload', () => {
  const options = {
    fields: [
      'name'
    ]
  }

  const payload = [
    {
      name: 'Jeash'
    },
    {
      name: 'Ernie'
    }
  ]

  const result = knex('users')
    .metaInsert(payload, options)
    .toString()

  const expected = "insert into `users` (`name`) values ('Jeash'), ('Ernie')"

  expect(result).toBe(expected)
})

test('Undefined values will default to `DEFAULT`', () => {
  const options = {
    fields: [
      'name'
    ]
  }

  const payload = [
    {
      name: 'Jeash'
    },
    {
      name: undefined
    }
  ]

  const result = knex('users')
    .metaInsert(payload, options)
    .toString()

  const expected = "insert into `users` (`name`) values ('Jeash'), (DEFAULT)"

  expect(result).toBe(expected)
})

test('Transforms JSON fields', () => {
  const options = {
    fields: [
      'name',
      'age',
      'settings'
    ],
    json_fields: [
      'settings'
    ]
  }

  const payload = [
    {
      name: 'Jeash',
      settings: { percentage: 12 }
    },
    {
      name: 'Josh',
      age: '52'
    }
  ]

  const result = knex('users')
    .metaInsert(payload, options)
    .toString()

  const expected = "insert into `users` (`age`, `name`, `settings`) values (DEFAULT, 'Jeash', '{\"percentage\":12}'), ('52', 'Josh', DEFAULT)"

  expect(result.replace(/\\/g, '')).toBe(expected)
})
