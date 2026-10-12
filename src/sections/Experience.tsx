import { ArrowDownRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Stagger } from '../components/Stagger'
import { SectionHeading } from '../components/SectionHeading'
import { experiences } from '../data/experience'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section id="experiencia" className={styles.section} aria-labelledby="experiencia-title">
      <div className="container">
        <SectionHeading index="02" label="Experiência" id="experiencia-title">
          Onde coloquei interfaces em produção.
        </SectionHeading>

        <ol className={styles.list}>
          {experiences.map((exp, i) => (
            <li key={exp.id}>
              <Reveal delay={i * 60}>
                <article className={`${styles.item} ${exp.featured ? styles.featured : ''}`}>
                  <p className={`mono ${styles.period}`}>{exp.period}</p>

                  <div className={styles.main}>
                    <h3 className={styles.company}>{exp.company}</h3>
                    <p className={styles.role}>{exp.role}</p>
                    <p className={styles.context}>{exp.context}</p>
                    {exp.featured && (
                      <a className={styles.caseLink} href="#vuedrama">
                        Ver o case completo
                        <ArrowDownRight size={16} aria-hidden="true" />
                      </a>
                    )}
                  </div>

                  <div className={styles.detail}>
                    <Stagger className={styles.highlights}>
                      {exp.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </Stagger>
                    <Stagger className={styles.tags} aria-label="Tecnologias">
                      {exp.stack.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </Stagger>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
