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

/** output

SELECT
  *
FROM
  `users`
WHERE `birthdate` >= '1998-07-29 00:00:00'
  AND `birthdate` <= '1998-07-29 23:59:59'
 */

```

### Meta Sort
```js
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

/** output

SELECT
  *
FROM
  `users`
ORDER BY `name` ASC
 */

```

### Meta Filter
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

/** output

SELECT
  *
FROM
  `users`
WHERE (
    (
      `users`.`fname` LIKE '%john%'
      OR `users`.`lname` LIKE '%john%'
    )
    AND `users`.`address` LIKE '%lahug%'
  )
 */

```

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

/** output

SELECT
  *
FROM
  `users`
WHERE `birthdate` >= '1998-07-29 00:00:00'
  AND `birthdate` <= '1998-07-29 23:59:59'
  AND `users`.`birthdate` LIKE '%july%'
ORDER BY `birthdate` ASC
LIMIT 50 OFFSET 100
 */

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
