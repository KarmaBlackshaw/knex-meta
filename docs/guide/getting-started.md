---
layout: doc
---

# Getting Started

## Installation

::: tip Prerequisites

- [Mysql](https://www.npmjs.com/package/mysql)
- [Knex.js](https://www.npmjs.com/package/knex)
:::

::: code-group
```sh [npm]
$ npm i @jeash/knex-meta
```
```sh [pnpm]
$ pnpm add @jeash/knex-meta
```
```sh [yarn]
$ yarn add @jeash/knex-meta
```
:::

## Usage
```js
const Knex = require('knex')
const knexMeta = require('@jeash/knex-meta')

const knex = knexMeta(Knex)

export default knex({
  client: 'mysql',
  connection: {
    ...
  }
})

```