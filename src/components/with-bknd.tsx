import { ClientProvider } from 'bknd/client'
import { type PropsWithChildren } from 'react'

export function WithBknd(props: PropsWithChildren) {
  return <ClientProvider>{props.children}</ClientProvider>
}
