// <reference path="../../@types/meta.d.ts" />

import { expect, test } from 'vitest'

import knex from '../connection'

import { Query } from './metaQuery'

test('`must` should work properly (1)', () => {
  const query = {
    filter: {
      must: [
        {
          field: 'login_id',
          operator: 'like',
          value: '%nnn%'
        },
        {
          field: 'point',
          operator: '>',
          value: 2000
        }
      ]
    }
  }

  const fields = {
    login_id: {
      column: 'users.login_id',
      filterable: true
    },
    point: {
      column: 'users.point',
      filterable: true
    }
  }

  const result = knex('users')
    .metaQuery(query, fields)
    .toString()

  const expected = "select * from `users` where ((`users`.`login_id` like '%nnn%') and (`users`.`point` > 2000))"

  expect(result).toBe(expected)
})

test('`must` should work properly (2)', () => {
  const query = {
    filter: {
      must: [
        {
          field: 'login_id',
          operator: 'like',
          value: '%nnn%'
        },
        {
          field: 'point',
          operator: '>',
          value: 2000
        }
      ]
    }
  }

  const fields = {
    login_id: {
      column: 'users.login_id',
      filterable: false
    },
    point: {
      column: 'users.point',
      filterable: true
    }
  }

  const result = knex('users')
    .metaQuery(query, fields)
    .toString()

  const expected = 'select * from `users` where ((`users`.`point` > 2000))'

  expect(result).toBe(expected)
})

test('`must` should work properly (3)', () => {
  const query = {
    filter: {
      must: [
        {
          field: 'login_id',
          operator: 'like',
          value: '%nnn%'
        },
        {
          field: 'point',
          operator: '>',
          value: 2000
        }
      ]
    }
  }

  const fields = {
    login_id: {
      column: 'users.login_id',
      filterable: true
    },
    point: {
      column: 'users.point',
      filterable: false
    }
  }

  const result = knex('users')
    .metaQuery(query, fields)
    .toString()

  const expected = "select * from `users` where ((`users`.`login_id` like '%nnn%'))"

  expect(result).toBe(expected)
})

test('`should` should work properly (1)', () => {
  const query = {
    filter: {
      should: [
        {
          field: 'login_id',
          operator: 'like',
          value: '%nnn%'
        },
        {
          field: 'point',
          operator: '>',
          value: 2000
        }
      ]
    }
  }

  const fields = {
    login_id: {
      column: 'users.login_id',
      filterable: true
    },
    point: {
      column: 'users.point',
      filterable: true
    }
  }

  const result = knex('users')
    .metaQuery(query, fields)
    .toString()

  const expected = "select * from `users` where ((`users`.`login_id` like '%nnn%') or (`users`.`point` > 2000))"

  expect(result).toBe(expected)
})

test('`should` should work properly (2)', () => {
  const query = {
    filter: {
      should: [
        {
          field: 'login_id',
          operator: 'like',
          value: '%nnn%'
        },
        {
          field: 'point',
          operator: '>',
          value: 2000
        }
      ]
    }
  }

  const fields = {
    login_id: {
      column: 'users.login_id',
      filterable: false
    },
    point: {
      column: 'users.point',
      filterable: true
    }
  }

  const result = knex('users')
    .metaQuery(query, fields)
    .toString()

  const expected = 'select * from `users` where ((`users`.`point` > 2000))'

  expect(result).toBe(expected)
})

test('`should` should work properly (3)', () => {
  const query = {
    filter: {
      should: [
        {
          field: 'login_id',
          operator: 'like',
          value: '%nnn%'
        },
        {
          field: 'point',
          operator: '>',
          value: 2000
        }
      ]
    }
  }

  const fields = {
    login_id: {
      column: 'users.login_id',
      filterable: true
    },
    point: {
      column: 'users.point',
      filterable: false
    }
  }

  const result = knex('users')
    .metaQuery(query, fields)
    .toString()

  const expected = "select * from `users` where ((`users`.`login_id` like '%nnn%'))"

  expect(result).toBe(expected)
})

