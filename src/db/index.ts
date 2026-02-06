import { drizzle } from 'drizzle-orm/d1'
export * from './schema'

export const db = drizzle(env.DB)
