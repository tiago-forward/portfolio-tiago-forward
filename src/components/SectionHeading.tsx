import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  index: string
  label: string
  id: string
  children: ReactNode
}

export function SectionHeading({ index, label, id, children }: SectionHeadingProps) {
  const ref = useReveal<HTMLElement>()
  return (
    <header ref={ref} className={styles.heading}>
      <p className={`mono ${styles.kicker}`}>
        <span className={styles.index}>{index}</span>
        <span className={styles.rule} aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 id={id} className={styles.title}>
        {children}
      </h2>
    </header>
  )
}
