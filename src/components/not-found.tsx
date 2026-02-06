import { useRouter } from '@tanstack/react-router'
import { type FunctionComponent, type PropsWithChildren } from 'react'
import { Button, Heading, Link } from 'react-aria-components'

export const NotFoundComponent: FunctionComponent<PropsWithChildren> = props => {
  const router = useRouter()

  return (
    <div>
      <Heading>404 Not Found</Heading>
      {props.children || (
        <div>
          <Button onPress={() => router.history.back()}>Go Back</Button>
          <Link href="/">Start Over</Link>
        </div>
      )}
    </div>
  )
}
