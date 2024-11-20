<!-- This content is auto generated /scripts/writeUtilityDocs.ts  -->
# metaFilter

::: warning
This will no longer receive updates in favor of [`metaQuery`](/utility/metaQuery)
:::


--------


### Demo
## Should have correct simple search output
::: code-group
```js [Syntax]
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
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  `users`.`name` LIKE '%john%'
```
:::
## Should ignore if "q" is missing
::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name'
}

const result = knex('users')
  .metaFilter({
    filterBy: 'name',
    dictionary
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users`'
```
:::
## Should ignore if "filterBy" is missing
::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name'
}

const result = knex('users')
  .metaFilter({
    q: 'john',
    dictionary
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users`'
```
:::
## If string "q" and string "filterBy" and dictionary property is array
::: code-group
```js [Syntax]
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
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  (
    `users`.`fname` LIKE '%john%'
    OR `users`.`lname` LIKE '%john%'
  )
```
:::
## If array "q" and array "filterBy"
::: code-group
```js [Syntax]
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
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  (
    (
      `users`.`fname` LIKE '%john%'
      OR `users`.`lname` LIKE '%john%'
    )
    AND `users`.`address` LIKE '%lahug%'
  )
```
:::
## If string "q" and array "filterBy"
::: code-group
```js [Syntax]
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
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  (
    (
      `users`.`fname` LIKE '%john%'
      OR `users`.`lname` LIKE '%john%'
    )
    OR `users`.`address` LIKE '%john%'
  )
```
:::
## If array "q" and string "filterBy"
::: code-group
```js [Syntax]
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
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  (
    `users`.`fname` LIKE '%john%'
    OR `users`.`fname` LIKE '%paul%'
  )
```
:::
## Exact match should work properly
::: code-group
```js [Syntax]
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
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  (
    `users`.`fname` LIKE 'john'
    OR `users`.`fname` LIKE '%paul%'
  )
```
:::
## Search Items should work
::: code-group
```js [Syntax]
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
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  (
    (
      `users`.`fname` LIKE '%John%'
      AND `users`.`address` LIKE '%Cebu%'
    )
    OR (
      `users`.`fname` LIKE '%Johnny%'
      AND `users`.`address` LIKE '%Palo%'
    )
  )
```
:::