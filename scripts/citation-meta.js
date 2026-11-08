// Adds Highwire Press <meta name="citation_*"> tags (Google Scholar, Zotero) to
// the <head> of each built deck: the deck itself, taken from its front matter
// (title, author, date, event, lang, keywords, url), and one citation_reference
// per entry found on its References / Bibliographie / Literatur slides.
//
// References are parsed from their APA-style text, so this is best effort:
// authors, date, title, DOI and ISBN are reliable; container, volume, issue and
// pages are filled in when the entry's layout makes them recognisable.
//
// Running it again replaces the tags it added before.
//
// Usage: node scripts/citation-meta.js [htmlDir] [deck.md ...]
const fs = require('fs')
const path = require('path')

const mdDir = 'md'
const htmlDir = process.argv[2] || '.'
const decks = process.argv.length > 3
  ? process.argv.slice(3).map((f) => path.basename(f))
  : fs.readdirSync(mdDir).filter((f) => f.endsWith('.md') && !f.startsWith('.'))

const SITE = 'https://julsraemy.ch/prezi'
const START = '<!-- citation-meta -->'
const END = '<!-- /citation-meta -->'

const REFS_HEADING = /^#{1,6}\s.*\b(References?|Bibliograph\w*|Literatur\w*)\b/im
const CREDITS_HEADING = /^#{1,6}\s.*\b(Image Credits|Crédits|Bildnachweis\w*)\b/i
const CONFERENCE = /conference|conférence|konferenz|colloque|colloquium|symposium|workshop|meeting|study day|congress/i

const MONTHS = {
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6, july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
  janvier: 1, février: 2, mars: 3, avril: 4, mai: 5, juin: 6, juillet: 7, août: 8, septembre: 9, octobre: 10, novembre: 11, décembre: 12,
  januar: 1, februar: 2, märz: 3, juni: 6, juli: 7, oktober: 10, dezember: 12,
}

const escapeAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const pad = (n) => String(n).padStart(2, '0')

// Flat "key: value" front matter is all these decks use
function frontMatter(source) {
  const [, block = ''] = source.split(/^---[ \t]*\r?$/m)
  const data = {}
  for (const line of block.split(/\r?\n/)) {
    const m = line.match(/^([\w-]+):\s*(.*?)\s*$/)
    if (!m) continue
    let v = m[2]
    if (/^'.*'$/.test(v)) v = v.slice(1, -1).replace(/''/g, "'")
    else if (/^".*"$/.test(v)) v = JSON.parse(v)
    data[m[1]] = v
  }
  return data
}

// "Julien A. Raemy and Murielle Cornut" -> ["Raemy, Julien A.", "Cornut, Murielle"]
const deckAuthors = (s) => (s || '').split(/\s*,\s*|\s+and\s+|\s*&\s*/).filter(Boolean).map((name) => {
  const parts = name.trim().split(/\s+/)
  return parts.length > 1 ? `${parts.pop()}, ${parts.join(' ')}` : name.trim()
})

// "2024-11-18" -> "2024/11/18"
const deckDate = (s) => (s || '').replace(/-/g, '/')

// Markdown inline syntax down to plain text, keeping *italics* markers so the
// structure of a reference can still be read from them
const plain = (s) => s
  .replace(/<[^>]+>/g, ' ')
  .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
  .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '$1 $2')
  .replace(/^\s*(?:[-*+]|\d+\.)\s+/, '')
  .replace(/^\s*:\w+:\s*/, '')
  .replace(/\*\*/g, '')
  .replace(/\\([*_[\]()])/g, '$1')
  .replace(/\s+/g, ' ')
  .trim()

function referenceParagraphs(source) {
  const slides = source.replace(/<!--[\s\S]*?-->/g, '').split(/^---[ \t]*\r?$/m).slice(2)
  const out = []
  for (const slide of slides) {
    if (!REFS_HEADING.test(slide)) continue
    let lines = slide.split(/\r?\n/)
    const cut = lines.findIndex((l) => CREDITS_HEADING.test(l) && !REFS_HEADING.test(l))
    if (cut >= 0) lines = lines.slice(0, cut)
    let current = []
    const flush = () => { if (current.length) out.push(plain(current.join(' '))); current = [] }
    for (const line of lines) {
      if (!line.trim() || /^\s*(#|```|<\/?div|!\[)/.test(line)) { flush(); continue }
      if (/^\s*([-*+]|\d+\.)\s/.test(line)) flush()
      current.push(line)
    }
    flush()
  }
  return out
}

const ITALIC = /(?:\*([^*\s](?:[^*]*[^*\s])?)\*|(?<![\w/])_([^_\s](?:[^_]*[^_\s])?)_(?![\w/]))/
const unitalic = (s) => s.replace(new RegExp(ITALIC.source, 'g'), (_, a, b) => a || b)
const tidy = (s) => unitalic(s || '').replace(/\s+/g, ' ').replace(/^[\s.,:;]+|[\s.,:;]+$/g, '').trim()
// Parentheticals and brackets APA appends to titles: (p. 29), (Version 1.2.0), [Report], (Poster)…
const stripTitleNotes = (s) => s.replace(/\s*(\((?:pp?\.|Version|arXiv:|Poster)[^)]*\)|\[[^\]]*\])/gi, '')

