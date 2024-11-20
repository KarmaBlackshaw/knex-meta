<!-- This content is auto generated /scripts/writeUtilityDocs.ts  -->
# jsonObject

A simple wrapper for mysql's [JSON_OBJECT](https://dev.mysql.com/doc/refman/8.0/en/json-creation-functions.html#function_json-object). This also allows nested object with a user-friendly syntax


--------


### Demo
## Simple json object
::: code-group
```js [Syntax]
const result = knex('users')
  .select({
    users: knex.jsonObject({
      id: 'users.id'
    })
  })
  .toString()
```
```sql [Output]
const expected = 'select JSON_OBJECT("id", users.id) as `users` from `users`'
```
:::
## Simple json object with two properties
::: code-group
```js [Syntax]
const result = knex('users')
  .select({
    users: knex.jsonObject({
      id: 'users.id',
      name: 'users.name'
    })
  })
  .toString()
```
```sql [Output]
const expected = 'select JSON_OBJECT("id", users.id, "name", users.name) as `users` from `users`'
```
:::
## Nested json object
::: code-group
```js [Syntax]
const result = knex('users')
  .select({
    users: knex.jsonObject({
      id: 'users.id',
      name: 'users.name',
      parents: knex.jsonObject({
        id: 'parents.id',
        name: 'parents.name'
      })
    })
  })
  .toString()
```
```sql [Output]
const expected = 'select JSON_OBJECT("id", users.id, "name", users.name, "parents", JSON_OBJECT("id", parents.id, "name", parents.name)) as `users` from `users`'
```
:::