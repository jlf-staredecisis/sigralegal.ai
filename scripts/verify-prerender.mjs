// Verifies that every page's visible text — including collapsed expandables
// and all three depth-selector modes — is present in the served HTML.
//
//   node scripts/verify-prerender.mjs dist                     (local build)
//   node scripts/verify-prerender.mjs https://www.sigralegal.ai (deployed)
//
// Fetches raw HTML only. No JavaScript is executed, so this sees exactly what
// a crawler or a plain `curl` sees. Exits non-zero if any probe is missing.

import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const target = process.argv[2] || 'dist'
const isUrl = /^https?:\/\//.test(target)

// Probes are verbatim fragments of on-page copy. `where` explains what the
// fragment proves, so a failure names the thing that is actually missing.
const PAGES = {
  '/': [
    ['Current legal AI cannot withstand cross examination', 'Problem heading (visible)'],
    ['Stanford RegLabs', 'Problem section — COLLAPSED expandable'],
    ['damiencharlotin.com', 'Problem section — COLLAPSED expandable'],
    ['Every output traces to verified source material', 'Approach — COLLAPSED expandable'],
    ['Nothing leaves your control', 'Approach — COLLAPSED expandable'],
    ['Analysis can be independently verified by opposing experts', 'Capabilities — depth mode "glance"'],
    ['Every analytical outcome can be independently reproduced', 'Capabilities — depth mode "practice"'],
    ['Deterministic inference pipelines with pinned model versions', 'Capabilities — depth mode "hood"'],
    ['Most legal AI systems focus on generating answers', 'Q&A — depth mode "glance"'],
    ['Sigra preserves an audit trail of every analytical step', 'Q&A — depth mode "practice"'],
    ['The system records analytical operations before generating outputs', 'Q&A — depth mode "hood"'],
    ['Founding Director, Center for Advanced Life Cycle Engineering', 'Scientific Advisory'],
    ['Attested Intelligence', 'Hero + footer wordmark'],
    ['jlf@sigra.io', 'Footer contact (tonight’s edit)'],
    ['Sigra Technologies Inc', 'Footer copyright (tonight’s edit)'],
    ['cryptographically verified infrastructure', 'Forward Scope'],
  ],
  '/why-sigra': [
    ['The verification gap', 'Page heading'],
    ['Modern analytical work produces conclusions faster than it preserves reasoning', 'Lead paragraph'],
  ],
  '/technology': [
    ['Verification infrastructure', 'Page heading'],
    ['Sigra is not a single model or tool', 'Lead paragraph'],
    ['Every operation is logged', 'Body copy'],
  ],
  '/team': [
    ['Scientific oversight', 'Page heading'],
    ['Sigra is built at the intersection of law, technology, and evidentiary standards', 'Lead paragraph'],
  ],
  '/sigra-legal': [
    ['Sigra Legal applies the verification framework directly to litigation workflows', 'Lead paragraph'],
    ['End-to-end traceabil', 'What this enables'],
  ],
}

// Copy that must NOT appear anywhere — retired content and removed names.
const FORBIDDEN = [
  ['Garg', 'removed advisory entry'],
  ['Sanjam', 'removed advisory entry'],
  ['Why Now', 'removed section'],
  ['Rule of Evidence 707', 'removed section'],
  ['Launch: Q2 2026', 'removed date claim'],
  ['Sigra Systems', 'superseded entity name'],
]

const HEAD = [
  ['<title>', 'title tag'],
  ['name="description"', 'meta description'],
  ['property="og:title"', 'Open Graph title'],
  ['property="og:image"', 'Open Graph image'],
  ['name="twitter:card"', 'Twitter card'],
  ['rel="canonical"', 'canonical URL'],
]

async function load(path) {
  if (isUrl) {
    const url = target.replace(/\/$/, '') + (path === '/' ? '/' : path)
    const res = await fetch(url, { headers: { 'User-Agent': 'prerender-verify/1.0 (no-js)' } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.text()
  }
  return readFileSync(path === '/' ? join(target, 'index.html') : join(target, path, 'index.html'), 'utf8')
}

let failed = 0
console.log(`\nVerifying ${isUrl ? 'LIVE' : 'LOCAL'}: ${target}\n`)

for (const [path, probes] of Object.entries(PAGES)) {
  let html
  try {
    html = await load(path)
  } catch (err) {
    console.log(`FAIL  ${path}  — could not fetch: ${err.message}`)
    failed++
    continue
  }

  const missing = probes.filter(([needle]) => !html.includes(needle))
  const leaked = FORBIDDEN.filter(([needle]) => html.includes(needle))
  const headGaps = HEAD.filter(([needle]) => !html.includes(needle))
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()

  const ok = !missing.length && !leaked.length && !headGaps.length
  if (!ok) failed++

  console.log(
    `${ok ? 'PASS' : 'FAIL'}  ${path.padEnd(14)} ` +
      `${String(probes.length - missing.length)}/${probes.length} probes, ` +
      `head ${HEAD.length - headGaps.length}/${HEAD.length}, ` +
      `${text.length} B text`
  )
  for (const [needle, where] of missing) console.log(`        MISSING  "${needle}"  (${where})`)
  for (const [needle, where] of leaked) console.log(`        LEAKED   "${needle}"  (${where})`)
  for (const [needle, where] of headGaps) console.log(`        NO HEAD  ${needle}  (${where})`)
}

// Sitemap + robots
for (const f of ['sitemap.xml', 'robots.txt']) {
  try {
    const body = isUrl
      ? await (await fetch(`${target.replace(/\/$/, '')}/${f}`)).text()
      : readFileSync(join(target, f), 'utf8')
    const bad = isUrl && /<!doctype html/i.test(body)
    console.log(`${bad ? 'FAIL' : 'PASS'}  /${f.padEnd(13)}${bad ? ' — served HTML instead' : ` ${body.length} B`}`)
    if (bad) failed++
  } catch (err) {
    console.log(`FAIL  /${f}  ${err.message}`)
    failed++
  }
}

console.log(failed ? `\n${failed} page(s) FAILED\n` : '\nAll pages passed\n')
process.exit(failed ? 1 : 0)
