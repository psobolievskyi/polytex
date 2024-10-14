(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
    navLinks: document.querySelectorAll(
      "[data-menu-about-close], [data-menu-products-close], [data-menu-spares-close], [data-menu-repair-close], [data-menu-contacts-close]"
    ),
    header: document.querySelector(".header"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.navLinks.forEach((link) => link.addEventListener("click", toggleModal));

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    refs.openModalBtn.style.display = refs.modal.classList.contains("is-open")
      ? "none"
      : "block";
    refs.closeModalBtn.style.display = refs.modal.classList.contains("is-open")
      ? "block"
      : "none";

    if (refs.modal.classList.contains("is-open")) {
      refs.modal.style.top = refs.header.offsetHeight + "px";
    } else {
      refs.modal.style.top = "";
    }
  }
})();
