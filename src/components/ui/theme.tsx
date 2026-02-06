import { PropsWithChildren, useEffect, useState } from 'react'
import { semanticClassName, themeLightClassName } from './theme.css'

export type ThemeProps = PropsWithChildren

export function Theme(props: ThemeProps) {
  const [themeClassName] = useState(themeLightClassName)

  useEffect(() => {
    const bodyClassNames = [themeClassName, semanticClassName]

    document.body.classList.add(...bodyClassNames)

    return () => {
      document.body.classList.remove(...bodyClassNames)
    }
  }, [themeClassName])

  return <>{props.children}</>
}
