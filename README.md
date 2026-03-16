# Sustainability Site — flavor-child Theme

WordPress child theme for a minimal sustainability website with five pages: Home, Products, About, Philosophy, and Contact.

## Structure

Only the child theme is tracked in this repo:

```
wp-content/themes/flavor-child/
```

WordPress core, plugins, and uploads are excluded via `.gitignore`.

## Setup

1. Install WordPress and point the webroot to this directory.
2. Run `bash setup-wordpress.sh` to configure pages, settings, and cleanup.
3. Add the contents of `wp-config-additions.php` to your `wp-config.php`.
4. Activate the `flavor-child` theme from the admin dashboard.