function splitAuthors(s) {
  return s
    .replace(/\s*\(Eds?\.\)|\s*\(Éds?\.\)|\s*\(Hrsg\.\)/g, '')
    .split(/\s*,?\s*&\s*|(?<=\.)\s*,\s+(?=[^,]+,)|(?<=\.),\s+(?=\S)/)
    .map((a) => a.replace(/^[\s,&]+|[\s,.]+$/g, ''))
    .filter((a) => a && !/^(…|\.\.\.)$/.test(a))
    // "Raemy, J. A" lost its final period to the split: put it back on initials
    .map((a) => (/,/.test(a) && /(^|[\s.-])\p{Lu}\p{Ll}?$/u.test(a) ? `${a}.` : a))
}

// The first sentence after the title: a publisher, or a conference with its
// place, possibly ending in pages ("…, 1–11." or "…, 28.")
function venue(ref, text) {
  let v = tidy(tidy(text).split(/\.\s+/)[0])
  const pages = v.match(/(?:^|,\s*)(\d+)(?:\s*[–‑-]\s*(\d+))?$/)
  if (pages) {
    Object.assign(ref, { firstpage: pages[1], lastpage: pages[2] })
    v = tidy(v.slice(0, pages.index))
  }
  if (v) ref[CONFERENCE.test(v) ? 'conference' : 'publisher'] = v
}

function parseReference(text) {
  const m = text.match(/^(.+?)\.?\s*\((\d{4})[a-z]?(?:,\s*([^)]*))?\)\.?\s*(.+)$/)
  if (!m) return null
  const [, authorText, year, when, restRaw] = m
  if (/\(/.test(authorText) || authorText.length > 1500) return null

  const ref = { authors: splitAuthors(authorText), date: year }
  if (when) {
    const [month, day] = when.toLowerCase().replace(/\./g, '').split(/\s+/)
    if (MONTHS[month]) ref.date += `/${pad(MONTHS[month])}` + (/^\d{1,2}$/.test(day) ? `/${pad(day)}` : '')
  }

  const doi = restRaw.match(/https?:\/\/(?:dx\.)?doi\.org\/(\S+?)[.,;]?(?=\s|$)/i)
  if (doi) ref.doi = decodeURIComponent(doi[1])
  const isbn = restRaw.match(/ISBN[:\s]*([\d-]{10,17}[\dX])/i)
  if (isbn) ref.isbn = isbn[1]

  // Structure without URLs, ISBNs or "Medium URL"-style leftovers
  let rest = restRaw.replace(/\S*https?:\/\/\S+/g, '').replace(/ISBN[:\s]*[\d-]+X?/gi, '').replace(/\bURL\b/g, '').trim()

  // [Doctoral Thesis, University of Basel], [Mémoire de master, HES-SO …]
  const thesis = rest.match(/\[(?:[^\],]*(?:thesis|dissertation|mémoire|master)[^\],]*),\s*([^\]]+)\]/i)
  if (thesis) ref.institution = tidy(thesis[1])

  let inBook = null
  const inSplit = rest.split(/[.:]\s+In\s+(?=\p{Lu})/u)
  let head = stripTitleNotes(inSplit[0])
  if (inSplit.length > 1) inBook = inSplit.slice(1).join('. In ')

  const italic = head.match(ITALIC)
  if (italic && italic.index === 0) {
    // *Book, thesis, report or talk title*. [Type, Institution]. Publisher.
    ref.title = italic[1] || italic[2]
    if (!ref.institution) venue(ref, head.slice(italic[0].length).replace(/\([^)]*\)/g, ''))
  } else if (italic) {
    // Article title. *Journal*, *vol*(issue), first–last.
    ref.title = head.slice(0, italic.index)
    ref.journal = italic[1] || italic[2]
    const tail = head.slice(italic.index + italic[0].length)
    const vol = tail.match(/^,\s*\*?(\d+)\*?(?:\((\d+)\))?(?:,\s*(\d+)\s*[–‑-]\s*(\d+))?/)
    if (vol) Object.assign(ref, { volume: vol[1], issue: vol[2], firstpage: vol[3], lastpage: vol[4] })
    // "*Conference name*, 28." is a proceedings page, not a volume
    if (CONFERENCE.test(ref.journal) && !(vol && (vol[2] || vol[3]))) {
      ref.conference = ref.journal
      delete ref.journal
      if (vol) { ref.firstpage = vol[1]; delete ref.volume }
    }
  } else {
    // No italics at all: the title is the first sentence
    const sentence = head.match(/^(.+?(?<!\b\p{Lu})[.?!])\s+(?=\S)(.*)$/u)
    ref.title = sentence ? sentence[1] : head
    const tail = sentence ? sentence[2] : ''
    const vol = tail.match(/^(.+?),\s*(\d+)\((\d+)\)(?:,\s*(\d+)\s*[–‑-]\s*(\d+))?/)
    if (vol) Object.assign(ref, { journal: vol[1], volume: vol[2], issue: vol[3], firstpage: vol[4], lastpage: vol[5] })
    else if (tail && !inBook && !ref.institution) venue(ref, tail)
  }

  if (inBook) {
    // In E. Editor (Eds.), *Book* (pp. 1–10). Publisher.
    const afterEds = inBook.replace(/^.*?\((?:Eds?|Éds?|Hrsg)\.\),\s*/, '')
    const book = afterEds.match(ITALIC)
    ref.book = book ? book[1] || book[2] : afterEds.split(/\s*\(pp?\.|\.\s+/)[0]
    const pages = inBook.match(/\(pp?\.\s*(\d+)\s*[–‑-]\s*(\d+)\)/)
    if (pages) Object.assign(ref, { firstpage: pages[1], lastpage: pages[2] })
    const publisher = inBook.split(/\)\.\s+/).pop()
    if (publisher && publisher !== inBook) ref.publisher = tidy(publisher.split(/\.\s+/)[0])
  }

  ref.title = tidy(stripTitleNotes(ref.title || ''))
  return ref.title ? ref : null
}

