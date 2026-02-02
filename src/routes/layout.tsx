import { createFileRoute, Outlet } from '@tanstack/react-router'
import { ThemeProvider } from '@emotion/react'

const theme = {}

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  )
}

export const Route = createFileRoute('/_layout')({
  component: Layout
})
