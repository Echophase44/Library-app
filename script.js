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
  console.log(myLibrary);
  displayLibrary();
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

// ######################### Create Visual Books #########################

function displayLibrary() {
  const library = document.querySelector("#libraryContainer");
  const libraryBook = document.createElement("div");

  libraryBook.classList.add("libraryBook");
  library.appendChild(libraryBook);
}
