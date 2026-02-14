import { em } from 'bknd'
import { type BkndConfig } from 'bknd/adapter'
import { registerLocalMediaAdapter } from 'bknd/adapter/node'
import { secureRandomString } from 'bknd/utils'

const local = registerLocalMediaAdapter()

const schema = em({})

type Database = (typeof schema)['DB']

declare module 'bknd' {
  interface DB extends Database {}
}

export default {
  app: env => ({
    adminOptions: false,
    isProduction: env.NODE_ENV === 'production',
    secrets: env,
    connection: {
      url: env.BKND_CONNECTION_URL ?? ':memory:'
    },
    config: {
      data: schema.toJSON(),
      auth: {
        enabled: true,
        jwt: {
          issuer: env.BKND_CONFIG_AUTH_JWT_SECRET ?? 'sEcReT',
          secret: env.BKND_CONFIG_AUTH_JWT_ISSUER ?? secureRandomString(64)
        }
      },
      media: {
        enabled: true,
        adapter: local({
          path: './public/uploads'
        })
      }
    }
  })
} satisfies BkndConfig
