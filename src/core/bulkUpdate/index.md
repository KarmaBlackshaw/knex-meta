# bulkUpdate

Bulk update by passing an array

## Usage

### Use with array of multiple refs

::: code-group

```js [index.js]
const updateData = [
  {
    id: 1,
    name: 'John',
    age: 30,
    address: 'Cebu'
  }
]

await knex('users')
  .bulkUpdate('id', updateData)
```

```sql [output.sql]
UPDATE
  `users`
SET
  `name` = (
    CASE
      WHEN id = 1
      THEN 'John'
    END),
  `age` = (
    CASE
      WHEN id = 1
      THEN 30
    END),
  `address` = (
    CASE
      WHEN id = 1
      THEN 'Cebu'
    END)
WHERE ((id = 1))
```
:::
