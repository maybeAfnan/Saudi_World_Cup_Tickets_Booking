
  const btn = document.getElementById('burgerButton');
  const menu = document.getElementById('navMenu');

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });
