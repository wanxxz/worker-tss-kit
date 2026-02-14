interface ViteTypeOptions {
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly BKND_CONNECTION_URL: string
  readonly BKND_CONFIG_AUTH_JWT_SECRET: string
  readonly BKND_CONFIG_AUTH_JWT_ISSUER: string
  readonly BKND_MEDIA_ADAPTER_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
