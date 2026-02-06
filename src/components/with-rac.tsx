import { useRouter, type NavigateOptions, type ToOptions } from '@tanstack/react-router'
import { type PropsWithChildren } from 'react'
import { RouterProvider } from 'react-aria-components'

export function WithRAC(props: PropsWithChildren) {
  let router = useRouter()
  return (
    <RouterProvider
      navigate={(href, opts) => router.navigate({ ...href, ...opts })}
      useHref={href => router.buildLocation(href).href}
    >
      {props.children}
    </RouterProvider>
  )
}

// Configure the type of the `href` and `routerOptions` props on all React Aria components.
declare module 'react-aria-components' {
  interface RouterConfig {
    href: ToOptions
    routerOptions: Omit<NavigateOptions, keyof ToOptions>
  }
}
