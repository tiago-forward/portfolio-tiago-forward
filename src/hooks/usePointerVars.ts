import { useEffect, type RefObject } from 'react'

/**
 * Escreve a posição do ponteiro em variáveis CSS do elemento:
 * --px/--py em px (para spotlights) e --mx/--my de -1 a 1 (para deslocamentos de profundidade).
 * Só ativa com mouse (hover real).
 */
export function usePointerVars<T extends HTMLElement>(ref: RefObject<T | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return

    let frame = 0
    let last: PointerEvent | null = null

    const apply = () => {
      frame = 0
      if (!last) return
      const r = el.getBoundingClientRect()
      const x = last.clientX - r.left
      const y = last.clientY - r.top
      el.style.setProperty('--px', `${x}px`)
      el.style.setProperty('--py', `${y}px`)
      el.style.setProperty('--mx', String(((x / r.width) * 2 - 1).toFixed(3)))
      el.style.setProperty('--my', String(((y / r.height) * 2 - 1).toFixed(3)))
    }

    const onMove = (e: PointerEvent) => {
      last = e
      if (!frame) frame = requestAnimationFrame(apply)
    }
    const onLeave = () => {
      el.style.setProperty('--mx', '0')
      el.style.setProperty('--my', '0')
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ref])
}
