import { knex } from 'knex'

import { metaDate } from './core/metaDate'
import { metaFilter } from './core/metaFilter'
import { metaPage } from './core/metaPage'
import { metaSort } from './core/metaSort'
import { meta } from './core/meta'
import { bulkUpdate } from './core/bulkUpdate'
import { jsonObject } from './core/jsonObject'
import { metaUpdate } from './core/metaUpdate'
import { metaInsert } from './core/metaInsert'
import { metaFind } from './core/metaFind'

const extensions = [
  metaDate,
  metaFilter,
  metaPage,
  metaSort,
  meta,
  bulkUpdate,
  jsonObject,
  metaUpdate,
  metaInsert,
  metaFind
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
