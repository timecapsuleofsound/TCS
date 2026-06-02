# TCS Brand System
**Time Capsule of Sound** — House Music Destination

---

## Color Palette

Derived from the existing site aesthetic: deep black canvas, electric pink energy, cool blue depth.

| Token | Hex | Usage |
|-------|-----|-------|
| `tcs-black` | `#0a0a0a` | Page background, primary surface |
| `tcs-surface` | `#111111` | Card backgrounds, nav |
| `tcs-surface-2` | `#1a1a1a` | Elevated surfaces, borders |
| `tcs-pink` | `#e91e63` | Primary accent, CTAs, highlights |
| `tcs-pink-hover` | `#c2185b` | CTA hover state |
| `tcs-blue` | `#1401c0` | Secondary accent, glows, gradients |
| `tcs-blue-light` | `#3d2ee8` | Lighter blue for gradients |
| `tcs-white` | `#ffffff` | Primary text |
| `tcs-gray-300` | `#d1d5db` | Secondary text |
| `tcs-gray-500` | `#6b7280` | Muted text, placeholders |
| `tcs-gray-700` | `#374151` | Borders, dividers |
| `tcs-success` | `#22c55e` | Success states, live indicators |
| `tcs-error` | `#ef4444` | Error states |

### Usage Notes
- Background is always `tcs-black` or `tcs-surface`
- **Pink** is the primary brand energy — use on CTAs, active states, and key highlights
- **Blue** is the secondary depth — use in gradients behind pink, or for ambient glow effects
- Never use pink and blue at equal weight in the same element; one leads

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

> **Pending:** Logo file to be placed in `/public/images/logo/` by owner.
> Preferred format: SVG. PNG fallback acceptable.

### Guidelines (to be confirmed once logo is provided)
- Minimum width: 120px
- Clear space: equal to the cap-height of the wordmark on all sides
- **Approved variants:** Full color, White (for dark backgrounds), Dark (for light backgrounds)
- Do not stretch, recolor, or apply effects to the logo

### Current Placeholder
Until the logo is provided, the site will use a text wordmark:
- **"TIME CAPSULE OF SOUND"** in Bebas Neue, `tcs-white`
- Subtext: **"TCS"** in Inter 500, `tcs-pink`

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
