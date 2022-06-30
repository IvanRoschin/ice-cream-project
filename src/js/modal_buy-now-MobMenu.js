(() => {
  const refs = {
    openModalBtn: document.querySelector('[buyNow-mobMenu-open]'),

    closeModalBtn: document.querySelector('[buyNow-mobMenu-close]'),

    buyNowMobMenu: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

 
  function toggleModal() {
    refs.buyNowMobMenu.classList.toggle('is-hidden');

  }
})();
