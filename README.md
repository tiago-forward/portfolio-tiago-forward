# Portfólio de Tiago Forward

Portfólio de página única em React + TypeScript + Vite, com CSS Modules e tokens de design em variáveis CSS.
O VueDrama é o caso de produto central da seção de projetos.

## Rodar localmente

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm typecheck    # tsc -b --noEmit
pnpm build        # tsc -b && vite build, saída em dist/
pnpm preview      # serve o dist/ para conferir a build
pnpm format       # prettier
```

## Onde editar o conteúdo

Tudo que muda fica em `src/data/`:

| Arquivo | Conteúdo |
| --- | --- |
| `profile.ts` | nome, e-mail, links sociais, navegação, link do currículo |
| `experience.ts` | experiências e formação (fiéis ao currículo) |
| `projects.ts` | o case do VueDrama, as capturas e os outros projetos |
| `stack.ts` | tecnologias agrupadas, com a origem de cada uma |
| `markPath.ts` | assinatura vetorizada (gerado, não editar à mão) |

As seções ficam em `src/sections/` e os componentes compartilhados em `src/components/`.
Os tokens (cores, tipografia, espaçamento) estão em `src/styles/tokens.css`.

## Imagens e assets

Os originais ficam em `src/assets/raw/` (retrato, banner, capturas). O script abaixo gera as versões
otimizadas em `src/assets/img/` e, em `public/`, o favicon, o `og-image.jpg` e a assinatura em SVG
(vetorizada a partir do banner):

```bash
pnpm assets
```

Para trocar uma captura do VueDrama, substitua o PNG em `src/assets/raw/` e rode `pnpm assets`.

## Publicar

É um site estático: publique a pasta `dist/` em qualquer host (Vercel, Netlify, Cloudflare Pages,
GitHub Pages). Na Vercel basta importar o repositório; o framework Vite é detectado sozinho.

Quando o domínio estiver definido, informe-o na build para gerar `canonical`, `og:url` e URLs
absolutas de `og:image`:

```bash
VITE_SITE_URL=https://seu-dominio.com.br pnpm build
```

Sem essa variável essas tags ficam de fora (não há URL inventada).

## Currículo para download

O botão "Currículo" do hero só aparece quando `profile.resume` (em `src/data/profile.ts`) tem um caminho.
Está desligado de propósito: o PDF atual contém telefone pessoal. Para ativar, gere uma versão sem o
telefone, salve em `public/` e aponte o caminho em `profile.resume`.

## Acessibilidade

Link para pular ao conteúdo, landmarks e hierarquia de títulos, foco visível, menu mobile e abas do
VueDrama navegáveis por teclado, textos alternativos descritivos, links externos com
`rel="noopener noreferrer"` e `prefers-reduced-motion` respeitado.
