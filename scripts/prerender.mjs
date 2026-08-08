// Build-time prerenderer.
//
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
// Renders each route to static HTML, injects per-page <head> metadata, and
// writes the result so crawlers and non-JS fetchers get the full page text.
// The client bundle then hydrates that markup into the same interactive site.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const { render, SEO, SITE_ORIGIN } = await import(join(dist + '-ssr', 'entry-server.js'))

const template = readFileSync(join(dist, 'index.html'), 'utf8')

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function headFor(path) {
  const m = SEO[path]
  const url = SITE_ORIGIN + (path === '/' ? '/' : path)
  const image = SITE_ORIGIN + '/og-image.png'
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Sigra" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
  ].join('\n    ')
}

// Motion renders its `initial` state server-side, which leaves reveal-on-scroll
// sections at opacity:0 until JS runs. Text is present either way, but without
// this a non-JS visitor would see a blank page.
const NOSCRIPT_REVEAL =
  '<noscript><style>[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important}' +
  '[style*="height:0"],[style*="height: 0"]{height:auto!important;overflow:visible!important}</style></noscript>'

let failures = 0
for (const path of Object.keys(SEO)) {
  let html
  try {
    html = render(path)
  } catch (err) {
    console.error(`  FAIL  ${path}  ${err.message}`)
    failures++
    continue
  }

  let page = template
    // Replace the whole head block we control: title + description come from
    // the template, so strip them before injecting the per-page set.
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta\s+name="description"[^>]*>\s*/i, '')
    .replace('</head>', `  ${headFor(path)}\n    ${NOSCRIPT_REVEAL}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  if (!page.includes('<div id="root">')) {
    console.error(`  FAIL  ${path}  could not inject into #root`)
    failures++
    continue
  }

  // Emit both "<route>.html" and "<route>/index.html". Static hosts differ in
  // which one they resolve for a bare "/team" (no trailing slash); writing both
  // means the prerendered page wins over the SPA fallback rewrite either way.
  if (path === '/') {
    writeFileSync(join(dist, 'index.html'), page)
  } else {
    const flat = join(dist, `${path}.html`)
    const nested = join(dist, path, 'index.html')
    mkdirSync(dirname(flat), { recursive: true })
    mkdirSync(dirname(nested), { recursive: true })
    writeFileSync(flat, page)
    writeFileSync(nested, page)
  }

  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  console.log(`  ok    ${path.padEnd(14)} ${String(html.length).padStart(7)} B html, ${String(text.length).padStart(6)} B text`)
}

// robots.txt + sitemap.xml
const paths = Object.keys(SEO)
writeFileSync(
  join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`
)
writeFileSync(
  join(dist, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    paths
      .map(
        (p) =>
          `  <url>\n    <loc>${SITE_ORIGIN}${p === '/' ? '/' : p}</loc>\n` +
          `    <changefreq>monthly</changefreq>\n` +
          `    <priority>${p === '/' ? '1.0' : '0.8'}</priority>\n  </url>`
      )
      .join('\n') +
    '\n</urlset>\n'
)
console.log(`  ok    robots.txt + sitemap.xml (${paths.length} urls)`)

if (failures) {
  console.error(`\nprerender: ${failures} route(s) FAILED`)
  process.exit(1)
}
console.log('\nprerender: all routes written')
