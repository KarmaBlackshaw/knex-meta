import { expect, test } from 'vitest'

import knex from '../../connection'

test('Should have correct simple search output', () => {
  const dictionary = {
    name: 'users.name'
  }

  const result = knex('users')
    .metaFilter({
      filterBy: 'name',
      q: 'john',
      dictionary
    })
    .toString()

  const expected = "select * from `users` where `users`.`name` like '%john%'"

  expect(result).toBe(expected)
})

test('Should ignore if "q" is missing', () => {
  const dictionary = {
    name: 'users.name'
  }

  const result = knex('users')
    .metaFilter({
      filterBy: 'name',
      dictionary
    })
    .toString()

  const expected = 'select * from `users`'

  expect(result).toBe(expected)
})

test('Should ignore if "filterBy" is missing', () => {
  const dictionary = {
    name: 'users.name'
  }

  const result = knex('users')
    .metaFilter({
      q: 'john',
      dictionary
    })
    .toString()

  const expected = 'select * from `users`'

  expect(result).toBe(expected)
})

test('If string "q" and string "filterBy" and dictionary property is array', () => {
  const dictionary = {
    name: ['users.fname', 'users.lname']
  }

  const result = knex('users')
    .metaFilter({
      filterBy: 'name',
      q: 'john',
      dictionary
    })
    .toString()

  const expected = "select * from `users` where (`users`.`fname` like '%john%' or `users`.`lname` like '%john%')"

  expect(result).toBe(expected)
})

test('If array "q" and array "filterBy"', () => {
  const dictionary = {
    name: ['users.fname', 'users.lname'],
    address: 'users.address'
  }

  const result = knex('users')
    .metaFilter({
      filterBy: ['name', 'address'],
      q: ['john', 'lahug'],
      dictionary
    })
    .toString()

  const expected = "select * from `users` where ((`users`.`fname` like '%john%' or `users`.`lname` like '%john%') and `users`.`address` like '%lahug%')"

  expect(result).toBe(expected)
})

test('If string "q" and array "filterBy"', () => {
  const dictionary = {
    name: ['users.fname', 'users.lname'],
    address: 'users.address'
  }

  const result = knex('users')
    .metaFilter({
      filterBy: ['name', 'address'],
      q: 'john',
      dictionary
    })
    .toString()

  const expected = "select * from `users` where ((`users`.`fname` like '%john%' or `users`.`lname` like '%john%') or `users`.`address` like '%john%')"

  expect(result).toBe(expected)
})

test('If array "q" and string "filterBy"', () => {
  const dictionary = {
    name: 'users.fname',
    address: 'users.address'
  }

  const result = knex('users')
    .metaFilter({
      filterBy: 'name',
      q: ['john', 'paul'],
      dictionary
    })
    .toString()

  const expected = "select * from `users` where (`users`.`fname` like '%john%' or `users`.`fname` like '%paul%')"

  expect(result).toBe(expected)
})

test('Exact match should work properly', () => {
  const dictionary = {
    name: 'users.fname',
    address: 'users.address'
  }

  const result = knex('users')
    .metaFilter({
      filterBy: 'name',
      q: ['"john"', 'paul'],
      dictionary
    })
    .toString()

  const expected = "select * from `users` where (`users`.`fname` like 'john' or `users`.`fname` like '%paul%')"

  expect(result).toBe(expected)
})

test('Search Items should work', () => {
  const dictionary = {
    name: 'users.fname',
    address: 'users.address'
  }

  const searchItems = [
    {
      name: 'John',
      address: 'Cebu',
      asdf: 'asdf'
    },
    {
      name: 'Johnny',
      address: 'Palo'
    }

  ]

  const result = knex('users')
    .metaFilter({
      searchItems,
      dictionary
    })
    .toString()

  const expected = "select * from `users` where ((`users`.`fname` like '%John%' and `users`.`address` like '%Cebu%') or (`users`.`fname` like '%Johnny%' and `users`.`address` like '%Palo%'))"

  expect(result).toBe(expected)
})
