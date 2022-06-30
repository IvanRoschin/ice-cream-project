(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal_mobMen-open]"),
    closeModalBtn: document.querySelector("[data-modal_mobMen-close]"),
    modal: document.querySelector("[data-modal_header]"),
    modal_mobMen: document.querySelector("[data-modal_header]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // document.body.classList.toggle("modal_mobMen-open");
    refs.modal.classList.toggle("is-hidden");
    refs.modal_mobMen.classList.toggle("is-hidden");
  }
})();
