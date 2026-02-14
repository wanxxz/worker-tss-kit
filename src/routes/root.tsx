import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { WithBknd, WithIntl, WithQuery, WithRAC, WithRS } from '../components'

function Root() {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <WithQuery>
          <WithBknd>
            <WithIntl>
              <WithRS>
                <WithRAC>
                  <Outlet />
                </WithRAC>
              </WithRS>
            </WithIntl>
          </WithBknd>
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
