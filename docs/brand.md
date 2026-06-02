# TCS Brand System
**Time Capsule of Sound** — House Music Destination

---

## Color Palette

Derived from the TCS logo: ice blue music note, candy cane red/white stripes, and the deep black canvas of the existing site.

| Token | Hex | Usage |
|-------|-----|-------|
| `tcs-black` | `#0a0a0a` | Page background, primary surface |
| `tcs-surface` | `#111111` | Card backgrounds, nav |
| `tcs-surface-2` | `#1a1a1a` | Elevated surfaces, borders |
| `tcs-ice` | `#7dd3e8` | **Primary accent** — logo blue, CTAs, highlights, active states |
| `tcs-ice-hover` | `#5bbdd6` | CTA hover state |
| `tcs-ice-glow` | `#a8e6f0` | Subtle glow, focus rings |
| `tcs-red` | `#cc2200` | **Secondary accent** — logo candy cane red, badges, live indicators |
| `tcs-red-light` | `#e63b1f` | Lighter red for hover/emphasis |
| `tcs-white` | `#ffffff` | Primary text |
| `tcs-gray-300` | `#d1d5db` | Secondary text |
| `tcs-gray-500` | `#6b7280` | Muted text, placeholders |
| `tcs-gray-700` | `#374151` | Borders, dividers |
| `tcs-success` | `#22c55e` | Success states |
| `tcs-error` | `#ef4444` | Error states |
| `tcs-live` | `#cc2200` | Live stream badge (uses tcs-red) |

### Logo Colors (source of truth)
The TCS logo features a stylized music note in **ice blue** (`#7dd3e8`) held by a **candy cane** in red (`#cc2200`) and white. These two colors are the brand anchors.

### Usage Notes
- Background is always `tcs-black` or `tcs-surface`
- **Ice blue** (`tcs-ice`) is the primary CTA and highlight color — buttons, links, active nav, accents
- **Red** (`tcs-red`) is used sparingly for energy moments — live badges, alerts, hover emphasis
- The combination of ice blue on near-black creates the cool, late-night House Music atmosphere

---

## Typography

### Fonts
| Role | Font | Source | Weights |
|------|------|---------|---------|
| Display / Headings | **Bebas Neue** | Google Fonts | 400 (only weight) |
| Body / UI | **Inter** | Google Fonts | 400, 500, 700 |

**Rationale:**
- *Bebas Neue* is bold, condensed, and impactful — perfect for House Music energy and the archival "time capsule" feeling. Used for all H1–H3 headings, hero text, and section labels.
- *Inter* is clean and highly readable at all sizes — ideal for body copy, nav, and UI elements.

### Type Scale
| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| `text-xs` | 12px | 1.5 | Microcopy, labels |
| `text-sm` | 14px | 1.5 | Secondary text, captions |
| `text-base` | 16px | 1.6 | Body text |
| `text-lg` | 18px | 1.5 | Lead text, intro paragraphs |
| `text-xl` | 20px | 1.4 | Sub-headings |
| `text-2xl` | 24px | 1.3 | Section headings (H3) |
| `text-3xl` | 30px | 1.2 | Page headings (H2) |
| `text-4xl` | 36px | 1.1 | Hero sub-headings |
| `text-5xl` | 48px | 1 | Hero headings (H1, Bebas Neue) |
| `text-6xl` | 60px | 1 | Oversized display text |
| `text-7xl` | 72px | 1 | Full-bleed hero display |

### Weight Usage
- **400 (Regular)** — body text, descriptions
- **500 (Medium)** — nav links, labels, UI elements
- **700 (Bold)** — emphasis, subheadings in Inter

---

## Logo

**File:** `/public/images/logo/logo.PNG`
**Format:** PNG (SVG version recommended for future — vector export from original source)

### Description
Cartoon-style music note in ice blue, held by a red-and-white candy cane with white-gloved hands. Playful, bold, and distinctive. Reflects the fun and energy of House Music culture.

### Guidelines
- Minimum width: 80px
- Clear space: equal to the height of the music note on all sides
- **Approved on dark backgrounds only** — the logo reads best on `tcs-black` or `tcs-surface`
- Do not recolor, stretch, or apply drop shadows
- On very small sizes (< 80px), use a text wordmark fallback instead

### Text Wordmark Fallback
When the logo is too small or unavailable:
- **"TIME CAPSULE OF SOUND"** in Bebas Neue, `tcs-white`
- Subtext: **"TCS"** in Inter 500, `tcs-ice`

---

## Tone of Voice

- **Bold** — House Music doesn't whisper. Headlines are declarative and confident.
- **Archival** — There's history here. Language should feel like it carries weight and memory.
- **Inclusive** — This is a community. Copy should invite, not gatekeep.
- **Energetic** — Live streams, events, mixes. The energy should come through.

**Examples:**
- "Unlock the Memories and Rhythm of House." ✅
- "Welcome to our website." ❌

---

## Streaming Platforms

| Platform | Purpose | Channel |
|----------|---------|---------|
| **Twitch** | Primary live streaming | twitch.tv/TimeCapsuleofSound |
| **YouTube** | VODs, replays, interviews | youtube.com/TimeCapsuleofSound |
| **Mixcloud** | Archived mixes (DJ sets) | TBD — confirm handle |
| **SoundCloud** | Archived audio tracks | TBD — confirm handle |
| **OBS** | Broadcasting software (internal) | — streams to Twitch/YouTube |

---

## Social Media

| Platform | Handle / URL |
|----------|-------------|
| Facebook | facebook.com/TimeCapsuleofSound |
| Twitter / X | x.com/TimeCapofSound |
| Instagram | instagram.com/TimeCapsuleofSound |
| Twitch | twitch.tv/TimeCapsuleofSound |
| YouTube | youtube.com/TimeCapsuleofSound |

---

## Spacing & Layout

- **Max content width:** 1280px
- **Section padding:** `py-16` (64px) on desktop, `py-10` (40px) on mobile
- **Container padding:** `px-4` mobile, `px-8` desktop
- **Card border radius:** `rounded-lg` (8px)
- **Border color:** `tcs-gray-700` / `#374151`

---

## Asset Folder Structure

```
/public
  /images
    /hero        ← hero & background images
    /artists     ← DJ and artist photos
    /events      ← event photos
    /logo        ← logo files (SVG + PNG)
```

*Last updated: Sprint 1 — TCS-9*
