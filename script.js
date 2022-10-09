const addBook = document.querySelector("#addBook");
const popup = document.querySelector("#popup");
const formClose = document.querySelector(".formClose");

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
