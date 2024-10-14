(() => {
    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття
      openModalBtn: document.querySelector('[data-menu-open]'),
      // Додати атрибут data-modal-close на кнопку закриття
      closeModalBtn: document.querySelector('[data-menu-close]'),
      // Додати атрибут data-modal на бекдроп модалки
      modal: document.querySelector('[data-menu]'),
  
      closeAboutLink: document.querySelector('[data-menu-about-close]'),
      closeProductsLink: document.querySelector('[data-menu-products-close]'),
      closeSparesLink: document.querySelector('[data-menu-spares-close]'),
      closeRepairLink: document.querySelector('[data-menu-repair-close]'),
      closeContactsLink: document.querySelector('[data-menu-contacts-close]'),
      
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeAboutLink.addEventListener('click', toggleModal);
    refs.closeProductsLink.addEventListener('click', toggleModal);
    refs.closeSparesLink.addEventListener('click', toggleModal);
    refs.closeRepairLink.addEventListener('click', toggleModal);
    refs.closeContactsLink.addEventListener('click', toggleModal);
  
    
    function toggleModal() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.modal.classList.toggle('is-open');
    }
  })();