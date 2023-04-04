/** Do not change, this is programmatically updated**/

import { jsonObject } from './core/jsonObject'
import { metaInsert } from './core/metaInsert'
import { metaQuery } from './core/metaQuery'
import { metaUpdate } from './core/metaUpdate'

export default knex => {
  knex.QueryBuilder.extend(jsonObject.name, jsonObject)
  knex.QueryBuilder.extend(metaInsert.name, metaInsert)
  knex.QueryBuilder.extend(metaQuery.name, metaQuery)
  knex.QueryBuilder.extend(metaUpdate.name, metaUpdate)

  return knex
}
