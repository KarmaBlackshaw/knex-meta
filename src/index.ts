/** Do not change, this is programmatically updated**/

import { bulkUpdate } from './core/bulkUpdate'
import { meta } from './core/meta'
import { metaDate } from './core/metaDate'
import { jsonObject } from './core/jsonObject'
import { metaFilter } from './core/metaFilter'
import { metaFind } from './core/metaFind'
import { metaInsert } from './core/metaInsert'
import { metaPage } from './core/metaPage'
import { metaQuery } from './core/metaQuery'
import { metaSort } from './core/metaSort'
import { metaUpdate } from './core/metaUpdate'

export default knex => {
  knex.QueryBuilder.extend(bulkUpdate.name, bulkUpdate)
  knex.QueryBuilder.extend(meta.name, meta)
  knex.QueryBuilder.extend(metaDate.name, metaDate)
  knex.QueryBuilder.extend(jsonObject.name, jsonObject)
  knex.QueryBuilder.extend(metaFilter.name, metaFilter)
  knex.QueryBuilder.extend(metaFind.name, metaFind)
  knex.QueryBuilder.extend(metaInsert.name, metaInsert)
  knex.QueryBuilder.extend(metaPage.name, metaPage)
  knex.QueryBuilder.extend(metaQuery.name, metaQuery)
  knex.QueryBuilder.extend(metaSort.name, metaSort)
  kndex.QueryBuilder.extend(metaUpdate.name, metaUpdate)

  return knex
}
