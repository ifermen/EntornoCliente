/**
 * @typedef {Object} Product
 * @property {string} nombre
 * @property {number} price
 * @property {number} stock
 */

/**
 * @type {Product[]}
 */
let productos = [
  { nombre: "Teclado", precio: 25.5, stock: 10 },
  { nombre: "Ratón", precio: 15.0, stock: 0 },
  { nombre: "Monitor", precio: 150.0, stock: 5 },
  { nombre: "USB", precio: 8.0, stock: 25 },
];

const parent = document.getElementById("root");
const submit = document.getElementById("submit");
const markExpensiveProduct = document.getElementById("markExpensiveProduct");
const tableElem = document.createElement("table");

markExpensiveProduct.addEventListener("click", (e) => {
  for (let index = 0; index < tableElem.children.length; index++) {
    let row = tableElem.children.item(index);
    let price = Number(row.children[1].textContent);
    if (price > 50) {
      row.className = "expensive";
    }
  }
});

submit.addEventListener("click", (e) => {
  const nameInput = document.getElementById("name");
  const priceInput = document.getElementById("price");
  const stockInput = document.getElementById("stock");

  addNewProduct(productos, nameInput.value, priceInput.value, stockInput.value);
  updateTable(productos);
});

/**
 * Clean and update the table with new data
 * @param {Product[]} productosParam
 */
function updateTable(productosParam) {
  tableElem.innerHTML = "";
  productosParam.forEach((product, i) => {
    addNewRow(product,i);
  });

  parent.appendChild(tableElem);
}

/**
 * Add a new row in the table
 * @param {Product} product
 * @param {number} index
 */
function addNewRow(product, index) {
    let rowElem = document.createElement("tr");

    let tdNombreElem = document.createElement("td");
    tdNombreElem.textContent = product.nombre;
    let tdPrecioElem = document.createElement("td");
    tdPrecioElem.textContent = product.precio;
    let tdStockElem = document.createElement("td");
    tdStockElem.textContent = product.stock;

    let tdOption = document.createElement("td");
    let buttonDelete = document.createElement("button");
    buttonDelete.textContent = "Delete";
    buttonDelete.addEventListener("click", (e) => {
      tableElem.removeChild(rowElem);
      productos.splice(index, 1);
    });
    tdOption.appendChild(buttonDelete);

    rowElem.appendChild(tdNombreElem);
    rowElem.appendChild(tdPrecioElem);
    rowElem.appendChild(tdStockElem);
    rowElem.appendChild(tdOption);

    tableElem.appendChild(rowElem);
}

/**
 * Add a new product to the array
 * @param {Product[]} products
 * @param {string} name
 * @param {number} price
 * @param {number} stock
 */
function addNewProduct(products, name, price, stock) {
  products.push({
    nombre: name,
    precio: price,
    stock: stock,
  });

  addNewRow({
    nombre: name,
    precio: price,
    stock: stock,
  },products.length);
}

updateTable(productos);
