import { useEffect } from 'react'

const motionOk = () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Publica o progresso de rolagem em variáveis CSS na raiz, com um único listener e rAF:
 * --progress (0 a 1, barra do topo) e --sy (px rolados, base do parallax).
 * Com "reduzir movimento" o parallax fica em zero e só a barra de progresso é atualizada.
 */
export function useScrollVars() {
  useEffect(() => {
    const root = document.documentElement
    let frame = 0

    const update = () => {
      frame = 0
      const max = root.scrollHeight - window.innerHeight
      const y = window.scrollY
      root.style.setProperty('--progress', max > 0 ? String(Math.min(1, y / max)) : '0')
      root.style.setProperty('--sy', motionOk() ? String(Math.min(y, 1400)) : '0')
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
}
