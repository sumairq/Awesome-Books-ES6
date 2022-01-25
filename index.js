
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const submitBtn = document.querySelector('.add-btn');

const bookSection = document.querySelector('.books');
const txt = document.querySelector('form > p');

const booksWindow = document.querySelector('.books-section');
const addWindow = document.querySelector('.add-books');
const contactWindow = document.querySelector('.contact-section');



class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }

  class Collection {
    constructor(books = []) {
      this.books = books;
    }
  
    add(data) {
      if (
        this.books.filter(
          (item) => item.author === data.author && item.title === data.title,
        ).length > 0
      ) {
        txt.innerHTML = 'Book Already Exists';
        setTimeout(() => {
          txt.innerHTML = '';
        }, 1500);
        return;
      }
      if (data.title === '' || data.author === '') {
        txt.innerHTML = 'Please fill all the fields';
        setTimeout(() => {
          txt.innerHTML = '';
        }, 1500);
        return;
      }
      txt.innerHTML = 'Book Added';
      this.books.push(data);
      this.display(data);
      this.remove();
      this.populateStorage();
      inputAuthor.value = '';
      inputTitle.value = '';
      setTimeout(() => {
        txt.innerHTML = '';
      }, 1500);
    }
  
    remove() {
      const removeBtns = document.querySelectorAll('.remove-button');
      removeBtns[removeBtns.length - 1].addEventListener('click', (evt) => {
        this.removeFromColl(evt.target);
        bookSection.removeChild(evt.target.parentNode);
      });
    }
  
    display(data) {
      if (this) {
        const div = document.createElement('div');
        div.className = 'book-wraper';
        div.innerHTML = `<h3>"${data.title}" by</h3>
                        <h3>${data.author}</h3>
                        <button data-value="${data.title}-${data.author}" type="button" class ="remove-button">Remove</button>`;
        bookSection.appendChild(div);
      }
    }
  
    removeFromColl(data) {
      const arr = data.getAttribute('data-value').split('-');
      this.books = this.books.filter(
        (item) => item.title + item.author !== arr[0] + arr[1],
      );
      this.populateStorage();
    }
  
    populateStorage() {
      localStorage.setItem(
        'bookCollection',
        JSON.stringify({
          bookColl: this.books,
        }),
      );
    }
  }
  

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

 function booksDisp(evt) {
    evt.preventDefault();
    addWindow.classList.remove('toggle');
    booksWindow.classList.add('toggle');
    contactWindow.classList.add('toggle');
  }
  
 function addDisp(evt) {
    evt.preventDefault();
    booksWindow.classList.remove('toggle');
    addWindow.classList.add('toggle');
    contactWindow.classList.add('toggle');
  }
  
   function contactDisp(evt) {
    evt.preventDefault();
    contactWindow.classList.remove('toggle');
    booksWindow.classList.add('toggle');
    addWindow.classList.add('toggle');
  }

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
