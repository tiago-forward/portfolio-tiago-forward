import type { ProductShot } from '../data/projects'
import styles from './PhoneFrame.module.css'

export function PhoneFrame({ shot, className }: { shot: ProductShot; className?: string }) {
  return (
    <figure className={`${styles.phone}${className ? ` ${className}` : ''}`}>
      <div className={styles.screen}>
        <img
          src={shot.src}
          width={shot.width}
          height={shot.height}
          alt={shot.alt}
          loading="lazy"
          decoding="async"
        />
      </div>
    </figure>
  )
}