test('`should` && `must` should work properly (1)', () => {
  const query = {
    filter: {
      should: [
        {
          field: 'login_id',
          operator: 'like',
          value: '%nnn%'
        },
        {
          field: 'point',
          operator: '>',
          value: 2000
        }
      ],
      must: [
        {
          field: 'login_id',
          operator: 'like',
          value: '%nnn%'
        },
        {
          field: 'point',
          operator: '>',
          value: 2000
        }
      ]
    }
  }

  const fields = {
    login_id: {
      column: 'users.login_id',
      filterable: true
    },
    point: {
      column: 'users.point',
      filterable: true
    }
  }

  const result = knex('users')
    .metaQuery(query, fields)
    .toString()

  const expected = "select * from `users` where ((`users`.`login_id` like '%nnn%') and (`users`.`point` > 2000)) and ((`users`.`login_id` like '%nnn%') or (`users`.`point` > 2000))"

  expect(result).toBe(expected)
})

test('`should` && `must` should work properly (2)', () => {
  const query = {
    filter: {
      should: [
        {
          field: 'login_id',
          operator: 'like',
          value: '%nnn%'
        },
        {
          field: 'point',
          operator: '>',
          value: 2000
        }
      ],
      must: [
        {
          field: 'login_id',
          operator: 'like',
          value: '%nnn%'
        },
        {
          field: 'point',
          operator: '>',
          value: 2000
        }
      ]
    }
  }

  const fields = {
    login_id: {
      column: 'users.login_id',
      filterable: true
    },
    point: {
      column: 'users.point',
      filterable: false
    }
  }

  const result = knex('users')
    .metaQuery(query, fields)
    .toString()

  const expected = "select * from `users` where ((`users`.`login_id` like '%nnn%')) and ((`users`.`login_id` like '%nnn%'))"

  expect(result).toBe(expected)
})

test('`should` && `must` should work properly (3)', () => {
  const query = {
    filter: {
      must: [
        {
          field: 'login_id',
          operator: 'like',
          value: '%nnn%'
        },
        {
          field: 'point',
          operator: '>',
          value: 2000
        },
        {
          should: [
            {
              field: 'login_id',
              operator: 'like',
              value: '%nnn%'
            },
            {
              field: 'point',
              operator: '>',
              value: 2000
            }
          ]
        }
      ]
    }
  } as Query

  const fields = {
    login_id: {
      column: 'users.login_id',
      filterable: true
    },
    point: {
      column: 'users.point',
      filterable: true
    }
  }

  const result = knex('users')
    .metaQuery(query, fields)
    .toString()

  const expected = "select * from `users` where ((`users`.`login_id` like '%nnn%') and (`users`.`point` > 2000) and (((`users`.`login_id` like '%nnn%') or (`users`.`point` > 2000))))"

  expect(result).toBe(expected)
})

test('`should` && `must` should work properly (3)', () => {
  const query = {
    filter: {
      must: [
        {
          field: 'login_id',
          operator: 'like',
          value: '%nnn%'
        },
        {
          field: 'point',
          operator: '>',
          value: 2000
        },
        {
          should: [
            {
              field: 'login_id',
              operator: 'like',
              value: '%nnn%'
            },
            {
              field: 'point',
              operator: '>',
              value: 2000
            }
          ]
        }
      ] as FilterConditions[]
    }
  }

  const fields = {
    login_id: {
      column: 'users.login_id',
      filterable: true
    },
    point: {
      column: 'users.point',
      filterable: true
    }
  }

  const result = knex('users')
    .metaQuery(query, fields)
    .toString()

  const expected = "select * from `users` where ((`users`.`login_id` like '%nnn%') and (`users`.`point` > 2000) and (((`users`.`login_id` like '%nnn%') or (`users`.`point` > 2000))))"

  console.log(result)

  // expect(result).toBe(expected)
})
