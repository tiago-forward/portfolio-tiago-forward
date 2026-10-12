import { useRef, type CSSProperties } from 'react'
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react'
import { siJavascript, siNextdotjs, siReact, siTailwindcss, siTypescript } from 'simple-icons'
import { Mark } from '../components/Mark'
import { usePointerVars } from '../hooks/usePointerVars'
import { profile, social } from '../data/profile'
import p640 from '../assets/img/portrait-640.webp'
import p960 from '../assets/img/portrait-960.webp'
import p1280 from '../assets/img/portrait-1280.webp'
import styles from './Hero.module.css'

const coreStack = [
  { icon: siJavascript, name: 'JavaScript' },
  { icon: siTypescript, name: 'TypeScript' },
  { icon: siReact, name: 'React' },
  { icon: siTailwindcss, name: 'Tailwind CSS' },
  { icon: siNextdotjs, name: 'Next.js' },
]

const step = (i: number) => ({ '--i': i }) as CSSProperties

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  usePointerVars(ref)

  return (
    <section ref={ref} id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <Mark className={styles.watermark} />

      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`mono ${styles.kicker}`} style={step(0)}>
            <span className={styles.dot} aria-hidden="true" />
            Desenvolvedor Web · {profile.location}
          </p>

          <h1 id="hero-title" className={styles.name}>
            <span className={styles.nameLine}>
              <span className={styles.nameInner} style={step(1)}>
                Tiago
              </span>
            </span>{' '}
            <span className={`${styles.nameLine} ${styles.nameAccent}`}>
              <span className={styles.nameInner} style={step(2)}>
                Forward
              </span>
            </span>
            <span className="sr-only">: {profile.role}</span>
          </h1>

          <p className={styles.statement} style={step(3)}>
            Construo interfaces em React, Next.js e TypeScript e levo ideias até o produto no ar.
          </p>
          <p className={styles.lead} style={step(4)}>
            Já cuidei do backoffice de uma plataforma com grande volume de acessos e da interface de
            esportes de um site em produção. Desde junho de 2026 fundo e desenvolvo o VueDrama, uma
            rede social para fãs de doramas que segue em produção, e sigo trabalhando em outros
            projetos.
          </p>

          <div className={styles.ctas} style={step(5)}>
            <a className={styles.primary} href="#vuedrama">
              Conhecer o VueDrama
              <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a className={styles.ghost} href="#projetos">
              Ver projetos
            </a>
            <a
              className={styles.ghost}
              href={social('github').href}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
            <a className={styles.ghost} href={`#contato`}>
              Contato
            </a>
            {profile.resume && (
              <a className={styles.ghost} href={profile.resume} download>
                <Download size={16} aria-hidden="true" />
                Currículo
              </a>
            )}
          </div>

          <ul className={styles.stack} aria-label="Tecnologias principais" style={step(6)}>
            {coreStack.map(({ icon, name }) => (
              <li
                key={name}
                title={name}
                style={{ ['--brand' as string]: `#${icon.hex === '000000' ? 'f3efe8' : icon.hex}` }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  fill="currentColor"
                  role="img"
                  aria-label={name}
                >
                  <path d={icon.path} />
                </svg>
              </li>
            ))}
          </ul>
        </div>

        <figure className={styles.figure}>
          <div className={styles.frame}>
            <img
              src={p960}
              srcSet={`${p640} 640w, ${p960} 960w, ${p1280} 1280w`}
              sizes="(max-width: 900px) 80vw, 40vw"
              width={960}
              height={1344}
              alt="Retrato de Tiago Forward sentado em um banquinho, de blazer preto sobre camisa azul-marinho, olhando para a câmera."
              fetchPriority="high"
            />
          </div>
        </figure>
      </div>
    </section>
  )
}
