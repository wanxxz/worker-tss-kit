// for porsager/postgres driver:
import { orchidORM } from 'orchid-orm/postgres-js'
// import all tables
import { UserTable } from './tables'
import { vars } from '../vars'

export const db = orchidORM(
  {
    // details for databaseURL are below
    databaseURL: vars.databaseUrl,
    // retry connecting when db is starting up, no retry by default,
    // see `connectRetry` section below
    connectRetry: true,
    // option for logging, false by default
    log: true,
    // option to create named prepared statements implicitly, false by default
    autoPreparedStatements: true
  },
  {
    user: UserTable
  }
)
