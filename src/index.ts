/** Do not change, this is programmatically updated**/

import { jsonObject } from './core/jsonObject'
import { metaQuery } from './core/metaQuery'
import { metaUpdate } from './core/metaUpdate'
import { metaInsert } from './core/metaInsert'

export default knex => {
  knex.QueryBuilder.extend(jsonObject.name, jsonObject)
  knex.QueryBuilder.extend(metaQuery.name, metaQuery)
  knex.QueryBuilder.extend(metaUpdate.name, metaUpdate)
  knex.QueryBuilder.extend(metaInsert.name, metaInsert)

  return knex
}
