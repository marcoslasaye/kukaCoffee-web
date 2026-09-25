// Google Analytics 4 Event Tracking Instrumentation
(function () {
  function initAnalytics() {
    document.addEventListener('click', (event) => {
      const target = event.target.closest('a, button');
      if (!target || typeof window.gtag !== 'function') return;

      const href = target.getAttribute('href') || '';
      const text = (target.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 50);
      const currentPath = window.location.pathname;

      // 1. WhatsApp Click (Primary conversion)
      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        window.gtag('event', 'click_whatsapp', {
          event_category: 'conversion',
          event_label: text || 'WhatsApp Contact',
          source_page: currentPath,
          outbound_url: href
        });
        return;
      }

      // 2. Google Reviews Click (Social proof)
      if (href.includes('g.page') || (href.includes('review') && href.includes('http'))) {
        window.gtag('event', 'click_review', {
          event_category: 'engagement',
          event_label: text || 'Leave Review',
          source_page: currentPath,
          outbound_url: href
        });
        return;
      }

      // 3. Google Maps / Directions Click (Physical visit intent)
      if (
        href.includes('maps.app.goo.gl') ||
        href.includes('google.com/maps') ||
        href === '#location' ||
        href === '/#location' ||
        href === '#location-access' ||
        href === '/#location-access'
      ) {
        window.gtag('event', 'click_directions', {
          event_category: 'conversion',
          event_label: text || 'Get Directions',
          source_page: currentPath,
          outbound_url: href
        });
        return;
      }

      // 4. Menu & Bakery Interest
      if (href.includes('/services/coffee-and-menu')) {
        window.gtag('event', 'view_menu_click', {
          event_category: 'engagement',
          event_label: text || 'View Menu',
          source_page: currentPath
        });
        return;
      }

      // 5. Group Bookings / Nomad Workspaces
      if (href.includes('/services/small-group-bookings')) {
        window.gtag('event', 'click_group_booking', {
          event_category: 'conversion',
          event_label: text || 'Group Booking',
          source_page: currentPath
        });
        return;
      }

      // 6. ATM Guide Click (Nomad / Tourist utility)
      if (href.includes('withdrawing-cash-indonesia-atm-foreign-card')) {
        window.gtag('event', 'view_atm_guide', {
          event_category: 'engagement',
          event_label: text || 'ATM Guide',
          source_page: currentPath
        });
        return;
      }
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnalytics);
  } else {
    initAnalytics();
  }
})();
