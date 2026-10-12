import { Reveal } from '../components/Reveal'
import { Stagger } from '../components/Stagger'
import { SectionHeading } from '../components/SectionHeading'
import { origins, principles, stackGroups, type Origin } from '../data/stack'
import styles from './Stack.module.css'

const originOrder: Origin[] = ['prod', 'vuedrama', 'curso']

export function Stack() {
  return (
    <section id="stack" className={styles.section} aria-labelledby="stack-title">
      <div className="container">
        <SectionHeading index="04" label="Stack" id="stack-title">
          O que uso e onde usei.
        </SectionHeading>

        <Reveal>
          <ul className={styles.legend} aria-label="Legenda">
            {originOrder.map((o) => (
              <li key={o}>
                <span className={styles.dot} data-origin={o} aria-hidden="true" />
                {origins[o].label}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className={styles.groups}>
          {stackGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 40}>
              <section className={styles.group} aria-labelledby={`stack-${group.id}`}>
                <div className={styles.groupHead}>
                  <h3 id={`stack-${group.id}`}>{group.title}</h3>
                  <p>{group.note}</p>
                </div>
                <Stagger className={styles.items}>
                  {group.items.map((t) => (
                    <li key={t.name} className={styles.item}>
                      <span className={styles.dot} data-origin={t.origin} aria-hidden="true" />
                      {t.name}
                      <span className="sr-only"> ({origins[t.origin].label})</span>
                    </li>
                  ))}
                </Stagger>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className={styles.principles}>
            <h3 className="mono">Princípios que guiam o código</h3>
            <p>{principles.join(' · ')}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
