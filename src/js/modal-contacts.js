(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-contact-open]'),
    closeModalBtn: document.querySelector('[data-modal-contact-close]'),
    modalcontact: document.querySelector('[data-modal-contact]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalcontact.classList.toggle('is-hidden');
  }
})();