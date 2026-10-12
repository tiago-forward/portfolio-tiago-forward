import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { education } from '../data/experience'
import { profile } from '../data/profile'
import { courses } from '../data/stack'
import styles from './About.module.css'

export function About() {
  return (
    <section id="sobre" className={styles.section} aria-labelledby="sobre-title">
      <div className="container">
        <SectionHeading index="01" label="Sobre" id="sobre-title">
          Gosto de ver o que desenho funcionando na mão de quem usa.
        </SectionHeading>

        <div className={styles.grid}>
          <Reveal className={styles.text}>
            <p>
              Sou desenvolvedor frontend. Comecei pela lógica e pelo React, aprendendo com cursos
              práticos e projetos próprios, e desde 2025 trabalho profissionalmente com React,
              Next.js e TypeScript.
            </p>
            <p>
              Em empresa, cuidei da interface de esportes de um site em produção, de uma plataforma
              de rifas com pagamentos e do backoffice de uma plataforma com grande volume de
              acessos. Fora dela, construo o VueDrama de ponta a ponta: interface, API e banco de
              dados.
            </p>
            <p>
              Me interesso pela parte da arquitetura que sustenta a interface. No VueDrama, a API
              usa Clean Architecture e DDD, e o frontend é organizado por feature. Gosto de decisões
              registradas e de código que o próximo desenvolvedor consiga ler.
            </p>
          </Reveal>

          <Reveal className={styles.facts} delay={120}>
            <dl>
              <div>
                <dt className="mono">Base</dt>
                <dd>{profile.location}, Brasil</dd>
              </div>
              <div>
                <dt className="mono">Formação</dt>
                <dd>
                  {education.course}
                  <span className={styles.sub}>
                    {education.institution}, {education.period}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="mono">Idiomas</dt>
                <dd>Português e inglês</dd>
              </div>
              <div>
                <dt className="mono">Interesses</dt>
                <dd>
                  Clean Architecture, DDD, interfaces acessíveis e back-end com NestJS e Prisma
                </dd>
              </div>
            </dl>

            <details className={styles.details}>
              <summary>
                <span className="mono">Formação complementar</span>
              </summary>
              <ul>
                {courses.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </details>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
