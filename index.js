import { DateTime } from './node_modules/luxon/src/luxon.js';
import Book from './modules/book.js';
import Collection from './modules/collection.js';

import { booksDisp, addDisp, contactDisp } from './modules/navigation.js';

const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const submitBtn = document.querySelector('.add-btn');

const coll = new Collection();
if (localStorage.getItem('bookCollection')) {
  const localBooks = JSON.parse(localStorage.getItem('bookCollection'));
  localBooks.bookColl.forEach((element) => {
    coll.add(new Book(element.title, element.author));
  });
}

submitBtn.addEventListener('click', () => {
  coll.add(new Book(inputTitle.value, inputAuthor.value));
});

/* navigation */

const navAdd = document.querySelector('#addNew');
const navList = document.querySelector('#list');
const navContact = document.querySelector('#contact');

navAdd.addEventListener('click', booksDisp);

navList.addEventListener('click', addDisp);

navContact.addEventListener('click', contactDisp);

const dateSection = document.querySelector('.date');

setInterval(() => {
  const dt = DateTime.now();

  dateSection.textContent = dt
    .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)
    .slice(0, -5);
}, 1000);
