import { ErrorComponent, rootRouteId, useMatch, useRouter, type ErrorComponentProps } from '@tanstack/react-router'
import { type FunctionComponent } from 'react'
import { Button, Link } from 'react-aria-components'

const CustomErrorComponent: FunctionComponent<ErrorComponentProps> = props => {
  const router = useRouter()
  const isRoot = useMatch({
    strict: false,
    select: state => state.id === rootRouteId
  })

  console.error(props.error)

  return (
    <div>
      <ErrorComponent error={props.error} />
      <div>
        <Button onPress={() => router.invalidate()}>Try Again</Button>
        {isRoot ? <Link href="/">Home</Link> : <Button onPress={() => router.history.back()}>Go Back</Button>}
      </div>
    </div>
  )
}

export { CustomErrorComponent as ErrorComponent }
