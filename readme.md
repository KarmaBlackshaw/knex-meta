<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
![visitors](https://visitor-badge.glitch.me/badge?page_id=karmablackshaw.knex-meta)
[![GitHub Karmablackshaw](https://img.shields.io/github/last-commit/karmablackshaw/knex-meta?label=Last+Commit)](https://github.com/karmablackshaw)
[![GitHub Karmablackshaw](https://img.shields.io/github/commit-activity/m/karmablackshaw/knex-meta?color=orange&label=Average+Commits)](https://github.com/karmablackshaw)
[![GitHub Karmablackshaw](https://img.shields.io/github/last-commit/karmablackshaw/knex-meta?label=Last+Commit)](https://github.com/karmablackshaw)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)



<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">KNEX-META</h3>

  <p align="center">
    Personal extensions for knex query builder
    <br />
    <a href="https://github.com/KarmaBlackshaw/knex-meta"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/KarmaBlackshaw/knex-meta/issues">Report Bug</a>
    ·
    <a href="https://github.com/KarmaBlackshaw/knex-meta/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

### Built With

* [Typescript](https://www.typescriptlang.org/)
* [Vitest](https://vitest.dev/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

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
    dateBy: 'birthdate',
    dateFrom: '07-29-1998',
    dateTo: '07-29-1998',
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

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Ernie Jeash - irenesejah29@gmail.com

Project Link: [https://github.com/KarmaBlackshaw/knex-meta](https://github.com/KarmaBlackshaw/knex-meta)

<p align="right">(<a href="#top">back to top</a>)</p>
