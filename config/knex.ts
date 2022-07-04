

// libs
import { knex } from 'knex'

import metaDate from '../src/metaDate'
import metaFilter from '../src/metaFilter'
import metaPage from '../src/metaPage'
import metaSort from '../src/metaSort'
import meta from '../src/meta'

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

export default knex