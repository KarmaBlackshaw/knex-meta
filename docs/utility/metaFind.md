<!-- This content is auto generated /scripts/writeUtilityDocs.ts  -->
# metaFind
--------
::: warning
This will no longer receive updates in favor of [`metaQuery`](/utility/metaQuery)
:::
--------
### Demo
## Should perform simple find
::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name',
  status: 'users.status'
}

const condition = {
  name: 'Jeash',
  status: 'banned'
}

const result = knex('users')
  .metaFind(condition, dictionary)
  .toString()
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  `users`.`name` = 'Jeash'
  AND `users`.`status` = 'banned'
LIMIT
  1
```
:::
## Should ignore items not in dictionary
::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name',
  status: 'users.status'
}

const condition = {
  name: 'Jeash'
}

const result = knex('users')
  .metaFind(condition, dictionary)
  .toString()
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  `users`.`name` = 'Jeash'
LIMIT
  1
```
:::