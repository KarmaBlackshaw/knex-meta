/** Do not change, this is programmatically updated**/

import { bulkUpdate } from './core/bulkUpdate'
import { jsonObject } from './core/jsonObject'
import { meta } from './core/meta'
import { metaDate } from './core/metaDate'
import { metaFind } from './core/metaFind'
import { metaFilter } from './core/metaFilter'
import { metaInsert } from './core/metaInsert'
import { metaPage } from './core/metaPage'
import { metaQuery } from './core/metaQuery'
import { metaSort } from './core/metaSort'
import { metaUpdate } from './core/metaUpdate'

export default knex => {
  knex.QueryBuilder.extend(bulkUpdate.name, bulkUpdate)
  knex.QueryBuilder.extend(jsonObject.name, jsonObject)
  knex.QueryBuilder.extend(meta.name, meta)
  knex.QueryBuilder.extend(metaDate.name, metaDate)
  knex.QueryBuilder.extend(metaFind.name, metaFind)
  knex.QueryBuilder.extend(metaFilter.name, metaFilter)
  knex.QueryBuilder.extend(metaInsert.name, metaInsert)
  knex.QueryBuilder.extend(metaPage.name, metaPage)
  knex.QueryBuilder.extend(metaQuery.name, metaQuery)
  knex.QueryBuilder.extend(metaSort.name, metaSort)
  knex.QueryBuilder.extend(metaUpdate.name, metaUpdate)

  return knex
}
