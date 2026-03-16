# SEO Setup — [Site Name]

Step-by-step configuration for Rank Math (free) on a 5-page site.
Do this AFTER running `setup-wordpress.sh` and setting `blog_public` to `1`.

---

## 1. Install Rank Math

1. WordPress Admin → Plugins → Add New
2. Search "Rank Math SEO"
3. Install and activate **Rank Math SEO** (by Rank Math)
4. Run the setup wizard — choose **Easy** mode
5. When asked about site type, select **Small Business Site**
6. Skip the "connect your account" step if you prefer

---

## 2. Rank Math Global Settings

Go to **Rank Math → General Settings**:

### Breadcrumbs
- Enable Breadcrumbs: **On**
- Separator: `›`
- Homepage label: `Home`
- Breadcrumb format: Home › Page Name (automatic for pages)

### Links
- Strip Category Base: doesn't apply (no blog)
- Open External Links in New Tab: **On**
- Add `nofollow` to External Links: **Off** (you want affiliate links to work)

### Others
- RSS Before Content / After Content: leave blank (feeds are disabled)

---

## 3. Rank Math Sitemap Settings

Go to **Rank Math → Sitemap Settings**:

### General
- Enable Sitemap: **On**
- Include Images: **On**

### Pages
- Pages in Sitemap: **On**

### Posts
- Posts in Sitemap: **Off** (no blog)

### Ping Search Engines: **On**

Your sitemap will be at: `https://[your-domain.com]/sitemap_index.xml`

---

## 4. Rank Math Social / Open Graph

Go to **Rank Math → Titles & Meta → Social**:

- Default OpenGraph Thumbnail: upload a Yosemite landscape photo (1200×630px)
- This image appears when any page is shared and doesn't have its own image

Go to **Rank Math → Titles & Meta → Global Meta**:

- OpenGraph: **On**
- Twitter Card Type: **Summary with Large Image**

---

## 5. Page-by-Page SEO

Edit each page in WordPress. In the Rank Math panel below the editor,
click **Edit Snippet** and set the following:

### Home (front page)

Set this in **Rank Math → Titles & Meta → Homepage**:

- **Title:** `[Site Name] | Honest Sustainable Product Recommendations from Yosemite`
- **Description:** `Sustainable product recommendations tested on real trails in Yosemite. No greenwashing, no hype — just honest picks for people who care about what they use.`
- **OG Image:** A strong Yosemite landscape (1200×630)

### Products

- **Title:** `Products I Recommend | [Site Name]`
- **Description:** `A curated list of sustainable products I personally use and trust. Tested for durability, materials, and real-world performance in Yosemite National Park.`

### About

- **Title:** `About | [Site Name]`
- **Description:** `Who I am, my connection to Yosemite National Park, and why I started recommending sustainable products I actually use on the trail.`

### Philosophy

- **Title:** `Philosophy | [Site Name]`
- **Description:** `How I evaluate sustainable products — what I look for, what I avoid, and why honest trade-offs matter more than marketing claims.`

### Contact

- **Title:** `Contact | [Site Name]`
- **Description:** `Have a question or a product suggestion? Get in touch. I read every message.`

---

## 6. robots.txt

WordPress generates a virtual `robots.txt` automatically. Rank Math lets
you edit it under **Rank Math → General Settings → Edit robots.txt**:

```
User-agent: *
Allow: /

Sitemap: https://[your-domain.com]/sitemap_index.xml
```

That's the entire file. No disallow rules needed — you have 5 public pages
and nothing to hide from crawlers.

---

## 7. Breadcrumbs — Add to Theme

The breadcrumb markup needs to be added to the page template.
See the updated `page.php` in the child theme.

---

## Pre-Launch Checklist

- [ ] Replace all `[Site Name]` and `[your-domain.com]` placeholders
- [ ] Set `blog_public` to `1` (Settings → Reading → uncheck "Discourage search engines")
- [ ] Upload a 1200×630 OG image for each page (or at minimum the default)
- [ ] Visit `https://[your-domain.com]/sitemap_index.xml` to verify it loads
- [ ] Test a page URL in https://cards-dev.twitter.com/validator
- [ ] Test a page URL in https://developers.facebook.com/tools/debug/
- [ ] Submit your sitemap in Google Search Console
