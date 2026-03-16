/**
 * Custom Configuration for Sustainability Site
 * Add this block to wp-config.php ABOVE the line:
 * "That's all, stop editing! Happy publishing."
 */

/* ── Security ──────────────────────────────────────────────────────────── */
// Prevent theme/plugin file editing from the WordPress admin dashboard.
define('DISALLOW_FILE_EDIT', true);

// Force SSL for the admin dashboard and logins.
define('FORCE_SSL_ADMIN', true);

/* ── Performance ───────────────────────────────────────────────────────── */
// Limit post revisions to keep the database lean.
define('WP_POST_REVISIONS', 3);

// Allow WordPress to use up to 256MB of memory.
define('WP_MEMORY_LIMIT', '256M');

/* ── Redis Object Cache ────────────────────────────────────────────────── */
// Used by the Redis Object Cache plugin (e.g. till-kruss/redis-cache).
define('WP_REDIS_HOST', '127.0.0.1');
define('WP_REDIS_PORT', 6379);

/* ── Debug (uncomment on staging, never in production) ─────────────────── */
/*
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);   // Writes to wp-content/debug.log
define('WP_DEBUG_DISPLAY', false); // Hide errors from visitors
define('SCRIPT_DEBUG', true);   // Use unminified core CSS/JS
*/
