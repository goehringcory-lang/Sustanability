<?php
/**
 * Header template for flavor-child.
 *
 * Minimal: site name (text) + five nav links.
 * No logo image, no search, no CTA.
 * Hamburger menu on mobile (< 640px).
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Skip to Content (Accessibility) -->
<a class="skip-link" href="#content"><?php esc_html_e('Skip to content', 'flavor-child'); ?></a>

<header class="site-header" role="banner">
    <div class="header-inner">

        <p class="site-title">
            <a href="<?php echo esc_url(home_url('/')); ?>">
                <?php bloginfo('name'); ?>
            </a>
        </p>

        <button class="menu-toggle" aria-expanded="false" aria-controls="primary-menu" aria-label="<?php esc_attr_e('Open menu', 'flavor-child'); ?>">
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>

        <nav class="primary-nav" id="primary-menu" role="navigation" aria-label="<?php esc_attr_e('Primary Navigation', 'flavor-child'); ?>">
            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'container'      => false,
                'depth'          => 1,
                'fallback_cb'    => false,
            ]);
            ?>
        </nav>

    </div>
</header>
