import { config } from 'dotenv'

config({ override: true })

import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().nonempty()
})

export const env = envSchema.parse(process.env)

export const vars = {
  databaseUrl: env.DATABASE_URL
}
