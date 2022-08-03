
// libs
import { knex } from 'knex'

import { metaDate } from './src/metaDate'
import { metaFilter } from './src/metaFilter'
import { metaPage } from './src/metaPage'
import { metaSort } from './src/metaSort'
import { meta } from './src/meta'
import { bulkUpdate } from './src/bulkUpdate'
import { jsonObject } from './src/jsonObject'

const extensions = [
  metaDate,
  metaFilter,
  metaPage,
  metaSort,
  meta,
  bulkUpdate,
  jsonObject
]

extensions.forEach(extension => {
  knex.QueryBuilder.extend(extension.name, extension)
})

export default knex
