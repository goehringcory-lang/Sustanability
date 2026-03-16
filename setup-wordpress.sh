#!/bin/bash
#
# WordPress Setup Script for a Minimal Sustainability Website
# Run this on a fresh WordPress installation with WP-CLI available.
# Usage: bash setup-wordpress.sh
#

set -e

echo "=== Starting WordPress Configuration ==="

# ---------------------------------------------------------------------------
# 1. Site Identity
#    Set the site title and clear the default tagline.
# ---------------------------------------------------------------------------
wp option update blogname '[YOUR SITE NAME]'
wp option update blogdescription ''
echo "Site title and tagline configured."

# ---------------------------------------------------------------------------
# 2. Permalink Structure
#    Use clean page-name URLs (e.g., example.com/about/).
# ---------------------------------------------------------------------------
wp rewrite structure '/%pagename%/'
wp rewrite flush
echo "Permalink structure set to /%pagename%/."

# ---------------------------------------------------------------------------
# 3. Timezone
#    Set to Pacific Time (America/Los_Angeles).
# ---------------------------------------------------------------------------
wp option update timezone_string 'America/Los_Angeles'
echo "Timezone set to America/Los_Angeles."

# ---------------------------------------------------------------------------
# 4. Disable Comments Globally
#    Turn off comments and pingbacks site-wide so they cannot be left
#    on any existing or future content.
# ---------------------------------------------------------------------------
wp option update default_comment_status 'closed'
wp option update default_ping_status 'closed'
wp option update default_pingback_flag 0
wp option update require_name_email 1
wp option update comment_registration 1
echo "Comments and pingbacks disabled globally."

# ---------------------------------------------------------------------------
# 5. Static Front Page
#    Tell WordPress to show a static page instead of latest posts.
# ---------------------------------------------------------------------------
wp option update show_on_front 'page'
echo "Front page set to display a static page."

# ---------------------------------------------------------------------------
# 6. Create the Five Site Pages
#    Each page is created with a published status and no content (blank).
# ---------------------------------------------------------------------------
HOME_ID=$(wp post create --post_type=page --post_title='Home' --post_status=publish --porcelain)
PRODUCTS_ID=$(wp post create --post_type=page --post_title='Products' --post_status=publish --porcelain)
ABOUT_ID=$(wp post create --post_type=page --post_title='About' --post_status=publish --porcelain)
PHILOSOPHY_ID=$(wp post create --post_type=page --post_title='Philosophy' --post_status=publish --porcelain)
CONTACT_ID=$(wp post create --post_type=page --post_title='Contact' --post_status=publish --porcelain)
echo "Created pages: Home ($HOME_ID), Products ($PRODUCTS_ID), About ($ABOUT_ID), Philosophy ($PHILOSOPHY_ID), Contact ($CONTACT_ID)."

# ---------------------------------------------------------------------------
# 7. Set "Home" as the Front Page
#    Point the static front page option to the Home page we just created.
# ---------------------------------------------------------------------------
wp option update page_on_front "$HOME_ID"
echo "Home page (ID $HOME_ID) set as the front page."

# ---------------------------------------------------------------------------
# 8. Delete Default Content
#    Remove the "Hello World" post (ID 1), the sample page (ID 2),
#    and the default comment (ID 1) that ship with every WordPress install.
# ---------------------------------------------------------------------------
wp post delete 1 --force 2>/dev/null && echo "Deleted default 'Hello World' post." || echo "Default post already removed."
wp post delete 2 --force 2>/dev/null && echo "Deleted default sample page." || echo "Default sample page already removed."
wp comment delete 1 --force 2>/dev/null && echo "Deleted default sample comment." || echo "Default comment already removed."

# ---------------------------------------------------------------------------
# 9. Delete Default Themes (Keep Twenty Twenty-Five as Fallback)
#    Remove bundled themes we won't use. Twenty Twenty-Five stays so
#    WordPress always has a valid fallback theme available.
# ---------------------------------------------------------------------------
for THEME in twentytwentythree twentytwentyfour; do
    if wp theme is-installed "$THEME" 2>/dev/null; then
        wp theme delete "$THEME"
        echo "Deleted theme: $THEME."
    else
        echo "Theme $THEME not installed, skipping."
    fi
done
echo "Only Twenty Twenty-Five remains as fallback."

# ---------------------------------------------------------------------------
# 10. Disable Built-In Search
#     For a small 5-page site search is unnecessary. We hide it by
#     deregistering the search widget and blocking the search query
#     via a small must-use plugin.
# ---------------------------------------------------------------------------
MUPLUGINS_DIR=$(wp eval 'echo WPMU_PLUGIN_DIR;')
mkdir -p "$MUPLUGINS_DIR"

cat > "$MUPLUGINS_DIR/disable-search.php" << 'PLUGIN'
<?php
/**
 * Plugin Name: Disable Search
 * Description: Disables the built-in WordPress search for this small site.
 */

// Redirect any search query back to the home page.
add_action('parse_query', function ($query) {
    if (!is_admin() && $query->is_search) {
        $query->is_search = false;
        $query->query_vars['s'] = false;
        $query->is_404 = true;
    }
});

// Remove the search form from widgets.
add_action('widgets_init', function () {
    unregister_widget('WP_Widget_Search');
});
PLUGIN

echo "Built-in search disabled via must-use plugin."

# ---------------------------------------------------------------------------
# 11. Image Sizes
#     Configure the three built-in image sizes for the site's needs.
#     Medium: 800×600, Large: 1200×800, Thumbnail: 400×400.
# ---------------------------------------------------------------------------
wp option update medium_size_w 800
wp option update medium_size_h 600
wp option update large_size_w 1200
wp option update large_size_h 800
wp option update thumbnail_size_w 400
wp option update thumbnail_size_h 400
wp option update thumbnail_crop 1
echo "Image sizes configured (medium 800x600, large 1200x800, thumbnail 400x400)."

# ---------------------------------------------------------------------------
# 12. Discourage Search Engine Indexing
#     Keep the site hidden from crawlers during development.
#     Uncheck this in Settings → Reading before launch.
# ---------------------------------------------------------------------------
wp option update blog_public 0
echo "Search engine indexing discouraged (remember to enable before launch)."

# ---------------------------------------------------------------------------
# 13. Install and Activate Rank Math SEO
#     Handles sitemaps, breadcrumbs, Open Graph, and per-page meta.
# ---------------------------------------------------------------------------
wp plugin install seo-by-rank-math --activate
echo "Rank Math SEO installed and activated."

# ---------------------------------------------------------------------------
# 14. Install ShortPixel Image Optimizer
#     Free tier: 100 images/month. Compresses uploads automatically.
#     Supports WebP/AVIF conversion for modern browsers.
# ---------------------------------------------------------------------------
wp plugin install shortpixel-image-optimiser --activate
echo "ShortPixel installed. Activate your API key in Settings → ShortPixel."

# ---------------------------------------------------------------------------
# Done
# ---------------------------------------------------------------------------
echo ""
echo "=== WordPress setup complete! ==="
echo "Next steps:"
echo "  - Replace '[YOUR SITE NAME]' with your actual site name if you haven't."
echo "  - Install and activate your chosen theme."
echo "  - Run the Rank Math setup wizard in wp-admin."
echo "  - Follow seo-setup.md for per-page SEO configuration."
echo "  - Set blog_public to 1 (Settings → Reading) when you're ready to launch."
