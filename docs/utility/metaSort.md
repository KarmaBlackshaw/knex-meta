<!-- This content is auto generated /scripts/writeUtilityDocs.ts  -->
# metaSort
--------
::: warning
This will no longer receive updates in favor of [`metaQuery`](/utility/metaQuery)
:::
--------
### Demo
## Should perform simple sort
::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name'
}

const result = knex('users')
  .metaSort({
    sort: 'asc',
    sortBy: 'name',
    dictionary,
    isCount: false
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users` order by `users`.`name` asc'
```
:::
## Ignores sort if dictionary is empty
::: code-group
```js [Syntax]
const dictionary = {
}

const result = knex('users')
  .metaSort({
    sort: 'asc',
    sortBy: 'name',
    dictionary,
    isCount: false
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users`'
```
:::
## Ignores sort if "sort" is empty
::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name'
}

const result = knex('users')
  .metaSort({
    sortBy: 'name',
    dictionary,
    isCount: false
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users`'
```
:::
## Ignores sort if "sortBy" is empty
::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name'
}

const result = knex('users')
  .metaSort({
    sort: 'asc',
    dictionary,
    isCount: false
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users`'
```
:::
## Ignores sort if isCount is true
::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name'
}

const result = knex('users')
  .metaSort({
    sort: 'asc',
    sortBy: 'name',
    dictionary,
    isCount: true
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users`'
```
:::
## Ignores sort if isCount is true
::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name'
}

const result = knex('users')
  .metaSort({
    sort: 'asc',
    sortBy: 'name',
    dictionary,
    isCount: true
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users`'
```
:::
## Ignores sort array if isCount is true
::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name',
  place: 'users.place'
}

const result = knex('users')
  .metaSort({
    sort: ['asc', 'desc'],
    sortBy: ['name', 'place'],
    dictionary,
    isCount: true
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users`'
```
:::
## Ignores sort if "sort" is not valid keyword
::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name'
}

const result = knex('users')
  .metaSort({
    sort: 'ascasd',
    sortBy: 'name',
    dictionary,
    isCount: false
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users`'
```
:::
## Ignores sort if "sort" is not valid keyword
::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name'
}

const result = knex('users')
  .metaSort({
    sort: ['ascasd'],
    sortBy: ['name'],
    dictionary,
    isCount: false
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users`'
```
:::
## Should perform array sort
::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name',
  place: 'users.place'
}

const result = knex('users')
  .metaSort({
    sort: ['asc', 'desc'],
    sortBy: ['name', 'place'],
    dictionary,
    isCount: false
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users` order by `users`.`name` asc, `users`.`place` desc'
```
:::
## Should ignore if "sort" and "sortBy" data size is not the same
::: code-group
```js [Syntax]
const dictionary = {
  name: 'users.name',
  place: 'users.place'
}

const result = knex('users')
  .metaSort({
    sort: ['asc'],
    sortBy: ['name', 'place'],
    dictionary,
    isCount: false
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users`'
```
:::
## Should ignore if "sort" and "sortBy" data size is not the same
::: code-group
```js [Syntax]
const dictionary = {
  name: ['users.name', 'users.created_at']
}

const result = knex('users')
  .metaSort({
    sort: 'desc',
    sortBy: 'name',
    dictionary,
    isCount: false
  })
  .toString()
```
```sql [Output]
const expected = 'select * from `users` order by `users`.`name` desc, `users`.`created_at` desc'
```
:::