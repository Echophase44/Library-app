const addBook = document.querySelector("#addBook");
const popup = document.querySelector("#popup");
const formClose = document.querySelector(".formClose");

addBook.addEventListener("click", () => {
  popup.style.display = "block";
  popup.classList.add("addBlur");
});

formClose.addEventListener("click", () => {
  popup.style.display = "none";
  popup.classList.remove("addBlur");
});
