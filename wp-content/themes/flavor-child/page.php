<?php
/**
 * Default Page Template — flavor-child
 *
 * Used by all five pages: Home, Products, About, Philosophy, Contact.
 * Simple single-column layout. No sidebar, no author box, no clutter.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * CONTENT GUIDANCE FOR EACH PAGE
 * (Write this content in the WordPress block editor — the template
 * just displays whatever you put there.)
 * ─────────────────────────────────────────────────────────────────────────
 *
 * HOME PAGE:
 *   - Short welcome statement (1–2 sentences)
 *   - What the site is about and who it's for
 *   - A beautiful Yosemite hero image
 *   - Brief pointers to Products and Philosophy pages
 *
 * PRODUCTS PAGE:
 *   - Curated product recommendations with real-use context
 *   - Use the .product-grid and .product-card markup in custom.css
 *
 * ABOUT PAGE:
 *   - Who you are (first person, conversational)
 *   - Your connection to Yosemite National Park
 *   - Why you started this site
 *   - A real photo of you in the park
 *   - What qualifies you to recommend these products (real use, not credentials)
 *
 * PHILOSOPHY PAGE:
 *   - What sustainability means to you (practical, not ideological)
 *   - How you evaluate products: durability, materials, real-world
 *     performance, end-of-life — and what you avoid: greenwashing,
 *     marketing hype, solutions for problems that don't exist
 *   - The honest trade-offs: sustainable products sometimes cost more,
 *     sometimes perform differently, and that's okay
 *   - A note on affiliate links: used sparingly, don't influence
 *     recommendations, and you'll always disclose them
 *   - This page doubles as your editorial standards and disclosure
 *
 * CONTACT PAGE:
 *   - A brief line: "Have a question or a product suggestion?
 *     I'd like to hear from you."
 *   - A simple contact form: Name, Email, Message, Submit
 *     (use WPForms Lite or Contact Form 7 shortcode)
 *   - No social media links, no chat widget
 *
 * ─────────────────────────────────────────────────────────────────────────
 */

get_header(); ?>

<main id="content" class="site-content" role="main">

    <?php
    // Breadcrumb: Home › Page Name (requires Rank Math with breadcrumbs enabled).
    if (function_exists('rank_math_the_breadcrumbs') && !is_front_page()) {
        rank_math_the_breadcrumbs();
    }
    ?>

    <?php while (have_posts()) : the_post(); ?>

        <article id="page-<?php the_ID(); ?>" <?php post_class(); ?>>

            <h1 class="page-title"><?php the_title(); ?></h1>

            <div class="entry-content">
                <?php the_content(); ?>
            </div>

            <?php
            // "Back to top" link — useful on longer pages like Philosophy.
            ?>
            <p class="back-to-top">
                <a href="#content">&uarr; Back to top</a>
            </p>

        </article>

    <?php endwhile; ?>

</main>

<?php get_footer(); ?>
