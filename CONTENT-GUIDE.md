# Content Guide

How to add blog posts, product reviews, and new categories to the site.

---

## 1. Adding a Blog Post

### In WordPress Admin
1. Go to **Posts > Add New**
2. Enter the title
3. Write the content in the block editor
4. Set a **Featured Image** (16:9 ratio, at least 800x450px)
5. Write a custom **Excerpt** (1-2 sentences, under 30 words)
6. Click **Publish**

The post will automatically appear on the Sustain/Journal page.

### In the Preview (preview.html)
Add a blog card inside the `.blog-grid` div:

```html
<article class="blog-card">
    <div class="blog-card-img">
        <img src="path/to/image.jpg" alt="Descriptive alt text" style="width:100%;height:100%;object-fit:cover;">
    </div>
    <div class="blog-card-body">
        <time class="blog-date">March 14, 2026</time>
        <h3>Your Blog Post Title</h3>
        <p>One or two sentence excerpt that hooks the reader.</p>
        <span class="blog-read-more">Read more &rarr;</span>
    </div>
</article>
```

---

## 2. Adding a Product Review

### Step 1: Add the product card to the category section

Find the `.product-grid` for the right category (section-drink, section-eat, section-clean, section-live, or section-move) and add:

```html
<div class="product-card" onclick="showProduct('Product Name Here')">
    <div class="card-img">
        <img src="path/to/product.jpg" alt="Product Name" style="width:100%;height:100%;object-fit:cover;">
        <!-- Or use placeholder: <span class="img-label">Product Photo</span> -->
    </div>
    <div class="card-body">
        <span class="card-category">Category Name</span>
        <h3>Product Name Here</h3>
        <p class="card-desc">One sentence about why this product stands out.</p>
        <div class="card-meta">
            <span class="card-price">~$XX</span>
            <span class="card-tag">Key Feature</span>
        </div>
    </div>
</div>
```

### Step 2: Add the product data to the JavaScript object

Find the `var products = {` block near the bottom of preview.html and add an entry:

```javascript
"Product Name Here": {
    category: "Category",
    section: "Drink",       // Drink, Eat, Clean, Live, or Move
    price: "~$XX",
    tag: "Key Feature",
    url: "https://www.amazon.com/dp/ASIN?tag=YOURTAG-20",
    body: '<p>Full product description. Why we use it, how long we have used it, what makes it different.</p><p>Second paragraph with more detail.</p>',
    specs: [
        ["Material", "Stainless steel"],
        ["Weight", "8 oz"],
        ["Warranty", "Lifetime"],
        ["Made in", "USA"]
    ]
},
```

**Important:** The product name in the card's `onclick="showProduct('...')"` must exactly match the key in the products object.

---

## 3. Adding a New Category

1. Add a new section to the Essentials page:
```html
<section class="section" id="section-newname">
    <div class="section-inner">
        <p class="section-label">06 &mdash; Category Name</p>
        <h2 class="section-title">Section headline.</h2>
        <p class="section-subtitle">Brief description of this category.</p>
        <div class="product-grid">
            <!-- Product cards go here -->
        </div>
    </div>
</section>
```

2. Add a category card to the home page `.category-row`
3. Create an SVG icon in `wp-content/themes/flavor-child/icons/` following the existing style (120x120 viewBox, granite circle background, black strokes, rust accent)

---

## 4. Image Specs

| Use | Ratio | Min Size | Format | Max File Size |
|-----|-------|----------|--------|---------------|
| Product card | 4:3 | 600x450px | WebP or JPG | 80KB |
| Blog card | 16:9 | 800x450px | WebP or JPG | 100KB |
| Product detail hero | 16:9 | 1200x675px | WebP or JPG | 150KB |
| Hero background | Full-bleed | 1920x1080px | JPG | 300KB |

- Always include descriptive `alt` text
- Compress with ShortPixel or squoosh.app before uploading
- WebP preferred, JPG fallback

---

## 5. SEO Checklist for New Content

For every new page or post:

- [ ] Set a **meta title** in Rank Math (under 60 characters)
- [ ] Write a **meta description** (under 155 characters)
- [ ] Include the primary keyword in the first paragraph
- [ ] Add at least one internal link to another page on the site
- [ ] Use a descriptive, keyword-rich URL slug
- [ ] Add alt text to all images
- [ ] Keep paragraphs short (2-3 sentences max)

### Meta Title Format
`Product Name Review | Sustain`
`Blog Post Title | Sustain Journal`

### Target Keywords
- sustainable products, zero waste, plastic-free
- buy it for life, BIFL
- [product name] review
- best sustainable [category]

---

## 6. Affiliate Links

### Setup
1. Sign up at [affiliate-program.amazon.com](https://affiliate-program.amazon.com)
2. Get your Associate tag (format: `yourtag-20`)
3. Replace all `YOURTAG-20` placeholders in preview.html's product data

### Link Format
```
https://www.amazon.com/dp/ASIN?tag=yourtag-20
```

### Adding to Products
Each product in the `products` JavaScript object has a `url` field. Update it with the real Amazon URL including your tag.

### Requirements
- All affiliate links must have `rel="noopener noreferrer sponsored"` and `target="_blank"`
- The affiliate disclosure on the Philosophy page must stay visible
- FTC requires clear disclosure before any affiliate link

---

## 7. File Locations

| What | Where |
|------|-------|
| Preview site | `preview.html` |
| Theme CSS | `wp-content/themes/flavor-child/custom.css` |
| Theme PHP | `wp-content/themes/flavor-child/functions.php` |
| Icons | `wp-content/themes/flavor-child/icons/` |
| Images | `wp-content/themes/flavor-child/images/` |
| Templates | `wp-content/themes/flavor-child/templates/` |
| SEO guide | `wp-content/themes/flavor-child/seo-setup.md` |
