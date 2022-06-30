(() => {
  const refs = {
    openmobMenuBtn: document.querySelector('[buyNow-mobMenu-open]'),

    closemobMenuBtn: document.querySelector('[buyNow-mobMenu-close]'),

    buyNowMobMenu: document.querySelector('[data-modal]'),
  };

  refs.openmobMenuBtn.addEventListener('click', toggleModal);
  refs.closemobMenuBtn.addEventListener('click', toggleModal);

 
  function toggleModal() {
    document.body.classList.toggle("mobMenu-open");
    refs.buyNowMobMenu.classList.toggle('is-hidden');
  }
})();