function referenceContent(ref) {
  const f = []
  const clean = (v) => String(v).replace(/;/g, ',').replace(/\s+/g, ' ').trim()
  const add = (k, v) => { if (v !== undefined && v !== null && String(v).trim()) f.push(`${k}=${clean(v)}`) }
  add('citation_title', ref.title)
  for (const a of ref.authors) add('citation_author', a)
  add('citation_publication_date', ref.date)
  add('citation_journal_title', ref.journal)
  add('citation_inbook_title', ref.book)
  add('citation_conference_title', ref.conference)
  add('citation_dissertation_institution', ref.institution)
  add('citation_publisher', ref.publisher)
  add('citation_volume', ref.volume)
  add('citation_issue', ref.issue)
  add('citation_firstpage', ref.firstpage)
  add('citation_lastpage', ref.lastpage)
  add('citation_isbn', ref.isbn)
  add('citation_doi', ref.doi)
  return f.join('; ')
}

function citationTags(deck, source) {
  const fm = frontMatter(source)
  const page = `${SITE}/${deck.replace(/\.md$/, '.html')}`
  const tags = []
  const meta = (name, content) => { if (content) tags.push(`<meta name="${name}" content="${escapeAttr(content)}">`) }

  meta('citation_title', fm.title)
  for (const a of deckAuthors(fm.author)) meta('citation_author', a)
  meta('citation_publication_date', deckDate(fm.date))
  meta('citation_conference_title', fm.event)
  meta('citation_language', (fm.lang || 'en').split('-')[0])
  const doi = (fm.url || '').match(/doi\.org\/(.+)$/i)
  if (doi) meta('citation_doi', doi[1])
  meta('citation_abstract_html_url', page)
  meta('citation_fulltext_html_url', page)
  for (const k of (fm.keywords || '').split(',')) meta('citation_keywords', k.trim())

  const seen = new Set()
  for (const text of referenceParagraphs(source)) {
    const ref = parseReference(text)
    if (!ref) continue
    const content = referenceContent(ref)
    if (seen.has(content)) continue
    seen.add(content)
    meta('citation_reference', content)
  }
  return tags
}

module.exports = { parseReference, referenceParagraphs, referenceContent }
if (require.main !== module) return

let failed = 0
for (const deck of decks) {
  const html = path.join(htmlDir, deck.replace(/\.md$/, '.html'))
  try {
    const tags = citationTags(deck, fs.readFileSync(path.join(mdDir, deck), 'utf8'))
    let out = fs.readFileSync(html, 'utf8')
    const block = new RegExp(`${START}[\\s\\S]*?${END}`)
    out = out.replace(block, '')
    if (!out.includes('</head>')) throw new Error('no </head>')
    out = out.replace('</head>', `${START}${tags.join('')}${END}</head>`)
    fs.writeFileSync(html, out)
    console.log(`${html}: ${tags.filter((t) => t.includes('citation_reference')).length} references`)
  } catch (e) {
    failed++
    console.error(`FAILED ${deck}: ${e.message}`)
  }
}

process.exit(failed ? 1 : 0)
