import { type DefaultSelect, type Insertable, type Selectable, type Updatable } from 'orchid-orm'
// import BaseTable from a file from the previous step:
import { BaseTable } from './base'

// export types of User for various use-cases:
export type User = Selectable<UserTable>
export type UserDefault = DefaultSelect<UserTable>
export type UserNew = Insertable<UserTable>
export type UserUpdate = Updatable<UserTable>

export class UserTable extends BaseTable {
  readonly table = 'user'
  columns = this.setColumns(t => ({
    id: t.identity().primaryKey(),
    name: t.string(),
    password: t.string(),
    ...t.timestamps()
  }))
}
