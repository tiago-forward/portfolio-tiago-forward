export type Origin = 'prod' | 'vuedrama' | 'curso'

export interface Tech {
  name: string
  origin: Origin
}

export interface StackGroup {
  id: string
  title: string
  note: string
  items: Tech[]
}

export const origins: Record<Origin, { label: string }> = {
  prod: { label: 'Trabalho profissional' },
  vuedrama: { label: 'VueDrama' },
  curso: { label: 'Estudos e projetos pessoais' },
}

// Baseado no currículo, nos repositórios do VueDrama e nos projetos públicos.
export const stackGroups: StackGroup[] = [
  {
    id: 'interface',
    title: 'Interface',
    note: 'A base do meu trabalho diário.',
    items: [
      { name: 'React', origin: 'prod' },
      { name: 'Next.js', origin: 'prod' },
      { name: 'TypeScript', origin: 'prod' },
      { name: 'JavaScript', origin: 'prod' },
      { name: 'HTML', origin: 'prod' },
      { name: 'CSS', origin: 'prod' },
    ],
  },
  {
    id: 'estilo',
    title: 'Estilo e componentes',
    note: 'Sistemas de estilo e design de interface.',
    items: [
      { name: 'Tailwind CSS', origin: 'prod' },
      { name: 'Styled Components', origin: 'prod' },
      { name: 'shadcn/ui', origin: 'vuedrama' },
      { name: 'Radix UI', origin: 'vuedrama' },
      { name: 'Motion', origin: 'vuedrama' },
    ],
  },
  {
    id: 'dados',
    title: 'Estado, dados e formulários',
    note: 'Integração com APIs e controle de estado.',
    items: [
      { name: 'TanStack Query', origin: 'vuedrama' },
      { name: 'Zustand', origin: 'vuedrama' },
      { name: 'Zod', origin: 'vuedrama' },
      { name: 'React Hook Form', origin: 'vuedrama' },
      { name: 'Axios', origin: 'vuedrama' },
      { name: 'Socket.IO', origin: 'vuedrama' },
    ],
  },
  {
    id: 'backend',
    title: 'Back-end e dados',
    note: 'O suficiente para construir e manter a API do VueDrama.',
    items: [
      { name: 'NestJS', origin: 'vuedrama' },
      { name: 'Prisma', origin: 'vuedrama' },
      { name: 'PostgreSQL', origin: 'vuedrama' },
      { name: 'Redis', origin: 'vuedrama' },
      { name: 'Docker', origin: 'vuedrama' },
    ],
  },
  {
    id: 'ferramentas',
    title: 'Ferramentas e infraestrutura',
    note: 'Fluxo de trabalho e publicação.',
    items: [
      { name: 'Git', origin: 'prod' },
      { name: 'GitHub', origin: 'prod' },
      { name: 'Cloudflare', origin: 'prod' },
      { name: 'Vercel', origin: 'curso' },
      { name: 'Azure', origin: 'curso' },
      { name: 'Asana', origin: 'prod' },
    ],
  },
  {
    id: 'estudo',
    title: 'Em estudo',
    note: 'Contato por cursos, sem uso profissional.',
    items: [
      { name: 'Angular', origin: 'curso' },
      { name: 'Python', origin: 'curso' },
      { name: 'React Native', origin: 'curso' },
    ],
  },
]

export const principles = [
  'Clean Architecture',
  'Domain-Driven Design',
  'Organização por feature',
  'Acessibilidade',
  'SEO',
  'Performance',
]

export const courses = [
  'Rocketseat: Fundamentos do React, Hooks, Next.js, Tailwind, HTTP e Performance, Clean Code, SEO para Devs',
  'DevQuest: Frontend (80 h)',
  'DIO: Frontend com Angular (68 h)',
  'Udemy: Node.js, React e React Native (25,5 h)',
  'Cubos Academy: UX/UI Design',
  'Curso em Vídeo: Algoritmos (40 h)',
]
