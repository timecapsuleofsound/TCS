# TCS — Architecture Document

**Project:** Time Capsule of Sound  
**Production URL:** https://tcs-rust.vercel.app  
**Target domain:** tcats.com *(go-live on hold — see Constraints)*  
**Last updated:** June 2026

---

## Overview

Time Capsule of Sound (TCS) is a statically rendered Next.js web application hosted on Vercel. All pages are pre-rendered at build time and served from Vercel's global CDN. A headless CMS layer (Sanity) is planned to replace hardcoded content, and a Blog and Ecommerce store are planned as future Epics.

---

## Frontend Framework

| Concern | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Rendering | Static prerendering — all pages `○ Static` at build time |
| React model | Server Components by default; `'use client'` only where interactivity is required |

### Client Components (`'use client'`)

| Component | Reason for Client Boundary |
|---|---|
| `Navbar.tsx` | `useState` (mobile menu open/close), `usePathname` (active link highlight) |
| `TwitchEmbed.tsx` | Reads `window.location.hostname` at runtime — required by Twitch iframe `parent` param |
| `ArchivesGrid.tsx` | Platform filter pill state (`useState`) |
| `NewsletterForm.tsx` | Form `onSubmit` handler |

All other components and pages are Server Components.

---

## Styling

| Concern | Technology |
|---|---|
| CSS Framework | Tailwind CSS v4 |
| Configuration | `@theme inline {}` block in `app/globals.css` — no `tailwind.config.js` |
| Brand tokens | CSS custom properties: colors, surfaces, grays defined under `@theme inline` |
| Component classes | Defined in `@layer components` in `globals.css` |

### Design Token Reference

```css
--color-tcs-black:    #0a0a0a
--color-tcs-ice:      #7dd3e8   /* primary accent */
--color-tcs-ice-hover:#5bbdd6
--color-tcs-red:      #cc2200   /* secondary accent */
--color-tcs-red-light:#e63b1f
```

### Reusable Component Classes

| Class | Description |
|---|---|
| `.btn-primary` | Ice-blue filled button |
| `.btn-secondary` | Ice-blue outlined button |
| `.btn-live` | Red pill with animated pulse dot (live indicator) |
| `.card-tcs` | Dark surface card with border and hover state |
| `.container-tcs` | Max-width 1280px, responsive horizontal padding |
| `.section-label` | Ice-blue uppercase tracking label |
| `.heading-display` | Bebas Neue large display heading |
| `.heading-section` | Bebas Neue section heading |

---

## Typography

| Font | Usage | Loading |
|---|---|---|
| **Teko** | Display headings, section headings | `next/font/google`, weights 400 + 600, `display: 'swap'` |
| **Inter** | Body copy, UI text, labels | `next/font/google`, `display: 'swap'` |

Fonts are loaded in `app/layout.tsx` and injected as CSS variables (`--font-teko`, `--font-inter`) available throughout the app.

---

## Image Handling

- All images use `next/image` with `fill` + `sizes` props
- Hero images include `priority` prop to avoid LCP penalty
- Format priority: **AVIF > WebP** (configured in `next.config.ts`)
- Device sizes: `[640, 750, 828, 1080, 1200, 1920]`
- Image sizes: `[16, 32, 48, 64, 96, 128, 256]`
- Remote patterns: Unsplash (`images.unsplash.com`); Sanity CDN to be added (TCS-73)

### Asset Directory Structure

```
public/
└── images/
    ├── logo/          ← TCS logo (PNG — SVG export flagged as pre-launch debt)
    ├── hero/          ← Full-bleed hero and section images
    └── events/        ← Event flyer images (e.g. chosen-few-2026.png)
```

---

## Application Routes

| Route | File | Render Type | Notes |
|---|---|---|---|
| `/` | `app/page.tsx` | Static | Hero + 4 featured sections + CTA strip |
| `/streams` | `app/streams/page.tsx` | Static | Twitch embed + YouTube + platform cards |
| `/archives` | `app/archives/page.tsx` | Static | ArchivesGrid with platform filter |
| `/events` | `app/events/page.tsx` | Static | Upcoming + past event cards |
| `/time-capsule` | `app/time-capsule/page.tsx` | Static | History, defining moments, timeline |
| `/community` | `app/community/page.tsx` | Static | Social links + newsletter form |
| `/about` | `app/about/page.tsx` | Static | Mission, story, what we do, vision, contact |
| `*` | `app/not-found.tsx` | Static | Custom 404 |
| `/blog` | *(planned — TCS-79)* | Static + ISR | Blog index — post grid, tag filter |
| `/blog/[slug]` | *(planned — TCS-80)* | Static + ISR | Individual post — rich text, author, related |
| `/store` | *(planned — Ecommerce Epic)* | TBD | Merchandise / digital downloads |

