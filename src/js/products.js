(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-product-open]'),
    closeModalBtn: document.querySelector('[data-product-close]'),
    modal: document.querySelector('[data-product]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
