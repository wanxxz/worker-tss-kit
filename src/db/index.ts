import { drizzle } from 'drizzle-orm/d1'
import { env } from 'cloudflare:workers'
export * from './schema'

export const db = drizzle(env.DB)
