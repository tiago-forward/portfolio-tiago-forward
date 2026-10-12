import vdHero from '../assets/img/vd-hero.webp'
import vdDoramas from '../assets/img/vd-doramas.webp'
import vdDetalhe from '../assets/img/vd-detalhe.webp'
import vdMobileHero from '../assets/img/vd-mobile-hero.webp'
import vdMobileDetalhe from '../assets/img/vd-mobile-detalhe.webp'
import ghBlog from '../assets/img/gh-blog.webp'

export interface ProductShot {
  id: string
  label: string
  device: 'desktop' | 'mobile'
  src: string
  width: number
  height: number
  alt: string
}

/** Capturas reais de https://vuedrama.com.br, feitas em 12/10/2026. */
export const vuedramaShots: ProductShot[] = [
  {
    id: 'inicio',
    label: 'Início',
    device: 'desktop',
    src: vdHero,
    width: 1440,
    height: 900,
    alt: 'Página inicial do VueDrama: manchete "Seu cantinho para viver cada dorama", com destaques em alta e atividades da comunidade.',
  },
  {
    id: 'catalogo',
    label: 'Catálogo',
    device: 'desktop',
    src: vdDoramas,
    width: 1440,
    height: 900,
    alt: 'Catálogo de doramas do VueDrama com navegação por gênero e país, filtros laterais e mais de 20 mil resultados.',
  },
  {
    id: 'dorama',
    label: 'Dorama',
    device: 'desktop',
    src: vdDetalhe,
    width: 1440,
    height: 900,
    alt: 'Página de um dorama no VueDrama com nota, sinopse, botões de adicionar à lista, favoritar e abas de elenco, reviews e comunidade.',
  },
]

export const vuedramaMobile: ProductShot[] = [
  {
    id: 'mobile-inicio',
    label: 'Início (mobile)',
    device: 'mobile',
    src: vdMobileHero,
    width: 390,
    height: 844,
    alt: 'Versão mobile da página inicial do VueDrama, com navegação inferior por abas.',
  },
  {
    id: 'mobile-dorama',
    label: 'Dorama (mobile)',
    device: 'mobile',
    src: vdMobileDetalhe,
    width: 390,
    height: 844,
    alt: 'Página de um dorama na versão mobile do VueDrama.',
  },
]

export const vuedrama = {
  name: 'VueDrama',
  url: 'https://vuedrama.com.br/',
  instagram: 'https://www.instagram.com/vuedrama/',
  tagline: 'A rede social dos dorameiros.',
  clarification:
    'Não é uma plataforma de streaming. É o lugar onde a comunidade registra, avalia e conversa sobre o que assiste.',
  whatItSolves:
    'Reúne em um só lugar o que a pessoa já viu, o que está vendo, o que quer ver, o que achou (sem spoiler) e com quem conversar sobre isso.',
  audience:
    'Fãs de doramas coreanos, japoneses, chineses, taiwaneses e tailandeses, em português do Brasil.',
  role: 'Fundador, responsável pelo produto, pela arquitetura e por todo o desenvolvimento: frontend, API e backoffice.',
  codeNote: 'Código-fonte privado.',
  features: [
    {
      title: 'Catálogo aberto, sem conta',
      text: 'Sinopse, elenco, avaliações e comentários de cada título, com filtros por gênero e país. Ler é público; interagir pede login.',
    },
    {
      title: 'Biblioteca e watchlist',
      text: 'Status de cada título (quero ver, assistindo, assistido) e favoritos, ligados ao perfil.',
    },
    {
      title: 'Reviews sem spoiler',
      text: 'Notas e textos com reações da comunidade.',
    },
    {
      title: 'Seleções',
      text: 'Listas temáticas criadas pelos usuários, com curtidas e comentários.',
    },
    {
      title: 'Perfil público',
      text: 'Estatísticas, destaques, top 10 e insígnias que se desbloqueiam por evento.',
    },
    {
      title: 'Amizades, fórum e chat',
      text: 'Amizades e comentários, fórum com tags e conversas 1:1 em tempo real com presença online.',
    },
    {
      title: 'Gamificação',
      text: 'Check-in diário, missões, níveis e coleção de photocards, com sorteio e cobrança feitos só no servidor.',
    },
    {
      title: 'Backoffice',
      text: 'Painel administrativo para usuários, avaliações, seleções, comentários, insígnias, notificações e estatísticas.',
    },
  ],
  decisions: [
    {
      title: 'Sem catálogo próprio',
      text: 'Os metadados vêm do TMDB sob demanda. O banco guarda só o social (reviews, listas, amizades) e um cache mínimo por título, e nenhuma tabela social aponta para um ID do TMDB. Trocar de provedor no futuro não mexe no modelo.',
    },
    {
      title: 'Rigor proporcional ao papel',
      text: 'A API usa Clean Architecture e DDD com bounded contexts, pensada para crescer sem reescrita. O app público usa uma versão enxuta em camadas por feature. O backoffice, quase todo CRUD, fica simples de propósito. Cada escolha está registrada em ADR.',
    },
    {
      title: 'Autenticação por OTP',
      text: 'Login por código enviado por e-mail, token de acesso curto mantido só em memória e refresh token opaco em cookie HttpOnly. Quem decide permissão é sempre a API, nunca o cliente.',
    },
    {
      title: 'Catálogo público e SEO',
      text: 'Páginas de dorama, gênero e país renderizadas no servidor e indexáveis, com redirects 308 reais nas URLs antigas. O botão de interação continua visível para quem não tem conta e devolve a pessoa à mesma página depois do login.',
    },
  ],
  stack: [
    'React 19',
    'Next.js 16',
    'TypeScript',
    'Tailwind CSS',
    'TanStack Query',
    'Zustand',
    'Zod',
    'NestJS',
    'Prisma',
    'PostgreSQL',
    'Redis',
    'WebSocket',
    'Docker',
  ],
} as const

