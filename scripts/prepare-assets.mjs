// Gera os assets otimizados a partir de src/assets/raw (originais fornecidos).
// Uso: pnpm assets
import { mkdir, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import sharp from 'sharp'

const require = createRequire(import.meta.url)
const potrace = require('potrace')

const RAW = 'src/assets/raw'
const OUT = 'src/assets/img'
const PUBLIC = 'public'

await mkdir(OUT, { recursive: true })
await mkdir(PUBLIC, { recursive: true })

// ---------- Retrato ----------
for (const width of [640, 960, 1280]) {
  await sharp(`${RAW}/portrait.jpg`)
    .resize({ width, kernel: 'lanczos3' })
    .webp({ quality: 80 })
    .toFile(`${OUT}/portrait-${width}.webp`)
}

// ---------- Capturas do VueDrama ----------
const shots = {
  'vd-hero': 1440,
  'vd-doramas': 1440,
  'vd-detalhe': 1440,
  'vd-mobile-hero': 390,
  'vd-mobile-detalhe': 390,
  'gh-blog': 1280,
}
for (const [name, width] of Object.entries(shots)) {
  await sharp(`${RAW}/${name}.png`)
    .resize({ width })
    .webp({ quality: 84 })
    .toFile(`${OUT}/${name}.webp`)
}

// Portfólio pessoal (tema League of Legends): recorta a barra lateral com avatares de terceiros.
await sharp(`${RAW}/legend.png`)
  .extract({ left: 0, top: 0, width: 1150, height: 900 })
  .resize({ width: 1150 })
  .webp({ quality: 84 })
  .toFile(`${OUT}/legend.webp`)

// ---------- Assinatura (monograma) vetorizada ----------
// Recorte do banner original; ampliado e vetorizado para escalar sem pixelar.
const crop = await sharp(`${RAW}/banner.jpg`)
  .extract({ left: 505, top: 25, width: 160, height: 160 })
  .resize({ width: 1280, kernel: 'lanczos3' })
  .greyscale()
  .blur(2.2)
  .png()
  .toBuffer()

const svg = await new Promise((resolve, reject) => {
  potrace.trace(
    crop,
    {
      threshold: 110,
      blackOnWhite: false,
      turdSize: 80,
      optTolerance: 0.4,
      color: '#ffffff',
      background: 'transparent',
    },
    (err, out) => (err ? reject(err) : resolve(out)),
  )
})

const d = [...svg.matchAll(/ d="([^"]+)"/g)].map((m) => m[1]).join(' ')
const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1] ?? '0 0 1280 1280'

await writeFile(
  'src/data/markPath.ts',
  `// Gerado por scripts/prepare-assets.mjs a partir da assinatura do banner. Não editar à mão.\nexport const MARK_VIEWBOX = '${viewBox}'\nexport const MARK_PATH = '${d}'\n`,
)

const markSvg = (fill, bg) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${bg ? '-300 -300 1880 1880' : viewBox}">${
    bg ? `<rect x="-300" y="-300" width="1880" height="1880" rx="380" fill="${bg}"/>` : ''
  }<path fill="${fill}" fill-rule="evenodd" d="${d}"/></svg>`

await writeFile(`${PUBLIC}/favicon.svg`, markSvg('#f3efe8', '#0a0b0e'))
await writeFile(`${PUBLIC}/mark.svg`, markSvg('#f3efe8'))

// favicon PNG (apple-touch / fallback)
await sharp(Buffer.from(markSvg('#f3efe8', '#0a0b0e')), { density: 300 })
  .resize(180, 180)
  .png()
  .toFile(`${PUBLIC}/apple-touch-icon.png`)

// ---------- Imagem de compartilhamento (1200x630) ----------
const markPng = await sharp(Buffer.from(markSvg('#f3efe8')), { density: 400 })
  .resize({ height: 300 })
  .png()
  .toBuffer()

const portrait = await sharp(`${RAW}/portrait.jpg`)
  .resize({ width: 480, height: 630, fit: 'cover', position: 'top' })
  .toBuffer()

const ogText = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="630">
     <style>
       .n{font:700 64px 'Segoe UI','Helvetica Neue',Arial,sans-serif;fill:#f3efe8;letter-spacing:1px}
       .r{font:400 22px 'Segoe UI','Helvetica Neue',Arial,sans-serif;fill:#a9afbd;letter-spacing:7px}
       .s{font:400 26px 'Segoe UI','Helvetica Neue',Arial,sans-serif;fill:#6f95ff}
     </style>
     <text x="0" y="420" class="n">Tiago Forward</text>
     <text x="2" y="466" class="r">DESENVOLVEDOR FRONTEND</text>
     <text x="2" y="540" class="s">React · Next.js · TypeScript · VueDrama</text>
   </svg>`,
)

await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#0a0b0e' } })
  .composite([
    { input: portrait, left: 720, top: 0 },
    { input: markPng, left: 70, top: 70 },
    { input: ogText, left: 70, top: 0 },
  ])
  .jpeg({ quality: 88 })
  .toFile(`${PUBLIC}/og-image.jpg`)

console.log('assets ok')
