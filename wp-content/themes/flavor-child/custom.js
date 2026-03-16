/**
 * flavor-child — Custom JS
 *
 * Intentionally minimal. This site is 5 static pages —
 * if it doesn't need JavaScript, it shouldn't have JavaScript.
 */

(function () {
    'use strict';

    // ── Hamburger Menu Toggle ────────────────────────────────────────────
    var toggle = document.querySelector('.menu-toggle');
    var menu   = document.getElementById('primary-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', function () {
            var isOpen = menu.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        });

        // Close menu on Escape key.
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && menu.classList.contains('is-open')) {
                menu.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Open menu');
                toggle.focus();
            }
        });

        // Close menu when clicking outside.
        document.addEventListener('click', function (e) {
            if (menu.classList.contains('is-open') &&
                !menu.contains(e.target) &&
                !toggle.contains(e.target)) {
                menu.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Open menu');
            }
        });
    }

    // ── Smooth Scroll ────────────────────────────────────────────────────
    // Smooth-scroll for any anchor links pointing to on-page sections.
    // Respects prefers-reduced-motion via CSS (scroll-behavior: auto).
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ── Cookie Consent (GA4 only) ────────────────────────────────────────
    // If using Plausible or Fathom, delete this entire block.
    // This creates a one-line notice at the bottom of the page.
    // On "Accept", it grants analytics_storage and hides the bar.
    // The consent choice is remembered in localStorage.

    /*
    (function initCookieNotice() {
        if (localStorage.getItem('cookie_consent') === 'granted') {
            if (typeof gtag === 'function') {
                gtag('consent', 'update', { 'analytics_storage': 'granted' });
            }
            return;
        }
        if (localStorage.getItem('cookie_consent') === 'denied') {
            return;
        }

        var notice = document.createElement('div');
        notice.className = 'cookie-notice';
        notice.innerHTML =
            'This site uses cookies for anonymous analytics. ' +
            '<a href="/privacy-policy/">Learn more</a> ' +
            '<button class="cookie-accept">Accept</button> ' +
            '<button class="cookie-deny">Decline</button>';
        document.body.appendChild(notice);

        notice.querySelector('.cookie-accept').addEventListener('click', function () {
            localStorage.setItem('cookie_consent', 'granted');
            if (typeof gtag === 'function') {
                gtag('consent', 'update', { 'analytics_storage': 'granted' });
            }
            notice.remove();
        });

        notice.querySelector('.cookie-deny').addEventListener('click', function () {
            localStorage.setItem('cookie_consent', 'denied');
            notice.remove();
        });
    })();
    */

})();
