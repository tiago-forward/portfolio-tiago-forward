import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { BrandIcon } from '../components/BrandIcon'
import { Reveal } from '../components/Reveal'
import { Stagger } from '../components/Stagger'
import { SectionHeading } from '../components/SectionHeading'
import { profile, social } from '../data/profile'
import { vuedrama } from '../data/projects'
import styles from './Contact.module.css'

type CopyState = 'idle' | 'done' | 'error'

export function Contact() {
  const [state, setState] = useState<CopyState>('idle')
  const timer = useRef<number>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setState('done')
    } catch {
      setState('error')
    }
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setState('idle'), 2400)
  }

  const channels = [
    { ...social('linkedin'), icon: 'linkedin' as const },
    { ...social('github'), icon: 'github' as const },
    { ...social('instagram'), icon: 'instagram' as const },
  ]

  return (
    <section id="contato" className={styles.section} aria-labelledby="contato-title">
      <div className="container">
        <SectionHeading index="05" label="Contato" id="contato-title">
          Vamos conversar.
        </SectionHeading>

        <div className={styles.grid}>
          <Reveal>
            <p className={styles.lead}>
              Estou aberto a oportunidades como desenvolvedor frontend, a projetos e a colaborações.
              Se você quer falar sobre uma vaga, um produto ou sobre o VueDrama, escreva.
            </p>

            <div className={styles.mail}>
              <a className={styles.mailLink} href={social('email').href}>
                {profile.email}
              </a>
              <button type="button" className={styles.copy} onClick={copy}>
                {state === 'done' ? (
                  <Check size={16} aria-hidden="true" />
                ) : (
                  <Copy size={16} aria-hidden="true" />
                )}
                {state === 'done' ? 'Copiado' : 'Copiar e-mail'}
              </button>
              <span className="sr-only" role="status" aria-live="polite">
                {state === 'done' && 'E-mail copiado para a área de transferência.'}
                {state === 'error' && 'Não foi possível copiar. Selecione o e-mail manualmente.'}
              </span>
              {state === 'error' && (
                <span className={styles.err}>Não consegui copiar. Selecione o e-mail acima.</span>
              )}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Stagger className={styles.channels}>
              {channels.map((c) => (
                <li key={c.id}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer">
                    <BrandIcon name={c.icon} size={22} />
                    <span className={styles.chText}>
                      <span className={styles.chLabel}>{c.label}</span>
                      <span className={`mono ${styles.chHandle}`}>{c.handle}</span>
                    </span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
              ))}
              <li>
                <a href={vuedrama.url} target="_blank" rel="noopener noreferrer">
                  <span className={styles.vdMark} aria-hidden="true">
                    V
                  </span>
                  <span className={styles.chText}>
                    <span className={styles.chLabel}>VueDrama</span>
                    <span className={`mono ${styles.chHandle}`}>vuedrama.com.br</span>
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </li>
            </Stagger>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
