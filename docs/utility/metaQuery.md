<!-- This content is auto generated /scripts/writeUtilityDocs.ts  -->
# metaQuery

### Valid Operators
- `=` Equals _(default)_
- `<` Less than
- `<=` Less than or equal
- `>` Greater than
- `>=` Greater than or equal
- `like` Like
- `between` Between
- `not between` Not Between
- `in` In
  - `value` is expected to be an array
- `not in` Equals
  - `value` is expected to be an array
- `null` Equals
- `not null` Equals
- `not` Equals

### Valid filter fields
- `$and`
- `$or`
- `$not`


--------


### Demo
## `$and` filter
::: code-group
```js [Syntax]
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
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  (
    (`users`.`login_id` LIKE '%nnn%')
    AND (`users`.`point` > 2000)
  )
```
:::
## `$and` filter with falsy `filterable` attribute
::: code-group
```js [Syntax]
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
```
```sql [Output]
const expected = 'select * from `users` where ((`users`.`point` > 2000))'
```
:::
## `$or` filter
::: code-group
```js [Syntax]
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
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  (
    (`users`.`login_id` LIKE '%nnn%')
    OR (`users`.`point` > 2000)
  )
```
:::
## `$or` filter with falsy `filterable` attribute
::: code-group
```js [Syntax]
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
```
```sql [Output]
const expected = 'select * from `users` where ((`users`.`point` > 2000))'
```
:::
## `$not` filter
::: code-group
```js [Syntax]
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
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  (
    NOT (`users`.`login_id` LIKE '%nnn%')
    AND NOT (`users`.`point` > 2000)
  )
```
:::
## `$not` filter with falsy `filterable` attribute
::: code-group
```js [Syntax]
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
    filterable: false
  }
}

const result = knex('users')
  .metaQuery(query, fields)
  .toString()
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  (NOT (`users`.`login_id` LIKE '%nnn%'))
```
:::
## `$or` && `$and` && `$not` filter
::: code-group
```js [Syntax]
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
    ],
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
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  (
    (`users`.`login_id` LIKE '%nnn%')
    AND (`users`.`point` > 2000)
  )
  AND (
    (`users`.`login_id` LIKE '%nnn%')
    OR (`users`.`point` > 2000)
  )
  AND (
    NOT (`users`.`login_id` LIKE '%nnn%')
    AND NOT (`users`.`point` > 2000)
  )
```
:::
## `$or` && `$and` nested filter
::: code-group
```js [Syntax]
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
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  (
    (`users`.`login_id` LIKE '%nnn%')
    AND (`users`.`point` > 2000)
    AND (
      (
        (`users`.`login_id` LIKE '%nnn%')
        OR (`users`.`point` > 2000)
      )
    )
  )
  AND (
    (`users`.`login_id` LIKE '%nnn%')
    OR (`users`.`point` > 2000)
    OR (
      (
        (`users`.`login_id` LIKE '%nnn%')
        AND (`users`.`point` > 2000)
      )
    )
  )
```
:::
## Filter with sort
::: code-group
```js [Syntax]
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
}

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
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  (
    (`users`.`login_id` LIKE '%nnn%')
    AND (`users`.`point` > 2000)
    AND (
      (
        (`users`.`login_id` LIKE '%nnn%')
        OR (`users`.`point` > 2000)
      )
    )
  )
  AND (
    (`users`.`login_id` LIKE '%nnn%')
    OR (`users`.`point` > 2000)
    OR (
      (
        (`users`.`login_id` LIKE '%nnn%')
        AND (`users`.`point` > 2000)
      )
    )
  )
ORDER BY
  `users`.`login_id` desc,
  `users`.`point` desc
```
:::
## Filter with pagination
::: code-group
```js [Syntax]
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
}

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
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  (
    (`users`.`login_id` LIKE '%nnn%')
    AND (`users`.`point` > 2000)
    AND (
      (
        (`users`.`login_id` LIKE '%nnn%')
        OR (`users`.`point` > 2000)
      )
    )
  )
  AND (
    (`users`.`login_id` LIKE '%nnn%')
    OR (`users`.`point` > 2000)
    OR (
      (
        (`users`.`login_id` LIKE '%nnn%')
        AND (`users`.`point` > 2000)
      )
    )
  )
ORDER BY
  `users`.`login_id` desc,
  `users`.`point` desc
LIMIT
  50
OFFSET
  50
```
:::