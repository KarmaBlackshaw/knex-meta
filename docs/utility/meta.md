<!-- This content is auto generated /scripts/writeUtilityDocs.ts  -->
# meta


--------
### Demo
## Date meta functions correctly
::: code-group
```js [Syntax]
const dictionary = {
  birthdate: 'users.birthdate'
}

const result = knex('users')
  .meta({
    dateBy: 'birthdate',
    dateFrom: '1998-07-29',
    dateTo: '1998-07-29',
    dateDictionary: dictionary
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
## Page meta functions correctly
::: code-group
```js [Syntax]
const result = knex('users')
  .meta({
    page: 3,
    rows: 50
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users` limit 50 offset 100'
```
:::
## Sort meta functions correctly
::: code-group
```js [Syntax]
const dictionary = {
  birthdate: 'users.birthdate'
}

const result = knex('users')
  .meta({
    sort: 'asc',
    sortBy: 'birthdate',
    sortDictionary: dictionary
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users` order by `users`.`birthdate` asc'
```
:::
## Filter meta functions correctly
::: code-group
```js [Syntax]
const dictionary = {
  birthdate: 'users.birthdate'
}

const result = knex('users')
  .meta({
    filterBy: 'birthdate',
    q: 'july',
    filterDictionary: dictionary
  })
  .toString()
```
```sql [Output]
SELECT
  *
FROM
  `users`
WHERE
  `users`.`birthdate` LIKE '%july%'
```
:::
## All meta functions correctly
::: code-group
```js [Syntax]
const dictionary = {
  birthdate: 'users.birthdate'
}

const result = knex('users')
  .meta({
    dateBy: 'birthdate',
    dateFrom: '1998-07-29',
    dateTo: '1998-07-29',
    dateDictionary: dictionary,

    page: 3,
    rows: 50,
    isCount: false,

    sort: 'asc',
    sortBy: 'birthdate',
    sortDictionary: dictionary,

    filterBy: 'birthdate',
    q: 'july',
    filterDictionary: dictionary
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
  AND `users`.`birthdate` LIKE '%july%'
ORDER BY
  `users`.`birthdate` asc
LIMIT
  50
OFFSET
  100
```
:::