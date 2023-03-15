import { defineConfig } from 'vitepress'
import fg from 'fast-glob'
import path from 'path'

const ROOT = process.cwd()

export default defineConfig(async () => {
  const utilities = await fg('*.md', {
    cwd: path.join(ROOT, 'docs/utility')
  })

  return {
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
          items: utilities.map(util => {
            const name = util.replace('.md', '')

            return {
              text: name,
              link: `/utility/${name}`
            }
          })
        }
      ],
      footer: {
        copyright: 'Copyright © 2019-present Ernie Jeash Villahermosa'
      }
    }
  }
})