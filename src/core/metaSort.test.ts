import { expect, test } from 'vitest'

import knex from '../connection'

test('Should perform simple sort', () => {
  const dictionary = {
    name: 'users.name'
  }

  const result = knex('users')
    .metaSort({
      sort: 'asc',
      sortBy: 'name',
      dictionary,
      isCount: false
    })
    .toString()

  const expected = 'select * from `users` order by `users`.`name` asc'

  expect(result).toBe(expected)
})

test('Ignores sort if dictionary is empty', () => {
  const dictionary = {
  }

  const result = knex('users')
    .metaSort({
      sort: 'asc',
      sortBy: 'name',
      dictionary,
      isCount: false
    })
    .toString()

  const expected = 'select * from `users`'

  expect(result).toBe(expected)
})

test('Ignores sort if "sort" is empty', () => {
  const dictionary = {
    name: 'users.name'
  }

  const result = knex('users')
    .metaSort({
      sortBy: 'name',
      dictionary,
      isCount: false
    })
    .toString()

  const expected = 'select * from `users`'

  expect(result).toBe(expected)
})

test('Ignores sort if "sortBy" is empty', () => {
  const dictionary = {
    name: 'users.name'
  }

  const result = knex('users')
    .metaSort({
      sort: 'asc',
      dictionary,
      isCount: false
    })
    .toString()

  const expected = 'select * from `users`'

  expect(result).toBe(expected)
})

test('Ignores sort if isCount is true', () => {
  const dictionary = {
    name: 'users.name'
  }

  const result = knex('users')
    .metaSort({
      sort: 'asc',
      sortBy: 'name',
      dictionary,
      isCount: true
    })
    .toString()

  const expected = 'select * from `users`'

  expect(result).toBe(expected)
})

test('Ignores sort if isCount is true', () => {
  const dictionary = {
    name: 'users.name'
  }

  const result = knex('users')
    .metaSort({
      sort: 'asc',
      sortBy: 'name',
      dictionary,
      isCount: true
    })
    .toString()

  const expected = 'select * from `users`'

  expect(result).toBe(expected)
})

test('Ignores sort array if isCount is true', () => {
  const dictionary = {
    name: 'users.name',
    place: 'users.place'
  }

  const result = knex('users')
    .metaSort({
      sort: ['asc', 'desc'],
      sortBy: ['name', 'place'],
      dictionary,
      isCount: true
    })
    .toString()

  const expected = 'select * from `users`'

  expect(result).toBe(expected)
})

test('Ignores sort if "sort" is not valid keyword', () => {
  const dictionary = {
    name: 'users.name'
  }

  const result = knex('users')
    .metaSort({
      sort: 'ascasd',
      sortBy: 'name',
      dictionary,
      isCount: false
    })
    .toString()

  const expected = 'select * from `users`'

  expect(result).toBe(expected)
})

test('Ignores sort if "sort" is not valid keyword', () => {
  const dictionary = {
    name: 'users.name'
  }

  const result = knex('users')
    .metaSort({
      sort: ['ascasd'],
      sortBy: ['name'],
      dictionary,
      isCount: false
    })
    .toString()

  const expected = 'select * from `users`'

  expect(result).toBe(expected)
})

test('Should perform array sort', () => {
  const dictionary = {
    name: 'users.name',
    place: 'users.place'
  }

  const result = knex('users')
    .metaSort({
      sort: ['asc', 'desc'],
      sortBy: ['name', 'place'],
      dictionary,
      isCount: false
    })
    .toString()

  const expected = 'select * from `users` order by `users`.`name` asc, `users`.`place` desc'

  expect(result).toBe(expected)
})

test('Should ignore if "sort" and "sortBy" data size is not the same', () => {
  const dictionary = {
    name: 'users.name',
    place: 'users.place'
  }

  const result = knex('users')
    .metaSort({
      sort: ['asc'],
      sortBy: ['name', 'place'],
      dictionary,
      isCount: false
    })
    .toString()

  const expected = 'select * from `users`'

  expect(result).toBe(expected)
})
