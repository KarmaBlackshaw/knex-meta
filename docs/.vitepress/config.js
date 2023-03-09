import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Knex Meta',
  description: 'Utility extensions for knex query builder',
  lang: 'en-US',
  themeConfig: {
    siteTitle: 'Knex Meta',
    nav: [
      { text: 'Guide', link: '/guide/what-is-knex-meta' },
      { text: 'Config', link: '/config' },
      { text: 'Changelog', link: 'https://github.com/KarmaBlackshaw/knex-meta/blob/master/CHANGELOG.md' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'What is Knex Meta', link: '/guide/what-is-knex-meta' },
          { text: 'Getting Started', link: '/guide/getting-started' },
        ]
      },
      {
        text: 'Utilities',
        items: [
          { text: 'bulkUpdate', link: '/utility/bulkUpdate' },
        ]
      }
    ],
    footer: {
      copyright: 'Copyright © 2019-present Ernie Jeash Villahermosa'
    }
  }
})