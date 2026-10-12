import { useEffect, useState } from 'react'
import { navItems, type SectionId } from '../data/profile'

/** Descobre qual seção está cruzando a faixa de leitura (terço superior da tela). */
export function useActiveSection(): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    const elements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId)
        }
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )

    elements.forEach((el) => observer.observe(el))

    const onScroll = () => {
      if (window.scrollY < 120) setActive(null)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return active
}
