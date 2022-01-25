const booksWindow = document.querySelector('.books-section');
const addWindow = document.querySelector('.add-books');
const contactWindow = document.querySelector('.contact-section');

export function booksDisp(evt) {
  evt.preventDefault();
  addWindow.classList.remove('toggle');
  booksWindow.classList.add('toggle');
  contactWindow.classList.add('toggle');
}

export function addDisp(evt) {
  evt.preventDefault();
  booksWindow.classList.remove('toggle');
  addWindow.classList.add('toggle');
  contactWindow.classList.add('toggle');
}

export function contactDisp(evt) {
  evt.preventDefault();
  contactWindow.classList.remove('toggle');
  booksWindow.classList.add('toggle');
  addWindow.classList.add('toggle');
}