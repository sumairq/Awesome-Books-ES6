const booksWindow = document.querySelector('.books-section');
const addWindow = document.querySelector('.add-books');
const contactWindow = document.querySelector('.contact-section');

export const booksDisp = (evt) => {
  evt.preventDefault();
  addWindow.classList.remove('toggle');
  booksWindow.classList.add('toggle');
  contactWindow.classList.add('toggle');
}

export const addDisp = (evt) => {
  evt.preventDefault();
  booksWindow.classList.remove('toggle');
  addWindow.classList.add('toggle');
  contactWindow.classList.add('toggle');
}

export const contactDisp = (evt) => {
  evt.preventDefault();
  contactWindow.classList.remove('toggle');
  booksWindow.classList.add('toggle');
  addWindow.classList.add('toggle');
}
