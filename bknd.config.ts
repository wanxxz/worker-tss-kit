import { type BkndConfig } from 'bknd/adapter'
import { registerLocalMediaAdapter } from 'bknd/adapter/node'
import { secureRandomString } from 'bknd/utils'
import { schema } from './src/data'

const local = registerLocalMediaAdapter()

export default {
  app: env => ({
    options: {
      mode: 'code'
    },
    connection: {
      url: env.BKND_CONNECTION_URL ?? ':memory:'
    },
    config: {
      data: schema.toJSON(),
      auth: {
        enabled: true,
        jwt: {
          secret: env.BKND_CONFIG_AUTH_JWT_SECRET ?? 'sEcReT',
          issuer: env.BKND_CONFIG_AUTH_JWT_ISSUER ?? secureRandomString(64)
        }
      },
      media: {
        enabled: true,
        adapter: local({
          path: env.BKND_MEDIA_ADAPTER_PATH ?? './public/uploads'
        })
      }
    }
  })
} satisfies BkndConfig
