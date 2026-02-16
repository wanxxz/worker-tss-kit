import { createLink, LinkComponent } from '@tanstack/react-router'
import { forwardRef } from 'react'
import { Link as RACLink, type LinkProps } from 'react-aria-components'
import { linkClassName } from './link.css'
import { cn } from './utils'

const BasicLinkComponent = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  return <RACLink ref={ref} {...props} className={cn(props.className, linkClassName)} />
})

const CreatedLinkComponent = createLink(BasicLinkComponent)

export const Link: LinkComponent<typeof BasicLinkComponent> = props => {
  return <CreatedLinkComponent preload={'intent'} {...props} />
}
