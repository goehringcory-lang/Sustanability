# Sustainability Website — Claude Code Project Guide

## What This Is
A minimal WordPress sustainability product recommendation website rooted in a Yosemite National Park perspective. 5 pages, no blog, no sidebar, no pop-ups. The design philosophy is **Yosemite granite**: cool silver-white stone, dark mineral veins, high contrast. The monochromatic UI recedes so photography becomes the loudest thing on the page.

## Project Structure
```
Sustanability/
├── CLAUDE.md                          ← You are here
├── .gitignore                         ← Tracks only child theme + project files
├── .htaccess                          ← Performance & security (GZIP, caching, keep-alive)
├── README.md                          ← Brief project overview
├── preview.html                       ← Clickable static preview of the full site
├── setup-wordpress.sh                 ← WP-CLI script to configure a fresh WordPress install
├── wp-config-additions.php            ← wp-config.php additions (security, performance, Redis)
└── wp-content/themes/flavor-child/    ← The child theme (everything we build lives here)
    ├── style.css                      ← Theme header only (Template: flavor)
    ├── functions.php                  ← Enqueues, bloat removal, blog disabling, analytics
    ├── custom.css                     ← All visual design — granite palette, typography, layout
    ├── custom.js                      ← Minimal JS (smooth scroll, optional cookie consent)
    ├── header.php                     ← Site header: text title + 5-link nav, no logo
    ├── footer.php                     ← One-line footer: © year, site name
    ├── page.php                       ← Single page template with breadcrumbs, back-to-top
    ├── privacy-policy.html            ← Privacy policy content (copy into WP page)
    ├── affiliate-disclosure.html      ← Affiliate disclosure (goes on Philosophy page)
    └── seo-setup.md                   ← Step-by-step Rank Math SEO configuration guide
```

## Design System — Yosemite Granite Palette
The palette is defined as CSS custom properties in `custom.css`:
- `--color-primary: #1A1A1A` — near-black (dark diorite veins)
- `--color-accent: #A85121` — Yosemite rust (the ONE warm color)
- `--color-stone: #C8C5BF` — mid granite
- `--color-stone-light: #E2E0DC` — light granite face
- `--color-earth: #6B6B6B` — dark stone, lichen gray
- `--color-text: #111111` — strong black
- `--color-text-light: #6B6B6B` — weathered granite
- `--color-bg: #F5F4F2` — cool white granite in morning light
- `--color-bg-alt: #ECEAE7` — slightly darker granite slab
- `--color-border: #D0CEC9` — hairline crack in stone

**Typography:** System fonts only — Helvetica Neue (headings), Georgia (body). Zero external font requests.

**Design rules:**
- The UI is monochromatic granite. Photos provide ALL the color.
- High contrast: dark text on light stone backgrounds.
- Nav text should be dark and readable (currently `#3A3A3A`, active state `#111111`).
- Images get generous vertical spacing and subtle dark borders to frame them.
- Full-bleed (`.alignfull`) and wide (`.alignwide`) image classes available.
- Product cards have dark border on hover to draw the eye without competing with photos.
- Buttons are solid near-black, invert on hover.
- Everything should feel like a well-made trail sign: calm, clean, grounded.

## The 5 Pages
1. **Home** — Hero image, welcome statement, pointers to Products and Philosophy
2. **Products** — Curated product grid (`.product-grid` + `.product-card` classes)
3. **About** — First-person story, connection to Yosemite (content NOT YET WRITTEN — needs user's personal notes)
4. **Philosophy** — Editorial standards, how products are evaluated, affiliate disclosure (content NOT YET WRITTEN — needs user's personal notes)
5. **Contact** — Simple form (Name, Email, Message) via WPForms Lite or Contact Form 7

## Content Status
- **About page:** Waiting for user's personal notes about their Yosemite connection, what they do there, why they started the site, something personal
- **Philosophy page:** Waiting for user's notes on what sustainability means to them, how they pick products, honest trade-offs, what bugs them about greenwashing
- **Privacy policy:** Template complete with `[Site Name]`, `[Contact Email]`, `[analytics provider]` placeholders
- **Affiliate disclosure:** Complete, ready to paste into Philosophy page
- **SEO meta titles/descriptions:** Written for all 5 pages in `seo-setup.md` with `[Site Name]` placeholders

## Parent Theme
GeneratePress (free), referenced as `Template: flavor` in `style.css`. The child theme overrides header, footer, and page templates completely.

## Key Technical Decisions
- **No blog:** Posts menu removed from admin, feeds disabled and redirected, feed links stripped from `<head>`
- **No search:** Disabled via must-use plugin (created by `setup-wordpress.sh`)
- **No comments:** Disabled globally in setup script
- **No Google Fonts:** Blocked via `style_loader_src` filter — system fonts only
- **No jQuery Migrate:** Deregistered on front end
- **No Gutenberg block CSS:** Dequeued — we style everything in `custom.css`
- **No XML-RPC:** Disabled in PHP, blocked in `.htaccess`
- **Analytics:** Three options in `functions.php` (all commented out): Plausible (recommended), Fathom, or GA4
- **SEO:** Rank Math free — installed by setup script, configured per `seo-setup.md`
- **Image optimization:** ShortPixel — installed by setup script
- **Object cache:** Redis config in `wp-config-additions.php` (host 127.0.0.1, port 6379)

## Deployment Checklist
1. Get hosting (SiteGround, Cloudways, or A2) + domain
2. One-click WordPress install
3. Install GeneratePress parent theme (don't activate)
4. Upload and activate `flavor-child` child theme
5. SSH in and run `bash setup-wordpress.sh`
6. Add `wp-config-additions.php` contents to `wp-config.php` above the stop-editing line
7. Replace `.htaccess` with ours (keep WP rewrite block)
8. Configure Rank Math (follow `seo-setup.md`)
9. Set up ShortPixel (free API key from shortpixel.com)
10. Uncomment chosen analytics block in `functions.php`
11. Install WPForms Lite or CF7, create contact form, paste shortcode on Contact page
12. Write page content (About and Philosophy still need user's notes)
13. Replace all `[Site Name]`, `[Your Name]`, `[Contact Email]`, `[your-domain.com]` placeholders
14. Uncheck "Discourage search engines" in Settings > Reading
15. Submit sitemap to Google Search Console

## When Editing This Project
- **All visual changes** go in `custom.css` — never inline, never in `style.css`
- **All PHP functionality** goes in `functions.php`
- **Preview changes** by updating `preview.html` to match (it's a standalone static mirror)
- Keep the preview.html in sync with custom.css changes — it embeds its own copy of the styles
- The site should feel like one of the fastest WordPress sites on the internet — don't add weight
- No emojis in code or content unless the user asks
- Respect the granite palette — any new colors should feel like they belong on a rock face