---

## Component Architecture

```
app/
├── layout.tsx                  ← Root layout: fonts, global metadata, Navbar + Footer
├── globals.css                 ← Tailwind v4 config, brand tokens, component classes
├── page.tsx                    ← Home page (Server Component)
├── streams/page.tsx
├── archives/page.tsx
├── events/page.tsx
├── time-capsule/page.tsx
├── community/page.tsx
├── about/page.tsx
├── not-found.tsx               ← Custom 404
└── components/
    ├── Navbar.tsx              ← 'use client'
    ├── Footer.tsx              ← Server Component
    ├── SocialIcon.tsx          ← Server Component — simple-icons brand SVGs
    ├── TwitchEmbed.tsx         ← 'use client'
    ├── ArchivesGrid.tsx        ← 'use client'
    └── NewsletterForm.tsx      ← 'use client'
```

---

## SEO & Metadata

| Concern | Implementation |
|---|---|
| Global metadata | `app/layout.tsx` — `metadataBase`, OG image, Twitter card, favicon |
| Per-page metadata | `generateMetadata` export in each `page.tsx` |
| Title template | `"%s \| Time Capsule of Sound"` applied automatically |
| Sitemap | `next-sitemap` — generates `sitemap.xml`, `sitemap-0.xml`, `robots.txt` as postbuild step |
| Robots | All pages allowed (`allow: /`); `/_not-found` excluded |
| `metadataBase` | `https://tcs-rust.vercel.app` (update to `https://tcats.com` at go-live) |

```json
// next-sitemap.config.js
{
  "siteUrl": "process.env.SITE_URL || 'https://tcs-rust.vercel.app'",
  "generateRobotsTxt": true,
  "exclude": ["/_not-found"]
}
```

---

## Content Architecture

### Current State (Pre-CMS)

All content is hardcoded in TSX source files. No database or CMS involved.

| Content Type | Location |
|---|---|
| Events | `app/events/page.tsx` — `upcomingEvents[]` and `pastEvents[]` arrays |
| Archive mixes | `app/components/ArchivesGrid.tsx` — `mixes[]` array |
| Featured homepage sections | `app/page.tsx` — `featuredSections[]` array |
| Time capsule eras + moments | `app/time-capsule/page.tsx` — `eras[]` and `moments[]` arrays |
| All other copy | Inline JSX in each page file |

### Planned CMS Layer — Sanity (TCS-5)

Sanity replaces all hardcoded content arrays. The Next.js frontend fetches content via GROQ queries at build time, with on-demand ISR revalidation triggered by Sanity publish events.

```
Sanity Studio (browser-based visual editor)
        │
        ▼  publish / unpublish
Sanity Content Lake (hosted)
        │
        ▼  GROQ fetch (build time + on-demand ISR)
Next.js App (Vercel)
        │
        ▼  static HTML + CDN
tcs-rust.vercel.app / tcats.com
```

#### Sanity Document Schemas (planned)

| Schema | Fields | Replaces |
|---|---|---|
| `event` | title, date, time, location, description, badge, ticketUrl, coverImage, slug | Hardcoded events array |
| `mix` | title, artist, platform, duration, recorded, era, url | Hardcoded mixes array |
| `featuredSection` | label, heading, body, cta, href, image, reverse, order | Hardcoded featured sections |
| `post` | title, slug, author, publishedAt, coverImage, excerpt, body (Portable Text), tags | New — Blog Epic |
| `author` | name, slug, avatar, bio | New — Blog Epic |

#### ISR Revalidation Flow

```
Sanity webhook (on publish)
        │
        ▼  POST /api/revalidate  (SANITY_REVALIDATE_SECRET validated)
Next.js API Route (app/api/revalidate/route.ts)
        │
        ▼  revalidatePath('/events') | revalidatePath('/archives') | revalidatePath('/blog/[slug]')
Vercel CDN — stale page purged, new static page generated within ~60 seconds
```

---

## Hosting & Deployment

| Concern | Detail |
|---|---|
| Host | Vercel |
| Auto-deploy trigger | Push to `main` branch |
| Preview environments | Vercel preview URL generated per PR branch |
| Build command | `next build && next-sitemap` |
| Environment variables | `SITE_URL` — used by `metadataBase` and `next-sitemap` |
| Production URL | `https://tcs-rust.vercel.app` |
| Target domain | `https://tcats.com` — DNS cutover on hold (TCS-27, TCS-69) |

