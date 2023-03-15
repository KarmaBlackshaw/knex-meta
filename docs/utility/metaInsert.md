<!-- This content is auto generated /scripts/writeUtilityDocs.ts  -->
# metaInsert


--------
### Demo
## Should perform simple insert
::: code-group
```js [Syntax]
const fillables = [
  'name'
]

const payload = {
  name: 'Jeash'
}

const result = knex('users')
  .metaInsert(payload, fillables)
  .toString()
```
```sql [Output]
INSERT INTO
  `users` (`name`)
VALUES
  ('Jeash')
```
:::
## Should perform simple array insert
::: code-group
```js [Syntax]
const fillables = [
  'name'
]

const payload = [
  {
    name: 'Jeash'
  },
  {
    name: 'Ernie'
  }
]

const result = knex('users')
  .metaInsert(payload, fillables)
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
## Should set undefined values to DEFAULT
::: code-group
```js [Syntax]
const fillables = [
  'name'
]

const payload = [
  {
    name: 'Jeash'
  },
  {
    name: undefined
  }
]

const result = knex('users')
  .metaInsert(payload, fillables)
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
## Should set undefined values to DEFAULT
::: code-group
```js [Syntax]
const fillables = [
  'name',
  'age'
]

const payload = [
  {
    name: 'Jeash',
    age: '12'
  },
  {
    name: undefined,
    age: '52'
  }
]

const result = knex('users')
  .metaInsert(payload, fillables)
  .toString()
```
```sql [Output]
INSERT INTO
  `users` (`age`, `name`)
VALUES
  ('12', 'Jeash'),
  ('52', DEFAULT)
```
:::