export interface SocialLink {
  id: 'github' | 'linkedin' | 'instagram' | 'email'
  label: string
  href: string
  handle: string
}

export const profile = {
  name: 'Tiago Lacerda Ferreira',
  brand: 'Tiago Forward',
  role: 'Desenvolvedor Frontend',
  location: 'Campina Grande, PB',
  email: 'devtiagoforward@gmail.com',
  /**
   * Link público do currículo. O PDF atual contém telefone pessoal, por isso fica desativado:
   * para ligar o botão, publique uma versão sem telefone em /public e informe o caminho aqui.
   */
  resume: null as string | null,
} as const

export const socials: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/tiago-forward',
    handle: '@tiago-forward',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tiago-lacerda-devfrontend/',
    handle: 'tiago-lacerda-devfrontend',
  },
  {
    id: 'instagram',
    label: 'Instagram do VueDrama',
    href: 'https://www.instagram.com/vuedrama/',
    handle: '@vuedrama',
  },
  {
    id: 'email',
    label: 'E-mail',
    href: 'mailto:devtiagoforward@gmail.com',
    handle: 'devtiagoforward@gmail.com',
  },
]

export const social = (id: SocialLink['id']): SocialLink => {
  const found = socials.find((s) => s.id === id)
  if (!found) throw new Error(`Link social não encontrado: ${id}`)
  return found
}

export const navItems = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'stack', label: 'Stack' },
  { id: 'contato', label: 'Contato' },
] as const

export type SectionId = (typeof navItems)[number]['id']
