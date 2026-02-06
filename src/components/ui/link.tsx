import { createLink } from '@tanstack/react-router'
import { Button as RACButton, Link as RACLink, type ButtonProps, type LinkProps } from 'react-aria-components'
import { cn } from './utils'
import { linkClassName } from './link.css'

export function Link(props: LinkProps) {
  return createLink(<RACLink {...props} className={cn(props.className, linkClassName)} />)
}

export function ButtonLink(props: ButtonProps) {
  return createLink(<RACButton {...props} className={cn(props.className, linkClassName)} />)
}
