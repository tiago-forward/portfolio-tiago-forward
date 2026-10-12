import { useEffect } from 'react'

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

/**
 * Rolagem suave por âncora com duração proporcional à distância e easing próprio
 * (o `scroll-behavior: smooth` do CSS não permite controlar nenhum dos dois).
 * Com "reduzir movimento", salta direto. Mantém hash na URL e move o foco para o destino.
 */
export function useSmoothAnchors() {
  useEffect(() => {
    const calm = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0

    const cancel = () => {
      if (frame) cancelAnimationFrame(frame)
      frame = 0
    }

    const scrollToY = (target: number) => {
      cancel()
      const start = window.scrollY
      const distance = target - start
      if (calm() || Math.abs(distance) < 2) {
        window.scrollTo(0, target)
        return
      }
      const duration = Math.min(1100, Math.max(500, Math.abs(distance) * 0.35))
      const t0 = performance.now()

      const tick = (now: number) => {
        const t = Math.min(1, (now - t0) / duration)
        window.scrollTo(0, start + distance * easeInOutCubic(t))
        frame = t < 1 ? requestAnimationFrame(tick) : 0
      }
      frame = requestAnimationFrame(tick)
    }

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!link) return
      const id = decodeURIComponent(link.getAttribute('href')!.slice(1))
      const el = id ? document.getElementById(id) : document.body
      if (!el) return

      e.preventDefault()
      const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0
      const top = id ? el.getBoundingClientRect().top + window.scrollY - offset : 0
      scrollToY(Math.max(0, top))

      history.pushState(null, '', id ? `#${id}` : window.location.pathname)
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1')
      el.focus({ preventScroll: true })
    }

    // O usuário assumiu o controle: interrompe a animação.
    const interrupt = () => cancel()

    document.addEventListener('click', onClick)
    window.addEventListener('wheel', interrupt, { passive: true })
    window.addEventListener('touchstart', interrupt, { passive: true })
    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('wheel', interrupt)
      window.removeEventListener('touchstart', interrupt)
      cancel()
    }
  }, [])
}
