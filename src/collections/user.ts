import { QueryClient } from '@tanstack/query-core'
import { createCollection } from '@tanstack/db'
import { queryCollectionOptions } from '@tanstack/query-db-collection'

const queryClient = new QueryClient()

export const usersCollection = createCollection(
  queryCollectionOptions({
    queryKey: ['users'],
    queryFn: async () => {
      return Promise.resolve([{ id: '' }])
    },
    queryClient,
    getKey: item => item.id
  })
)
