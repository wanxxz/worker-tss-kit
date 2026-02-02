interface ViteTypeOptions {
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly NODE_ENV: string
  readonly CLOUDFLARE_API_TOKEN: string
  readonly CLOUDFLARE_ACCOUNT_ID: string
  readonly CLOUDFLARE_D1_DATABASE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
