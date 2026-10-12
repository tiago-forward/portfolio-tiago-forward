import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Injeta og:url / canonical só quando VITE_SITE_URL estiver definido (domínio confirmado).
function siteMeta(siteUrl: string): Plugin {
  return {
    name: 'site-meta',
    transformIndexHtml(html) {
      const base = siteUrl.replace(/\/$/, '')
      const tags = base
        ? [
            `<link rel="canonical" href="${base}/" />`,
            `<meta property="og:url" content="${base}/" />`,
            `<meta property="og:image" content="${base}/og-image.jpg" />`,
            `<meta name="twitter:image" content="${base}/og-image.jpg" />`,
          ]
        : [
            `<meta property="og:image" content="/og-image.jpg" />`,
            `<meta name="twitter:image" content="/og-image.jpg" />`,
          ]
      return html.replace('<!--SITE_META-->', tags.join('\n    '))
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), siteMeta(env.VITE_SITE_URL ?? '')],
    build: { target: 'es2022', cssCodeSplit: true },
  }
})