export interface SideProject {
  id: string
  name: string
  kind: 'Profissional' | 'Estudo público'
  summary: string
  contribution: string
  stack: string[]
  image?: { src: string; width: number; height: number; alt: string }
  links: { label: string; href: string }[]
  note?: string
}

export const sideProjects: SideProject[] = [
  {
    id: 'esportes',
    name: 'Interface da área de esportes',
    kind: 'Profissional',
    summary:
      'Nova interface de esportes do site oficial da FDS Games, no lugar de um sistema de terceiros embutido por iframe.',
    contribution:
      'Design e implementação da interface e integração do código React como Web Component dentro do site em Nuxt.js e Vue. Variáveis globais centralizam cores, rotas e temas.',
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'Web Components',
      'Styled Components',
      'Tailwind CSS',
    ],
    links: [],
    note: 'Produto interno, sem acesso público.',
  },
  {
    id: 'rifas',
    name: 'Plataforma interna de rifas',
    kind: 'Profissional',
    summary:
      'Plataforma interna completa de rifas, com autenticação, pagamentos e consumo de APIs.',
    contribution:
      'Desenvolvimento do frontend e das integrações: autenticação, pagamentos, APIs e Cloudflare para segurança e desempenho.',
    stack: ['React', 'Next.js', 'TypeScript', 'Cloudflare'],
    links: [],
    note: 'Produto interno, sem acesso público.',
  },
  {
    id: 'github-blog',
    name: 'GitHub Blog',
    kind: 'Estudo público',
    summary:
      'Blog que transforma as issues de um repositório do GitHub em posts, com perfil, busca e página de leitura. Desafio da Rocketseat.',
    contribution:
      'Consumo da API do GitHub com Axios, roteamento, formulário validado com React Hook Form e Zod, e estilização com Styled Components.',
    stack: ['React', 'Vite', 'TypeScript', 'React Hook Form', 'Zod', 'Styled Components'],
    image: {
      src: ghBlog,
      width: 1280,
      height: 800,
      alt: 'Captura do GitHub Blog: cabeçalho com perfil e lista de publicações geradas a partir de issues.',
    },
    links: [
      { label: 'Ver online', href: 'https://github-blog-desafio-react.vercel.app/' },
      { label: 'Código', href: 'https://github.com/tiago-forward/github-blog-desafio-react' },
    ],
  },
  {
    id: 'dt-money',
    name: 'DT Money',
    kind: 'Estudo público',
    summary:
      'Controle de transações financeiras feito no curso de ReactJS da Rocketseat, com foco em consumo de API e performance.',
    contribution:
      'Axios contra uma API local, compartilhamento de contexto com use-context-selector e medição com o Profiler do React usando useCallback, memo e useMemo.',
    stack: ['React', 'TypeScript', 'Styled Components', 'Radix UI', 'Axios'],
    links: [
      { label: 'Código', href: 'https://github.com/tiago-forward/dt-money-react-rocketseat' },
    ],
  },
]
