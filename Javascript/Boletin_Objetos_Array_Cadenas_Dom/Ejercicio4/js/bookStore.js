/**
 * @typedef {Object} Book
 * @property {string} title
 * @property {string} author
 * @property {number} price
 * @property {string} category
 */
/**
 * @typedef {Object} BookStore
 * @property {Book[]} books
 */
/**
 * @type {BookStore}
 */
const bookStore = {
  books: [
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      price: 20,
      category: "Non-fiction",
    },
    { title: "1984", author: "George Orwell", price: 15, category: "Fiction" },
  ],
};

/**
 * Add a new book to the bookstore
 * @param {string} title 
 * @param {string} author 
 * @param {number} price 
 * @param {string} category 
 */
function addBook(title,author,price,category){
  if(bookStore.books.findIndex(book => book.title == title) == -1){
    bookStore.books.push({title,author,price,category})
  }
}

/**
 * Find books by a category
 * @param {string} category 
 * @returns {Book[]}
 */
function getBooksByCategory(category){
  return bookStore.books.filter(book => book.category == category);
}

/**
 * Calculate the total price of the bookstore
 * @returns {number}
 */
function getTotalBookStorePrice(){
  return bookStore.books.reduce(((carry,book) => carry + book.price),0);
}

/**
 * Return books whose price is over 18
 * @returns {Book[]}
 */
function getBooksByPriceOver18(){
  return bookStore.books.filter(book => book.price>18);
}

/**
 * Sort books by price descending
 */
function sortByPrice(){
  bookStore.books.sort((a,b) => a.price-b.price);
}

export {bookStore,addBook,getBooksByCategory,getTotalBookStorePrice,getBooksByPriceOver18,sortByPrice};