## Should perform simple update


::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name'
}

const payload = {
  name: 'Jeash'
}

const result = knex('users')
  .where('users.id', 1)
  .metaUpdate(payload, dictionary)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `users`.`name` = 'Jeash'
WHERE
  `users`.`id` = 1
```
:::
## Should not include keys not in the dictionary


::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name'
}

const payload = {
  name: 'Jeash',
  age: 12
}

const result = knex('users')
  .where('users.id', 1)
  .metaUpdate(payload, dictionary)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `users`.`name` = 'Jeash'
WHERE
  `users`.`id` = 1
```
:::
## Should not include undefined values


::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name',
  age: 'users.age'
}

const payload = {
  name: 'Jeash',
  age: undefined
}

const result = knex('users')
  .where('users.id', 1)
  .metaUpdate(payload, dictionary)
  .toString()
```
```sql [Output]
UPDATE `users`
SET
  `users`.`name` = 'Jeash'
WHERE
  `users`.`id` = 1
```
:::