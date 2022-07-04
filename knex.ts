

// libs
import { knex } from 'knex'
import _isArray from 'lodash/isArray'
import _isString from 'lodash/isString'
import _size from 'lodash/size'
import _isEmpty from 'lodash/isEmpty'

// core
import fs from 'fs'
import path from 'path'

// const extensions = (() => {
//   const extensionPath = path.join(process.cwd(), 'extensions')

//   const files = fs.readdirSync(extensionPath)

//   const promises = files
//     .filter(filename => !filename.includes('test'))
//     .map(async filename => ({
//       name: filename.split('.')[0],
//       handler: await import(path.join(extensionPath, filename))
//     }))

//   return Promise.all(promises)
// })();

import metaDate from './extensions/metaDate'
import metaFilter from './extensions/metaFilter'
import metaPage from './extensions/metaPage'
import metaSort from './extensions/metaSort'
import meta from './extensions/meta'

const extensions = [
  metaDate,
  metaFilter,
  metaPage,
  metaSort,
  meta
]

extensions.forEach(extension => {
  knex.QueryBuilder.extend(extension.name, extension)
})

export default knex({
  client: 'mysql',
  connection: {
    host: '10.0.10.43',
    user: 'pmchan',
    password: 'pm@1004@chan@tT@9415042',
    database: 'inplay_sports'
  }
})
