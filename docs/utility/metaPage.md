<!-- This content is auto generated /scripts/writeUtilityDocs.ts  -->
# metaPage

::: warning
This will no longer receive updates in favor of [`metaQuery`](/utility/metaQuery)
:::


--------


### Demo
## Test 1
::: code-group
```js [Syntax]
const result = knex('users')
  .metaPage({ page: 1, rows: 3, isCount: 0 })
  .toString()
```
```sql [Output]
const expected = 'select * from `users` limit 3'
```
:::
## Test 2
::: code-group
```js [Syntax]
const result = knex('users')
  .metaPage({ page: 1, rows: 3, isCount: 1 })
  .toString()
```
```sql [Output]
const expected = 'select * from `users`'
```
:::
## Test 3
::: code-group
```js [Syntax]
const result = knex('users')
  .metaPage({ page: 2, rows: 3, isCount: 0 })
  .toString()
```
```sql [Output]
const expected = 'select * from `users` limit 3 offset 3'
```
:::