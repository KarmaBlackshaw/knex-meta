<!-- This content is auto generated /scripts/writeUtilityDocs.ts  -->
# metaDate


--------
### Demo
## Adds startOf day and endOf day if time is not present
::: code-group
```js [Syntax]
const dictionary = {
  birthdate: 'users.birthdate'
}

const result = knex('users')
  .metaDate({
    dateBy: 'birthdate',
    dateFrom: '1998-07-29',
    dateTo: '1998-07-29',
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
  `users`.`birthdate` >= '1998-07-29 00:00:00'
  AND `users`.`birthdate` <= '1998-07-29 23:59:59'
```
:::
## Ignores if dateFrom is empty
::: code-group
```js [Syntax]
const dictionary = {
  birthdate: 'users.birthdate'
}

const result = knex('users')
  .metaDate({
    dateBy: 'birthdate',
    dateTo: '1998-07-29',
    dictionary
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users`'
```
:::
## Works correctly with time
::: code-group
```js [Syntax]
const dictionary = {
  birthdate: 'users.birthdate'
}

const result = knex('users')
  .metaDate({
    dateBy: 'birthdate',
    dateTo: '1998-07-29 10:22:30',
    dateFrom: '1998-07-29 11:22:30',
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
  `users`.`birthdate` >= '1998-07-29 11:22:30'
  AND `users`.`birthdate` <= '1998-07-29 10:22:30'
```
:::
## Works correctly with time
::: code-group
```js [Syntax]
const dictionary = {
  birthdate: 'users.birthdate',
  created_at: 'users.created_at'
}

const result = knex('users')
  .metaDate({
    dateBy: ['birthdate', 'created_at'],
    dateTo: ['1998-07-29 10:22:30', '1998-07-29 10:22:30'],
    dateFrom: ['1998-07-29 10:22:30', '1998-07-29 10:22:30'],
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
  `users`.`birthdate` >= '1998-07-29 10:22:30'
  AND `users`.`birthdate` <= '1998-07-29 10:22:30'
  AND `users`.`created_at` >= '1998-07-29 10:22:30'
  AND `users`.`created_at` <= '1998-07-29 10:22:30'
```
:::