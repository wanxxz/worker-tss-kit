import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { WithIntl, WithQuery } from '../components'

function Root() {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <WithQuery>
          <WithIntl>
            <Outlet />
          </WithIntl>
        </WithQuery>
        <Scripts />
      </body>
    </html>
  )
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        title: ''
      }
    ]
  }),
  component: Root
})
