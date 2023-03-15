## Single data


::: code-group
```js [Syntax]
const updateData = [
  {
    id: 1,
    name: 'John',
    age: 30,
    address: 'Cebu'
  }
]

const result = knex('users')
  .bulkUpdate('id', updateData)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `name` = (
    CASE
      WHEN id = 1 THEN 'John'
    END
  ),
  `age` = (
    CASE
      WHEN id = 1 THEN 30
    END
  ),
  `address` = (
    CASE
      WHEN id = 1 THEN 'Cebu'
    END
  )
WHERE
  ((id = 1))
```
:::
## Single data


::: code-group
```js [Syntax]
const updateData = [
  {
    id: 1,
    name: 'John',
    age: 30,
    address: 'Cebu'
  }
]

const result = knex('users')
  .bulkUpdate('id', updateData)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `name` = (
    CASE
      WHEN id = 1 THEN 'John'
    END
  ),
  `age` = (
    CASE
      WHEN id = 1 THEN 30
    END
  ),
  `address` = (
    CASE
      WHEN id = 1 THEN 'Cebu'
    END
  )
WHERE
  ((id = 1))
```
:::