<!-- This content is auto generated /scripts/writeUtilityDocs.ts  -->
# bulkUpdate


--------
### Demo
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
## Single data with multiple keys
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
  .bulkUpdate(['id', 'name'], updateData)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `age` = (
    CASE
      WHEN id = 1
      AND name = 'John' THEN 30
    END
  ),
  `address` = (
    CASE
      WHEN id = 1
      AND name = 'John' THEN 'Cebu'
    END
  )
WHERE
  (
    (
      id = 1
      AND name = 'John'
    )
  )
```
:::
## Multiple data
::: code-group
```js [Syntax]
const updateData = [
  {
    id: 1,
    name: 'John',
    age: 30,
    address: 'Cebu'
  },
  {
    id: 2,
    name: 'Mark',
    age: 25,
    address: 'Manila'
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
      WHEN id = 2 THEN 'Mark'
    END
  ),
  `age` = (
    CASE
      WHEN id = 1 THEN 30
      WHEN id = 2 THEN 25
    END
  ),
  `address` = (
    CASE
      WHEN id = 1 THEN 'Cebu'
      WHEN id = 2 THEN 'Manila'
    END
  )
WHERE
  (
    (id = 1)
    OR (id = 2)
  )
```
:::
## Multiple data with multiple keys
::: code-group
```js [Syntax]
const updateData = [
  {
    id: 1,
    name: 'John',
    age: 30,
    address: 'Cebu'
  },
  {
    id: 2,
    name: 'Mark',
    age: 25,
    address: 'Manila'
  }
]

const result = knex('users')
  .bulkUpdate(['id', 'name'], updateData)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `age` = (
    CASE
      WHEN id = 1
      AND name = 'John' THEN 30
      WHEN id = 2
      AND name = 'Mark' THEN 25
    END
  ),
  `address` = (
    CASE
      WHEN id = 1
      AND name = 'John' THEN 'Cebu'
      WHEN id = 2
      AND name = 'Mark' THEN 'Manila'
    END
  )
WHERE
  (
    (
      id = 1
      AND name = 'John'
    )
    OR (
      id = 2
      AND name = 'Mark'
    )
  )
```
:::
## Works with alias
::: code-group
```js [Syntax]
const updateData = [
  {
    id: 1,
    name: 'John',
    age: 30,
    address: 'Cebu'
  },
  {
    id: 2,
    name: 'Mark',
    age: 25,
    address: 'Manila'
  }
]

const updateOptions = {
  alias: {
    name: 'users.name',
    age: 'users.age'
  }
}

const result = knex('users')
  .bulkUpdate(['id', 'name'], updateData, updateOptions)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `users`.`age` = (
    CASE
      WHEN id = 1
      AND users.name = 'John' THEN 30
      WHEN id = 2
      AND users.name = 'Mark' THEN 25
    END
  ),
  `address` = (
    CASE
      WHEN id = 1
      AND users.name = 'John' THEN 'Cebu'
      WHEN id = 2
      AND users.name = 'Mark' THEN 'Manila'
    END
  )
WHERE
  (
    (
      id = 1
      AND users.name = 'John'
    )
    OR (
      id = 2
      AND users.name = 'Mark'
    )
  )
```
:::
## Works with else
::: code-group
```js [Syntax]
const updateData = [
  {
    id: 1,
    name: 'John',
    age: 30,
    address: 'Cebu'
  },
  {
    id: 2,
    name: 'Mark',
    age: 25,
    address: 'Manila'
  }
]

const updateOptions = {
  else: {
    age: knex.client.raw('users.age')
  }
}

const result = knex('users')
  .bulkUpdate(['id', 'name'], updateData, updateOptions)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `age` = (
    CASE
      WHEN id = 1
      AND name = 'John' THEN 30
      WHEN id = 2
      AND name = 'Mark' THEN 25
      ELSE users.age
    END
  ),
  `address` = (
    CASE
      WHEN id = 1
      AND name = 'John' THEN 'Cebu'
      WHEN id = 2
      AND name = 'Mark' THEN 'Manila'
    END
  )
WHERE
  (
    (
      id = 1
      AND name = 'John'
    )
    OR (
      id = 2
      AND name = 'Mark'
    )
  )
```
:::