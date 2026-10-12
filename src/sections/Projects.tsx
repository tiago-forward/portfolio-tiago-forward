import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Stagger } from '../components/Stagger'
import { SectionHeading } from '../components/SectionHeading'
import { sideProjects } from '../data/projects'
import { social } from '../data/profile'
import { VueDramaCase } from './VueDramaCase'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <section id="projetos" className={styles.section} aria-labelledby="projetos-title">
      <div className={`container ${styles.head}`}>
        <SectionHeading index="03" label="Projetos" id="projetos-title">
          Um produto no ar e o que veio antes dele.
        </SectionHeading>
      </div>

      <VueDramaCase />

      <div className={`container ${styles.others}`}>
        <Reveal>
          <div className={styles.othersHead}>
            <h3 className={styles.othersTitle}>Outros projetos</h3>
            <p>
              Dois trabalhos profissionais e um projeto pessoal público. O código dos primeiros é
              privado.
            </p>
          </div>
        </Reveal>

        <ol className={styles.list}>
          {sideProjects.map((p, i) => (
            <li key={p.id}>
              <Reveal>
                <article className={styles.row}>
                  <div className={styles.meta}>
                    <span className={`mono ${styles.idx}`}>{String(i + 1).padStart(2, '0')}</span>
                    <p className={`mono ${styles.kind}`} data-kind={p.kind}>
                      {p.kind}
                    </p>
                  </div>

                  <div className={styles.body}>
                    <h4 className={styles.name}>{p.name}</h4>
                    <p className={styles.summary}>{p.summary}</p>
                    <p className={styles.contribution}>
                      <strong>O que fiz: </strong>
                      {p.contribution}
                    </p>
                    <Stagger className={styles.tags} aria-label="Tecnologias">
                      {p.stack.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </Stagger>
                    {p.links.length > 0 ? (
                      <p className={styles.links}>
                        {p.links.map((l) => (
                          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                            {l.label}
                            <ArrowUpRight size={15} aria-hidden="true" />
                            <span className="sr-only">(abre em nova aba)</span>
                          </a>
                        ))}
                      </p>
                    ) : (
                      p.note && <p className={styles.note}>{p.note}</p>
                    )}
                  </div>

                  {p.image && (
                    <figure className={styles.shot}>
                      <img
                        src={p.image.src}
                        width={p.image.width}
                        height={p.image.height}
                        alt={p.image.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <p className={styles.more}>
            Mais código no{' '}
            <a href={social('github').href} target="_blank" rel="noopener noreferrer">
              GitHub
              <ArrowUpRight size={15} aria-hidden="true" />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
