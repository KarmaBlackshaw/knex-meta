import { knex as Knex } from 'knex'
import knexMeta from './index'

const knex = knexMeta(Knex)

export default knex({
  client: 'mysql',
  connection: {
    host: '10.0.10.43',
    user: 'pmchan',
    password: 'pm@1004@chan@tT@9415042',
    database: 'inplay_sports'
  }
})
