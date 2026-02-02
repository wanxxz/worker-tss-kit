import { type Config } from 'drizzle-kit'
import fs from 'node:fs'
import path from 'node:path'

function getCredentials() {
  if (process.env.NODE_ENV === 'production')
    return {
      driver: 'd1-http',
      dbCredentials: {
        accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
        token: process.env.CLOUDFLARE_API_TOKEN,
        databaseId: process.env.CLOUDFLARE_D1_DATABASE_ID
      }
    }

  const s1 = path.resolve('.wrangler/state/v3/d1/miniflare-D1DatabaseObject/')
  const s2 = fs.readdirSync(s1, { encoding: 'utf-8', recursive: false }).find(f => f.endsWith('.sqlite'))
  if (!s2) throw new Error(`.sqlite file not found in ${s1}`)
  const s3 = path.resolve(s1, s2)

  return {
    dbCredentials: {
      url: s3
    }
  }
}

export default {
  out: './src/db/migrations',
  schema: './src/db/schema/index.ts',
  dialect: 'sqlite',
  ...getCredentials()
} satisfies Config
