import { useEffect, useRef } from 'react'

/**
 * Marca o elemento com data-in="true" quando ele entra na viewport (uma única vez).
 * Sem IntersectionObserver ou com menos movimento, o conteúdo já nasce visível via CSS.
 */
export function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--reveal-delay', String(delay))

    if (typeof IntersectionObserver === 'undefined') {
      el.dataset.in = 'true'
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).dataset.in = 'true'
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
