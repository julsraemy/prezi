// Renders each deck's title slide to <outDir>/<deck>.jpg for link previews.
// Only the first slide is rendered: full decks can take minutes because every
// remote image has to load first.
//
// Usage: node scripts/og-images.js [outDir] [deck.md ...]
const { execFileSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const mdDir = 'md'
const outDir = process.argv[2] || 'assets/og'
const decks = process.argv.length > 3
  ? process.argv.slice(3).map((f) => path.basename(f))
  : fs.readdirSync(mdDir).filter((f) => f.endsWith('.md') && !f.startsWith('.'))

// Front matter plus the first slide that has any content
const titleSlideOnly = (source) => {
  const [, frontMatter, ...slides] = source.split(/^---[ \t]*\r?$/m)
  const first = slides.find((slide) => slide.trim()) || ''
  return `---${frontMatter}---${first}`
}

fs.mkdirSync(outDir, { recursive: true })

let failed = 0
for (const deck of decks) {
  // Kept next to the deck so that relative paths still resolve
  const tmp = path.join(mdDir, `.og-${deck}`)
  const out = path.join(outDir, deck.replace(/\.md$/, '.jpg'))

  fs.writeFileSync(tmp, titleSlideOnly(fs.readFileSync(path.join(mdDir, deck), 'utf8')))
  try {
    execFileSync('npx', ['marp', '--html', '--no-stdin', '--image', 'jpeg', '--image-scale', '2', '--jpeg-quality', '95', tmp, '-o', out], {
      env: { ...process.env, PUPPETEER_TIMEOUT: '120000' },
      stdio: ['ignore', 'ignore', 'pipe'],
    })
    console.log(out)
  } catch (e) {
    failed++
    console.error(`FAILED ${deck}: ${e.message}`)
  } finally {
    fs.rmSync(tmp, { force: true })
  }
}

process.exit(failed ? 1 : 0)
