// Mobile Navigation Drawer Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const backdrop = document.getElementById('mobile-drawer-backdrop');

  if (!menuBtn || !mobileDrawer) return;

  function openMenu() {
    mobileDrawer.classList.remove('pointer-events-none', 'opacity-0');
    mobileDrawer.classList.add('pointer-events-auto', 'opacity-100');
    const panel = mobileDrawer.querySelector('.drawer-panel');
    if (panel) {
      panel.classList.remove('translate-x-full');
      panel.classList.add('translate-x-0');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    const panel = mobileDrawer.querySelector('.drawer-panel');
    if (panel) {
      panel.classList.remove('translate-x-0');
      panel.classList.add('translate-x-full');
    }
    mobileDrawer.classList.remove('pointer-events-auto', 'opacity-100');
    mobileDrawer.classList.add('pointer-events-none', 'opacity-0');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  const links = mobileDrawer.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
