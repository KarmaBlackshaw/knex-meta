# [knex.js](https://knex.github.io/documentation/)

![visitors](https://visitor-badge.glitch.me/badge?page_id=karmablackshaw.knex-meta)
[![GitHub Karmablackshaw](https://img.shields.io/github/last-commit/karmablackshaw/knex-meta?label=Last+Commit)](https://github.com/karmablackshaw)
[![GitHub Karmablackshaw](https://img.shields.io/github/commit-activity/m/karmablackshaw/knex-meta?color=orange&label=Average+Commits)](https://github.com/karmablackshaw)
[![GitHub Karmablackshaw](https://img.shields.io/github/last-commit/karmablackshaw/knex-meta?label=Last+Commit)](https://github.com/karmablackshaw)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

Useful extensions for knex query builder

## About The Project

### Built With

* [Typescript](https://www.typescriptlang.org/)
* [Vitest](https://vitest.dev/)

## Usage

### Extend
```js
const knex = require('knex')
const knexMeta = require('@jeash/knex-meta')

const extensions = [
  knexMeta.metaDate,
  knexMeta.metaFilter,
  knexMeta.metaPage,
  knexMeta.metaSort,
  knexMeta.meta,
  knexMeta.bulkUpdate,
  knexMeta.jsonObject,
  knexMeta.metaUpdate,
  knexMeta.metaInsert
]

extensions.forEach(extension => {
  knex.QueryBuilder.extend(extension.name, extension)
})
```

### Meta Date
Simple date filter
```js
const dictionary = {
  birthdate: 'users.birthdate'
}

const result = knex('users')
  .metaDate({
    dateBy: 'birthdate',
    dateFrom: '07-29-1998',
    dateTo: '07-29-1998',
    dictionary
  })

```
----

### Meta Page
Simple implementation of limit offset
```js
const result = knex('users')
  .metaPage({ page: 1, rows: 3 })

```
----
### Meta Sort
Simple sort
```js
const dictionary = {
  name: 'users.name',
}

const result = knex('users')
  .metaSort({
    sort: 'asc',
    sortBy: 'name',
    dictionary
  })
```

Multiple sort
```js
const dictionary = {
  name: 'users.name',
  age: 'users.age'
}

const result = knex('users')
  .metaSort({
    sort: ['asc', 'desc'],
    sortBy: ['name', 'age'],
    dictionary
  })
```
----
### Meta Filter
Basic filter
```js
const dictionary = {
  name: 'users.name'
}

const result = knex('users')
  .metaFilter({
    filterBy: 'name',
    q: 'john',
    dictionary
  })
```

Array filter dictionary
```js
const dictionary = {
  name: ['users.fname', 'users.lname']
}

const result = knex('users')
  .metaFilter({
    filterBy: 'name',
    q: 'john',
    dictionary
  })
```

Array `q` and array `filterBy` dictionary
```js
const dictionary = {
  name: ['users.fname', 'users.lname'],
  address: 'users.address'
}

const result = knex('users')
  .metaFilter({
    filterBy: ['name', 'address'],
    q: ['john', 'lahug'],
    dictionary
  })
```

Array `q` and string `filterBy` dictionary
```js
const dictionary = {
  name: 'users.fname',
  address: 'users.address'
}

const result = knex('users')
  .metaFilter({
    filterBy: 'name',
    q: ['john', 'paul'],
    dictionary
  })
```

String `q` and array `filterBy` dictionary
```js
const dictionary = {
  name: ['users.fname', 'users.lname'],
  address: 'users.address'
}

const result = knex('users')
  .metaFilter({
    filterBy: ['name', 'address'],
    q: 'john',
    dictionary
  })
```
----
### Meta
```js
const dictionary = {
  birthdate: 'users.birthdate'
}

const result = knex('users')
  .meta({
    ...{ dateBy, dateFrom, dateTo, dateDictionary },
    ...{ sortBy, sort, sortDictionary },
    ...{ dateBy, dateFrom, dateTo, dateDictionary },
    ...{ page, rows },
    ...{ filterBy, q, filterDictionary },
    isCount
  })
```

----
### jsonObject
Basic json object
```js
const result = knex('users')
  .select({
    id: 'users.id',
    name: 'users.name'
  })
```

Nested json object
```js
const result = knex('users')
  .join('barangay', 'barangay.id', 'users.brgy_id')
  .select({
    id: 'users.id',
    name: 'users.name',
    brgy: knex.jsonObject({
      id: 'barangay.id',
      name: 'barangay.name'
    })
  })
```

----
### metaUpdate
```js
const dictionary = {
  name: 'users.name'
}

const payload = {
  name: 'Jeash'
}

const result = knex('users')
  .where('users.id', 1)
  .metaUpdate(payload, dictionary)
```

----
### metaInsert
Object insert
```js
const fillables = [
  'name'
]

const payload = {
  name: 'Jeash'
}

const result = knex('users')
  .metaInsert(payload, fillables)
```

Bulk insert
```js
const fillables = [
  'name'
]

const payload = [
  {
    name: 'Jeash'
  },
  {
    name: 'Ernie'
  }
]

const result = knex('users')
  .metaInsert(payload, fillables)
```


----
### metaFind
```js
const dictionary = {
  name: 'users.name',
  status: 'users.status'
}

const conditions = {
  name: 'Jeash',
  status: 'banned'
}

const result = knex('users')
  .metaFind(conditions, dictionary)
```


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Ernie Jeash - irenesejah29@gmail.com

Project Link: [https://github.com/KarmaBlackshaw/knex-meta](https://github.com/KarmaBlackshaw/knex-meta)
