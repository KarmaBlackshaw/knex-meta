import knex from './index'

export default knex({
  client: 'mysql',
  connection: {
    host: '10.0.10.43',
    user: 'pmchan',
    password: 'pm@1004@chan@tT@9415042',
    database: 'inplay_sports'
  }
})
