import postgres from 'postgres'
import { vars } from '../vars'

export const sql = postgres(vars.databaseUrl)
