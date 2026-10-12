import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, profile, social } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { BrandIcon } from './BrandIcon'
import { Mark } from './Mark'
import styles from './Header.module.css'

export function Header() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const listRef = useRef<HTMLUListElement>(null)
  const [indicator, setIndicator] = useState({ x: 0, w: 0, show: false })

  // Posiciona o traço deslizante sob o link da seção ativa.
  useLayoutEffect(() => {
    const place = () => {
      const link = listRef.current?.querySelector<HTMLElement>('[aria-current="true"]')
      setIndicator(
        link
          ? { x: link.offsetLeft, w: link.offsetWidth, show: true }
          : { x: 0, w: 0, show: false },
      )
    }
    place()
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [active])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`${styles.header} ${scrolled || open ? styles.solid : ''}`}>
        <div className={`container ${styles.bar}`}>
          <a
            href="#inicio"
            className={styles.brand}
            aria-label="Tiago Forward, início"
            onClick={close}
          >
            <Mark className={styles.mark} />
            <span className={styles.wordmark}>{profile.brand}</span>
          </a>

          <nav className={styles.nav} aria-label="Principal">
            <ul ref={listRef}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={styles.link}
                    aria-current={active === item.id ? 'true' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <span
                className={styles.indicator}
                aria-hidden="true"
                style={{
                  width: indicator.w,
                  opacity: indicator.show ? 1 : 0,
                  transform: `translateX(${indicator.x}px)`,
                }}
              />
            </ul>
          </nav>

          <div className={styles.actions}>
            <a
              className={styles.icon}
              href={social('github').href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (abre em nova aba)"
            >
              <BrandIcon name="github" />
            </a>
            <a
              className={styles.icon}
              href={social('linkedin').href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (abre em nova aba)"
            >
              <BrandIcon name="linkedin" />
            </a>
            <button
              type="button"
              className={`${styles.icon} ${styles.burger}`}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <div id="menu-mobile" className={styles.sheet} data-open={open} hidden={!open}>
        <nav aria-label="Principal (mobile)">
          <ul>
            {navItems.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={close}>
                  <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
