import styles from './ScrollProgress.module.css'

/** Fio de progresso de leitura no topo da página (decorativo). */
export function ScrollProgress() {
  return <div className={styles.bar} aria-hidden="true" />
}
