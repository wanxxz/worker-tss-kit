import { QueryClient } from '@tanstack/query-core'
import { createCollection } from '@tanstack/db'
import { queryCollectionOptions } from '@tanstack/query-db-collection'
import { db } from '../db'

const queryClient = new QueryClient()

export const usersCollection = createCollection(
  queryCollectionOptions({
    queryKey: ['users'],
    queryFn: async () => {
      const users = await db.user.limit(10)
      return users
    },
    queryClient,
    getKey: item => item.id
  })
)
