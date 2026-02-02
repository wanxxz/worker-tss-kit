import { integer, text } from 'drizzle-orm/sqlite-core'
import { nanoid } from 'nanoid'

export const id = text('id')
  .primaryKey()
  .$defaultFn(() => nanoid())

export const createdAt = integer('created_at', { mode: 'timestamp_ms' })
  .notNull()
  .$defaultFn(() => new Date())

export const updatedAt = integer('updated_at', { mode: 'timestamp_ms' })
  .notNull()
  .$onUpdateFn(() => new Date())

export const deletedAt = integer('deleted_at', { mode: 'timestamp_ms' })

export const defaultColumns = {
  id,
  createdAt,
  updatedAt,
  deletedAt
}
