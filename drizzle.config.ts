import { type Config } from 'drizzle-kit'

export default {
  out: './src/db/migrations',
  schema: './src/db/schema/index.ts',
  dialect: 'sqlite'
} satisfies Config
