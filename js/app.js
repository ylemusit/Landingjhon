const navToggle = document.querySelector('[data-nav-toggle]');
const navigation = document.querySelector('[data-navigation]');
const header = document.querySelector('[data-header]');
const demoForm = document.querySelector('[data-demo-form]');
const formStatus = document.querySelector('[data-form-status]');
const yearElement = document.querySelector('[data-current-year]');

const closeNavigation = () => {
  if (!navToggle || !navigation) return;
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.querySelector('.sr-only').textContent = 'Abrir menú';
  navigation.classList.remove('is-open');
};

if (navToggle && navigation) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navToggle.querySelector('.sr-only').textContent = isOpen ? 'Abrir menú' : 'Cerrar menú';
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNavigation);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      closeNavigation();
      navToggle.focus();
    }
  });
}

if (header) {
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

if (demoForm && formStatus) {
  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!demoForm.checkValidity()) {
      demoForm.reportValidity();
      formStatus.textContent = 'Revisa los campos obligatorios para completar la prueba.';
      formStatus.className = 'form-status form-status--error';
      return;
    }

    formStatus.textContent = 'Prueba completada: el formulario funciona, pero no se ha enviado ni almacenado ningún dato.';
    formStatus.className = 'form-status form-status--success';
  });
}

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
