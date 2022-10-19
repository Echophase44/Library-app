const addBook = document.querySelector("#addBook");
const popup = document.querySelector("#popup");
const formClose = document.querySelector(".formClose");
const addBtn = document.querySelector("#addBtn");

addBook.addEventListener("click", () => {
  openPopup();
});

formClose.addEventListener("click", () => {
  closePopup();
});

function openPopup() {
  popup.style.display = "block";
  popup.classList.add("addBlur");
}

function closePopup() {
  popup.style.display = "none";
  popup.classList.remove("addBlur");
}

addBtn.addEventListener("click", () => {
  addBookToLibrary();
  closePopup();
  renderLibrary();
  formContent.reset();
});

// ######################### Constructor #########################

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this._title = title;
    this._author = author;
    this._pages = pages;
    this._read = read;
    this._bookId = myLibrary.length;
  }
}

function addBookToLibrary() {
  newBook = new Book(
    formContent.title.value,
    formContent.author.value,
    formContent.pages.value,
    formContent.read.checked
  );
  myLibrary.push(newBook);
}

// ######################### Create/Render Books #########################

function renderLibrary() {
  const container = document.querySelector("#libraryContainer");
  const books = document.querySelectorAll(".libraryBook");
  books.forEach((book) => container.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
}

function createBook(item) {
  const library = document.querySelector("#libraryContainer");
  const libraryBook = document.createElement("div");
  const titleInfo = document.createElement("div");
  const authorInfo = document.createElement("div");
  const pageInfo = document.createElement("div");
  const readInfo = document.createElement("button");
  const deleteBook = document.createElement("button");

  libraryBook.classList.add("libraryBook");
  library.appendChild(libraryBook);

  titleInfo.textContent = item._title;
  titleInfo.classList.add("titleInfo");
  libraryBook.appendChild(titleInfo);

  authorInfo.textContent = item._author;
  authorInfo.classList.add("authorInfo");
  libraryBook.appendChild(authorInfo);

  pageInfo.textContent = "Pages: " + item._pages;
  pageInfo.classList.add("pageInfo");
  libraryBook.appendChild(pageInfo);

  readInfo.classList.add("readBtn");
  libraryBook.appendChild(readInfo);
  if (item._read === false) {
    readInfo.textContent = "Not Read";
    libraryBook.style.backgroundColor = "#c48a8a";
  } else {
    readInfo.textContent = "Read";
    libraryBook.style.backgroundColor = "rgb(172, 207, 172)";
  }

  readInfo.addEventListener("click", () => {
    item._read === true ? (item._read = false) : (item._read = true);
    renderLibrary();
  });

  deleteBook.textContent = "Delete";
  deleteBook.value = item._bookId;
  deleteBook.classList.add("deleteBook");
  libraryBook.appendChild(deleteBook);

  deleteBook.addEventListener("click", () => {
    let newLibrary = [];
    myLibrary.forEach((element) => {
      if (element._bookId !== parseInt(deleteBook.value)) {
        newLibrary.push(element);
      }
      myLibrary = newLibrary;
    });

    renderLibrary();
  });
}
