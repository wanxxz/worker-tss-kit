import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Theme } from '../components'

function Layout() {
  return (
    <Theme>
      <Outlet />
    </Theme>
  )
}

export const Route = createFileRoute('/_layout')({
  component: Layout
})
