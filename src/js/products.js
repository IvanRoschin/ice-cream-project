(() => {
  const refs = {
    openMenuBtn: document.querySelector('[product-menu-open]'),
    closeMenuBtn: document.querySelector('[product-menu-close]'),
    menu: document.querySelector('[product-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    document.body.classList.toggle('menu-open');
    refs.menu.classList.toggle('is-closed');
  }
})();
