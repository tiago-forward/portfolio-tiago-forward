import { navItems, profile } from '../data/profile'
import { Mark } from './Mark'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.brand} aria-label="Voltar ao topo">
          <Mark className={styles.mark} />
          <span>
            <strong>{profile.brand}</strong>
            <small className="mono">{profile.role}</small>
          </span>
        </a>

        <nav aria-label="Rodapé">
          <ul className={styles.links}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <p className={`mono ${styles.credit}`}>
          © {new Date().getFullYear()} {profile.name}. Feito com React e Vite.
        </p>
      </div>
    </footer>
  )
}