### Planned Environment Variables (Sanity — TCS-71/TCS-73)

| Variable | Scope | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Public | Sanity project identifier |
| `NEXT_PUBLIC_SANITY_DATASET` | Public | Dataset name (`production`) |
| `SANITY_API_TOKEN` | Server-only | Write token — never exposed to browser |
| `SANITY_REVALIDATE_SECRET` | Server-only | Validates incoming ISR webhook requests |

---

## Source Control & Branching

| Concern | Detail |
|---|---|
| Repository | GitHub — `github.com/akiliking/TCS` (private) |
| Branching strategy | GitHub Flow — feature branches → PR → merge to `main` |
| Branch protection | `main` protected; PRs required; 0 required approvals (self-merge allowed) |
| Deployment on merge | Vercel auto-deploys every merge to `main` |

---

## Third-Party Integrations

### Live

| Service | Purpose | Integration Method |
|---|---|---|
| Twitch | Live stream embed | `TwitchEmbed.tsx` — iframe with `window.location.hostname` as `parent` param |
| Mixcloud | Archive mix hosting | External links (`https://www.mixcloud.com/TimeCapsuleofSound`) |
| SoundCloud | Archive mix hosting | External links (`https://soundcloud.com/TimeCapsuleofSound`) |
| YouTube | VODs + archive | External links (`https://www.youtube.com/TimeCapsuleofSound`) |

### Social Handles (Footer + Community page)

| Platform | Handle / URL |
|---|---|
| Facebook | `/TimeCapsuleofSound` |
| X (Twitter) | `@TimeCapofSound` |
| Instagram | `@TimeCapsuleofSound` |
| Twitch | `TimeCapsuleofSound` |
| YouTube | `TimeCapsuleofSound` |

### Planned

| Service | Purpose | Epic / Story |
|---|---|---|
| Sanity | Headless CMS | TCS-5 (TCS-71 → TCS-77) |
| Sanity Studio | Visual content editor for stakeholders | TCS-5 |
| Vercel ISR webhook | On-demand page revalidation on Sanity publish | TCS-76 |
| Shopify | Ecommerce — merch + digital downloads (proposed) | TCS-[Store] |

---

## Project Structure

```
/
├── app/                        ← Next.js App Router
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── streams/
│   ├── archives/
│   ├── events/
│   ├── time-capsule/
│   ├── community/
│   ├── about/
│   ├── not-found.tsx
│   └── components/
├── public/
│   └── images/
│       ├── logo/
│       ├── hero/
│       └── events/
├── docs/
│   ├── architecture.md         ← this file
│   ├── brand.md                ← design system: colors, typography, tone
│   └── copy.md                 ← all page copy and microcopy
├── next.config.ts
├── next-sitemap.config.js
├── tsconfig.json
└── package.json
```

---

## Jira Epic Map

| Epic | Title | Status | Notes |
|---|---|---|---|
| TCS-1 | Brand Experience & Website Redesign | ✅ Done | 7-page site live on Vercel |
| TCS-5 | Content Management & Administration | 🔲 To Do | Sanity CMS — 7 stories ready (TCS-71–77) |
| TCS-70 | Blog — Culture, News & Stories | 🔲 To Do | Depends on TCS-5 — 6 stories ready (TCS-78–83) |
| TCS-69 | Go Live | ⏸ On Hold | DNS cutover + tcats.com migration — awaiting stakeholder sign-off |
| TCS-[Store] | Ecommerce & Merchandise | 🔲 Proposed | Shopify headless (phase 2) or Buy Button MVP (phase 1) |

---

## Architectural Constraints & Known Debt

| Item | Detail | Resolution |
|---|---|---|
| **Live site risk** | `tcats.com` is an active HostPapa site. DNS cutover (TCS-27) and go-live (TCS-23) are On Hold under TCS-69 pending stakeholder sign-off. No changes that impact the live domain may proceed without explicit approval. | Stakeholder sign-off required before TCS-69 is unblocked |
| **Logo file size** | Logo is a 680KB PNG. Should be exported as SVG before launch for performance and scaling. | Pre-launch debt — noted in TCS-26 and `next.config.ts` comment |
| **Hardcoded content** | Events, mixes, and featured sections are currently in TSX source files. Code deployment required for any content change. | Resolved by TCS-5 (Sanity migration) |
| **No API routes** | The app is currently 100% static — no server-side logic. First API route will be the ISR revalidation webhook (TCS-76). | By design until Sanity integration |
| **Newsletter form** | `NewsletterForm.tsx` collects emails but has no backend submission target yet. | Requires integration (Mailchimp, ConvertKit, etc.) — not yet scoped |
