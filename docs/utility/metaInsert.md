<!-- This content is auto generated /scripts/writeUtilityDocs.ts  -->
# metaInsert

A simple wrapper for bulk insert. This checks for valid fields and accepts array or object.


--------


### Demo
## Simple insert
::: code-group
```js [Syntax]
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
```
```sql [Output]
INSERT INTO
  `users` (`name`)
VALUES
  ('Jeash')
```
:::
## Simple insert with multiple payload
::: code-group
```js [Syntax]
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
```
```sql [Output]
INSERT INTO
  `users` (`name`)
VALUES
  ('Jeash'),
  ('Ernie')
```
:::
## Undefined values will default to `DEFAULT`
::: code-group
```js [Syntax]
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
```
```sql [Output]
INSERT INTO
  `users` (`name`)
VALUES
  ('Jeash'),
  (DEFAULT)
```
:::
## Transforms JSON fields
::: code-group
```js [Syntax]
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
```
```sql [Output]
INSERT INTO
  `users` (`age`, `name`, `settings`)
VALUES
  (DEFAULT, 'Jeash', '{\"percentage\":12}'),
  ('52', 'Josh', DEFAULT)
```
:::