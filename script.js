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

addBtn.addEventListener("click", () => {
  addBookToLibrary();
  closePopup();
  console.log(myLibrary);
});

function openPopup() {
  popup.style.display = "block";
  popup.classList.add("addBlur");
}

function closePopup() {
  popup.style.display = "none";
  popup.classList.remove("addBlur");
}

// ######################### Constructor #########################

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this._title = formContent.title.value;
    this._author = formContent.author.value;
    this._pages = formContent.pages.value;
    this._read = formContent.read.value;
  }
}

function addBookToLibrary() {
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}
