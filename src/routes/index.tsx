import { createFileRoute } from '@tanstack/react-router'

function IndexPage() {
  return <div></div>
}

export const Route = createFileRoute('/_layout/')({
  component: IndexPage
})
