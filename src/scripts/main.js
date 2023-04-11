'use strict';
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

// Hiding picture while we see menu

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menus') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
