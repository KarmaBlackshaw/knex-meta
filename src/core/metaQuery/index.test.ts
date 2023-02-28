// <reference path="../../@types/meta.d.ts" />

import { expect, test } from 'vitest'

import knex from '../../connection'

test('`$and` should work properly (1)', () => {
  const query = {
    filter: {
      $and: [
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

test('`$and` should work properly (2)', () => {
  const query = {
    filter: {
      $and: [
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

test('`$and` should work properly (3)', () => {
  const query = {
    filter: {
      $and: [
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

test('`$or` should work properly (1)', () => {
  const query = {
    filter: {
      $or: [
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

test('`$or` should work properly (2)', () => {
  const query = {
    filter: {
      $or: [
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

test('`$or` should work properly (3)', () => {
  const query = {
    filter: {
      $or: [
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

test('`$or` && `$and` should work properly (1)', () => {
  const query = {
    filter: {
      $or: [
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
      $and: [
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

test('`$or` && `$and` should work properly (2)', () => {
  const query = {
    filter: {
      $or: [
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
      $and: [
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

test('`$or` && `$and` should work properly (3)', () => {
  const query = {
    filter: {
      $and: [
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
          $or: [
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

test('`$or` && `$and` $or work properly (4)', () => {
  const query = {
    filter: {
      $and: [
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
          $or: [
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
      ],
      $or: [
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
          $and: [
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

  const expected = "select * from `users` where ((`users`.`login_id` like '%nnn%') and (`users`.`point` > 2000) and (((`users`.`login_id` like '%nnn%') or (`users`.`point` > 2000)))) and ((`users`.`login_id` like '%nnn%') or (`users`.`point` > 2000) or (((`users`.`login_id` like '%nnn%') and (`users`.`point` > 2000))))"

  expect(result).toBe(expected)
})

test('$or sort properly', () => {
  const query = {
    filter: {
      $and: [
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
          $or: [
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
      ],
      $or: [
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
          $and: [
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
    },
    sort: [
      {
        field: 'login_id',
        direction: 'desc'
      },
      {
        field: 'point',
        direction: 'desc'
      }
    ]
  } as Query

  const fields = {
    login_id: {
      column: 'users.login_id',
      filterable: true,
      sortable: true
    },
    point: {
      column: 'users.point',
      filterable: true,
      sortable: true
    }
  }

  const result = knex('users')
    .metaQuery(query, fields)
    .toString()

  const expected = "select * from `users` where ((`users`.`login_id` like '%nnn%') and (`users`.`point` > 2000) and (((`users`.`login_id` like '%nnn%') or (`users`.`point` > 2000)))) and ((`users`.`login_id` like '%nnn%') or (`users`.`point` > 2000) or (((`users`.`login_id` like '%nnn%') and (`users`.`point` > 2000)))) order by `users`.`login_id` desc, `users`.`point` desc"

  expect(result).toBe(expected)
})

test('$or paginate properly', () => {
  const query = {
    filter: {
      $and: [
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
          $or: [
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
      ],
      $or: [
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
          $and: [
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
    },
    sort: [
      {
        field: 'login_id',
        direction: 'desc'
      },
      {
        field: 'point',
        direction: 'desc'
      }
    ],
    pagination: {
      rows: 50,
      page: 2
    }
  } as Query

  const fields = {
    login_id: {
      column: 'users.login_id',
      filterable: true,
      sortable: true
    },
    point: {
      column: 'users.point',
      filterable: true,
      sortable: true
    }
  }

  const result = knex('users')
    .metaQuery(query, fields)
    .toString()

  const expected = "select * from `users` where ((`users`.`login_id` like '%nnn%') and (`users`.`point` > 2000) and (((`users`.`login_id` like '%nnn%') or (`users`.`point` > 2000)))) and ((`users`.`login_id` like '%nnn%') or (`users`.`point` > 2000) or (((`users`.`login_id` like '%nnn%') and (`users`.`point` > 2000)))) order by `users`.`login_id` desc, `users`.`point` desc limit 50 offset 50"

  expect(result).toBe(expected)
})

test('`$not` should work properly (1)', () => {
  const query = {
    filter: {
      $not: [
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

  const expected = "select * from `users` where (not (`users`.`login_id` like '%nnn%') and not (`users`.`point` > 2000))"

  expect(result).toBe(expected)
})

test('`$not` should work properly (2)', () => {
  const query = {
    filter: {
      $not: [
        {
          $and: [
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

  const expected = "select * from `users` where (not (((`users`.`login_id` like '%nnn%') and (`users`.`point` > 2000))))"

  expect(result).toBe(expected)
})

test('`$not` should work properly (3)', () => {
  const query = {
    filter: {
      $not: [
        {
          $or: [
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

  const expected = "select * from `users` where (not (((`users`.`login_id` like '%nnn%') or (`users`.`point` > 2000))))"

  expect(result).toBe(expected)
})

test('`$not` should work properly (4)', () => {
  const query = {
    filter: {
      $not: [
        {
          $or: [
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
          $and: [
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

  const expected = "select * from `users` where (not (((`users`.`login_id` like '%nnn%') and (`users`.`point` > 2000)) and ((`users`.`login_id` like '%nnn%') or (`users`.`point` > 2000))))"

  expect(result).toBe(expected)
})
