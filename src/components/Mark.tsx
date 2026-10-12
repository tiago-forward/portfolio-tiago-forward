import { MARK_PATH } from '../data/markPath'

interface MarkProps {
  className?: string
  /** Quando informado, a assinatura vira uma imagem com texto alternativo. */
  title?: string
}

/** Assinatura "TF" vetorizada a partir do banner original da marca. */
export function Mark({ className, title }: MarkProps) {
  return (
    <svg
      className={className}
      viewBox="80 60 1140 1150"
      fill="currentColor"
      fillRule="evenodd"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path d={MARK_PATH} />
    </svg>
  )
}
