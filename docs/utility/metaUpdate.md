<!-- This content is auto generated /scripts/writeUtilityDocs.ts  -->
# metaUpdate

A powerful function that allows you to easily update multiple fields using an object payload or multiple data updates. You can specify the fields you want to update and their corresponding table columns, and even add an else condition for when a specific key is not found. It also supports updating multiple keys at once for more complex updates.


--------


### Demo
## Update with an object payload
::: code-group
```js [Syntax]
const updateData = {
  id: 1,
  name: 'John',
  username: 30
}

const options = {
  fields: {
    id: 'users.id',
    name: 'users.name',
    username: 'users.username'
  }
}

const result = knex('users')
  .metaUpdate('id', updateData, options)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `name` = CASE
    WHEN (`users`.`id` = 1) THEN 'John'
  END,
  `username` = CASE
    WHEN (`users`.`id` = 1) THEN 30
  END
WHERE
  ((`users`.`id` = 1))
```
:::
## Update with an object payload and else condition
::: code-group
```js [Syntax]
const updateData = {
  id: 1,
  name: 'John',
  username: 30
}

const options = {
  fields: {
    id: 'users.id',
    name: 'users.name',
    username: 'users.username'
  },
  else: {
    name: 'foo'
  }
}

const result = knex('users')
  .metaUpdate('id', updateData, options)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `name` = CASE
    WHEN (`users`.`id` = 1) THEN 'John'
    ELSE 'foo'
  END,
  `username` = CASE
    WHEN (`users`.`id` = 1) THEN 30
  END
WHERE
  ((`users`.`id` = 1))
```
:::
## Update with an object whose key does not exist in the fields
::: code-group
```js [Syntax]
const updateData = {
  id: 1,
  name: 'John',
  username: 30
}

const options = {
  fields: {
    id: 'users.id',
    name: 'users.name'
  }
}

const result = knex('users')
  .metaUpdate('id', updateData, options)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `name` = CASE
    WHEN (`users`.`id` = 1) THEN 'John'
  END
WHERE
  ((`users`.`id` = 1))
```
:::
## Update with multiple data
::: code-group
```js [Syntax]
const updateData = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Mark'
  }
]

const options = {
  fields: {
    id: 'users.id',
    name: 'users.name'
  }
}

const result = knex('users')
  .metaUpdate('id', updateData, options)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `name` = CASE
    WHEN (`users`.`id` = 1) THEN 'John'
    WHEN (`users`.`id` = 2) THEN 'Mark'
  END
WHERE
  (
    (`users`.`id` = 1)
    OR (`users`.`id` = 2)
  )
```
:::
## Update with multiple keys
::: code-group
```js [Syntax]
const updateData = [
  {
    id: 1,
    name: 'John',
    balance: 30
  },
  {
    id: 2,
    name: 'Mark',
    balance: 25
  }
]

const options = {
  fields: {
    id: 'users.id',
    name: 'users.name',
    balance: 'users.balance'
  }
}

const result = knex('users')
  .metaUpdate(['id', 'name'], updateData, options)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `balance` = CASE
    WHEN (
      `users`.`id` = 1
      AND `users`.`name` = 'John'
    ) THEN 30
    WHEN (
      `users`.`id` = 2
      AND `users`.`name` = 'Mark'
    ) THEN 25
  END
WHERE
  (
    (
      `users`.`id` = 1
      AND `users`.`name` = 'John'
    )
    OR (
      `users`.`id` = 2
      AND `users`.`name` = 'Mark'
    )
  )
```
:::
## Update with json fields
::: code-group
```js [Syntax]
const updateData = [
  {
    id: 1,
    name: 'John',
    settings: { background_color: 'red' }
  },
  {
    id: 2,
    name: 'Mark',
    settings: { background_color: 'yellow' }
  }
]

const options = {
  fields: {
    id: 'users.id',
    name: 'users.name',
    settings: 'users.settings'
  }
}

const result = knex('users')
  .metaUpdate(['id', 'name'], updateData, options)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `settings` = CASE
    WHEN (
      `users`.`id` = 1
      AND `users`.`name` = 'John'
    ) THEN '{\"background_color\":\"red\"}'
    WHEN (
      `users`.`id` = 2
      AND `users`.`name` = 'Mark'
    ) THEN '{\"background_color\":\"yellow\"}'
  END
WHERE
  (
    (
      `users`.`id` = 1
      AND `users`.`name` = 'John'
    )
    OR (
      `users`.`id` = 2
      AND `users`.`name` = 'Mark'
    )
  )
```
:::
## Update with raw data
::: code-group
```js [Syntax]
const updateData = [
  {
    id: 1,
    name: { raw: 'users.name + users.id' }
  },
  {
    id: 2,
    name: 'Mark'
  }
]

const options = {
  fields: {
    id: 'users.id',
    name: 'users.name',
    settings: 'users.settings'
  }
}

const result = knex('users')
  .metaUpdate('id', updateData, options)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `name` = CASE
    WHEN (`users`.`id` = 1) THEN users.name + users.id
    WHEN (`users`.`id` = 2) THEN 'Mark'
  END
WHERE
  (
    (`users`.`id` = 1)
    OR (`users`.`id` = 2)
  )
```
:::
## Support array condition
::: code-group
```js [Syntax]
const updateData = [
  {
    id: [1, 2, 3, 4, 5],
    name: 'Foo'
  }
]

const options = {
  fields: {
    id: 'users.id',
    name: 'users.name',
    settings: 'users.settings'
  }
}

const result = knex('users')
  .metaUpdate('id', updateData, options)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `name` = CASE
    WHEN (`users`.`id` IN (1, 2, 3, 4, 5)) THEN 'Foo'
  END
WHERE
  ((`users`.`id` IN (1, 2, 3, 4, 5)))
```
:::