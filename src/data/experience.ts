export interface Experience {
  id: string
  company: string
  role: string
  period: string
  context: string
  highlights: string[]
  stack: string[]
  featured?: boolean
}

// Conteúdo fiel ao currículo; nada aqui traz números ou resultados que não estejam documentados.
export const experiences: Experience[] = [
  {
    id: 'vuedrama',
    company: 'VueDrama',
    role: 'Fundador e desenvolvedor',
    period: 'Jun 2026 – atual',
    context:
      'Plataforma social para fãs de doramas, no ar em vuedrama.com.br. Idealização, produto e desenvolvimento de ponta a ponta.',
    highlights: [
      'Interface em React, Next.js, TypeScript e Tailwind CSS, com componentes reutilizáveis e layout responsivo.',
      'API própria em NestJS, Prisma e PostgreSQL, além de um backoffice administrativo.',
      'Integração com a API do TMDB para metadados de títulos, sem manter catálogo próprio.',
      'Planejamento da arquitetura, modelagem das funcionalidades e evolução contínua do produto.',
    ],
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'Docker',
    ],
    featured: true,
  },
  {
    id: 'officecom',
    company: 'OfficeCom Brasil',
    role: 'Desenvolvedor de Sistemas',
    period: 'Nov 2025 – Out 2026',
    context:
      'Plataforma Certeiro, com grande volume de acessos e operações simultâneas, focada em performance, escalabilidade e experiência do usuário.',
    highlights: [
      'Desenvolvimento e manutenção do backoffice da plataforma em React, Next.js e TypeScript.',
      'Novas funcionalidades, correção de bugs e refinamentos de usabilidade e de interface.',
      'Construção de uma nova versão sobre arquitetura moderna e escalável, e migração e refatoração de funcionalidades existentes.',
      'Integração com APIs em contato próximo com o time de backend; componentes reutilizáveis seguindo os padrões do time.',
    ],
    stack: ['React', 'Next.js', 'TypeScript'],
  },
  {
    id: 'fds',
    company: 'FDS Games',
    role: 'Programador de Sistemas',
    period: 'Jan 2025 – Out 2025',
    context:
      'Frontend de produtos internos e da área de esportes do site oficial, construído em Nuxt.js e Vue.',
    highlights: [
      'Nova interface da área de esportes, substituindo o sistema de terceiros embutido por iframe, com integração nativa à plataforma.',
      'Código React empacotado como Web Component para rodar dentro do site em Nuxt.js e Vue.',
      'Plataforma interna de rifas completa: autenticação, integração de pagamentos, consumo de APIs e Cloudflare para segurança e desempenho.',
      'Frontend de um sistema interno de registro de horários por escala, com calendário interativo.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Styled Components', 'Tailwind CSS', 'Cloudflare'],
  },
]

export const education = {
  institution: 'UNINASSAU',
  course: 'Análise e Desenvolvimento de Sistemas',
  period: '2022 – 2024',
}
