import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface StaggerProps {
  as?: 'ul' | 'ol' | 'div'
  className?: string
  children: ReactNode
  'aria-label'?: string
}

/** Lista cujos filhos entram em cascata (animação, não transição) quando ela aparece na tela. */
export function Stagger({ as: Tag = 'ul', className, children, ...rest }: StaggerProps) {
  const ref = useReveal<HTMLElement>()
  return (
    <Tag ref={ref as never} className={`stagger${className ? ` ${className}` : ''}`} {...rest}>
      {children}
    </Tag>
  )
}
