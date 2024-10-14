(() => {
    const refs = {
      
      openModalBtn: document.querySelector('[data-menu-open]'),      
      closeModalBtn: document.querySelector('[data-menu-close]'),      
      modal: document.querySelector('[data-menu]'),
      navLinks: document.querySelectorAll('[data-menu-about-close], [data-menu-products-close], [data-menu-spares-close], [data-menu-repair-close], [data-menu-contacts-close]'),
      header: document.querySelector('.header'),

    //   closeAboutLink: document.querySelector('[data-menu-about-close]'),
    //   closeProductsLink: document.querySelector('[data-menu-products-close]'),
    //   closeSparesLink: document.querySelector('[data-menu-spares-close]'),
    //   closeRepairLink: document.querySelector('[data-menu-repair-close]'),
    //   closeContactsLink: document.querySelector('[data-menu-contacts-close]'),
      
    };

    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (window.innerWidth < 947) {
        if (currentScroll > lastScrollTop) {
          
          refs.header.style.transform = 'translateY(-100%)';
        } else {
          
          refs.header.style.transform = 'translateY(0)';
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valori negativi dello scroll
      }
    });
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    // refs.closeAboutLink.addEventListener('click', toggleModal);
    // refs.closeProductsLink.addEventListener('click', toggleModal);
    // refs.closeSparesLink.addEventListener('click', toggleModal);
    // refs.closeRepairLink.addEventListener('click', toggleModal);
    // refs.closeContactsLink.addEventListener('click', toggleModal);
    refs.navLinks.forEach(link => link.addEventListener('click', toggleModal));
  
    
    function toggleModal() {
      
      refs.modal.classList.toggle('is-open');
      refs.openModalBtn.style.display = refs.modal.classList.contains('is-open') ? 'none' : 'block';
      refs.closeModalBtn.style.display = refs.modal.classList.contains('is-open') ? 'block' : 'none';
    }
  })();