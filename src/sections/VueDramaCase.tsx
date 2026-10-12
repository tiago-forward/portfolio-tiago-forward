import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import { usePointerVars } from '../hooks/usePointerVars'
import { Stagger } from '../components/Stagger'
import { PhoneFrame } from '../components/PhoneFrame'
import { ProductViewer } from '../components/ProductViewer'
import { Reveal } from '../components/Reveal'
import { vuedrama, vuedramaMobile, vuedramaShots } from '../data/projects'
import styles from './VueDramaCase.module.css'

export function VueDramaCase() {
  const ref = useRef<HTMLElement>(null)
  usePointerVars(ref)

  return (
    <article ref={ref} id="vuedrama" className={styles.case} aria-labelledby="vuedrama-title">
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <div className={styles.topline}>
            <p className="mono">Projeto principal</p>
            <p className={`mono ${styles.status}`}>
              <span className={styles.live} aria-hidden="true" />
              No ar em vuedrama.com.br
            </p>
          </div>

          <h3 id="vuedrama-title" className={styles.title}>
            Vue<span>Drama</span>
          </h3>

          <div className={styles.intro}>
            <p className={styles.tagline}>{vuedrama.tagline}</p>
            <div>
              <p className={styles.clarify}>{vuedrama.clarification}</p>
              <div className={styles.ctas}>
                <a
                  className={styles.primary}
                  href={vuedrama.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acessar o VueDrama
                  <ArrowUpRight size={18} aria-hidden="true" />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
                <a
                  className={styles.ghost}
                  href={vuedrama.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram @vuedrama
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.stage} delay={80}>
          <div className={styles.showcase}>
            <ProductViewer shots={vuedramaShots} address="vuedrama.com.br" />
            <div className={styles.phones}>
              <PhoneFrame shot={vuedramaMobile[0]} className={styles.phoneA} />
              <PhoneFrame shot={vuedramaMobile[1]} className={styles.phoneB} />
            </div>
          </div>
          <p className={styles.caption}>
            Capturas reais de vuedrama.com.br, feitas em 12 de outubro de 2026.
          </p>
        </Reveal>

        <div className={styles.brief}>
          <Reveal>
            <h4 className={`mono ${styles.label}`}>Em resumo</h4>
            <dl className={styles.facts}>
              <div>
                <dt>O que resolve</dt>
                <dd>{vuedrama.whatItSolves}</dd>
              </div>
              <div>
                <dt>Para quem</dt>
                <dd>{vuedrama.audience}</dd>
              </div>
              <div>
                <dt>Meu papel</dt>
                <dd>{vuedrama.role}</dd>
              </div>
              <div>
                <dt>Código</dt>
                <dd>{vuedrama.codeNote}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={100}>
            <h4 className={`mono ${styles.label}`}>O que já funciona</h4>
            <Stagger className={styles.features}>
              {vuedrama.features.map((f, i) => (
                <li key={f.title}>
                  <span className={`mono ${styles.num}`}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h5>{f.title}</h5>
                    <p>{f.text}</p>
                  </div>
                </li>
              ))}
            </Stagger>
          </Reveal>
        </div>

        <Reveal>
          <h4 className={`mono ${styles.label}`}>Decisões técnicas</h4>
          <Stagger className={styles.decisions}>
            {vuedrama.decisions.map((d) => (
              <li key={d.title}>
                <h5>{d.title}</h5>
                <p>{d.text}</p>
              </li>
            ))}
          </Stagger>
        </Reveal>

        <Reveal>
          <h4 className={`mono ${styles.label}`}>Tecnologias</h4>
          <Stagger className={styles.stack}>
            {vuedrama.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </article>
  )
}
