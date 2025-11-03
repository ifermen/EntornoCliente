import {
  bookStore,
  addBook,
  getBooksByCategory,
  getTotalBookStorePrice,
  getBooksByPriceOver18,
  sortByPrice,
} from "./bookStore.js";

document.addEventListener("DOMContentLoaded", (e) => {
  const tbody = document.getElementById("tbody");
  const form = document.getElementById("form");
  const inputTitle = document.getElementById("inputTitle");
  const inputAuthor = document.getElementById("inputAuthor");
  const inputPrice = document.getElementById("inputPrice");
  const inputCategory = document.getElementById("inputCategory");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const title = inputTitle.value.trim();
    const author = inputAuthor.value.trim();
    const price = Number(inputPrice.value.trim());
    const category = inputCategory.value.trim();

    if (title && author && price && category){
      addRow({title,author,price,category});
    }

    inputTitle.value = "";
    inputAuthor.value = "";
    inputPrice.value = "";
    inputCategory.value = "";
  });

  function renderTable() {
    tbody.innerHTML = "";
    bookStore.books.forEach((book) => {
      addRow(book)
    });
  }

  function addRow({ title, author, price, category }) {
    const newRow = document.createElement("tr");

    const tdTitle = document.createElement("td");
    tdTitle.textContent = title;
    
    const tdAuthor = document.createElement("td");
    tdAuthor.textContent = author;
    
    const tdPrice = document.createElement("td");
    tdPrice.textContent = price;
    
    const tdCategory = document.createElement("td");
    tdCategory.textContent = category;

    newRow.appendChild(tdTitle);
    newRow.appendChild(tdAuthor);
    newRow.appendChild(tdPrice);
    newRow.appendChild(tdCategory);

    tbody.appendChild(newRow);
  }

  renderTable();
});
