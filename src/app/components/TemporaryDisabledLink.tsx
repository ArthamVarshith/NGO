import type { CSSProperties, ReactNode } from 'react'

type TemporaryDisabledLinkProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export default function TemporaryDisabledLink({
  children,
  className,
  style,
}: TemporaryDisabledLinkProps) {
  return (
    <span aria-disabled="true" className={className ? `${className} is-disabled-link` : 'is-disabled-link'} style={style}>
      {children}
    </span>
  )
}
