import { useId, useRef, useState, type KeyboardEvent } from 'react'
import type { ProductShot } from '../data/projects'
import styles from './ProductViewer.module.css'

interface ProductViewerProps {
  shots: ProductShot[]
  /** Domínio exibido na barra do navegador. */
  address: string
}

/** Moldura de navegador com abas (WAI-ARIA tabs) para alternar entre capturas reais. */
export function ProductViewer({ shots, address }: ProductViewerProps) {
  const [current, setCurrent] = useState(0)
  const uid = useId()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const select = (index: number) => {
    setCurrent(index)
    tabRefs.current[index]?.focus()
  }

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = shots.length - 1
    if (e.key === 'ArrowRight') select(current === last ? 0 : current + 1)
    else if (e.key === 'ArrowLeft') select(current === 0 ? last : current - 1)
    else if (e.key === 'Home') select(0)
    else if (e.key === 'End') select(last)
    else return
    e.preventDefault()
  }

  return (
    <div className={styles.viewer}>
      <div className={styles.chrome}>
        <span className={styles.lights} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className={styles.address}>{address}</span>
      </div>

      <div className={styles.stage}>
        {shots.map((shot, i) => (
          <div
            key={shot.id}
            id={`${uid}-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`${uid}-tab-${i}`}
            hidden={i !== current}
            className={styles.panel}
          >
            <img
              src={shot.src}
              width={shot.width}
              height={shot.height}
              alt={shot.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        ))}
      </div>

      <div
        className={styles.tabs}
        role="tablist"
        aria-label="Telas do VueDrama"
        onKeyDown={onKeyDown}
      >
        {shots.map((shot, i) => (
          <button
            key={shot.id}
            ref={(el) => {
              tabRefs.current[i] = el
            }}
            id={`${uid}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === current}
            aria-controls={`${uid}-panel-${i}`}
            tabIndex={i === current ? 0 : -1}
            className={styles.tab}
            onClick={() => setCurrent(i)}
          >
            <span className="mono">{String(i + 1).padStart(2, '0')}</span>
            {shot.label}
          </button>
        ))}
      </div>
    </div>
  )
}
