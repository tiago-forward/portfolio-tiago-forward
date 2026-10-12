import { ScrollProgress } from './components/ScrollProgress'
import { useScrollVars } from './hooks/useScrollVars'
import { useSmoothAnchors } from './hooks/useSmoothAnchors'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Stack } from './sections/Stack'

export default function App() {
  useScrollVars()
  useSmoothAnchors()
  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
