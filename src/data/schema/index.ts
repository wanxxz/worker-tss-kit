import { em } from 'bknd'

export const schema = em({})

type Database = (typeof schema)['DB']

declare module 'bknd' {
  interface DB extends Database {}
}
