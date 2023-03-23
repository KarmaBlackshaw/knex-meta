/** Do not change, this is programmatically updated**/

import { jsonObject } from './core/jsonObject'
import { metaInsert } from './core/metaInsert'
import { metaUpdate } from './core/metaUpdate'
import { metaQuery } from './core/metaQuery'

export default knex => {
  knex.QueryBuilder.extend(jsonObject.name, jsonObject)
  knex.QueryBuilder.extend(metaInsert.name, metaInsert)
  knex.QueryBuilder.extend(metaUpdate.name, metaUpdate)
  knex.QueryBuilder.extend(metaQuery.name, metaQuery)

  return knex
}
