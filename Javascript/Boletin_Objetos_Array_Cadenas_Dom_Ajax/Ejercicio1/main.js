import { getItems } from "./service.js";

/**
* @typedef {Object} Item
* @property {string} name
* @property {number} quantity
* @property {number} price
*/

/**
* @typedef {Object} Inventory
* @property {Item[]} items
* @property {number} totalItems
*/
/**
 * @type {Inventory}
 */
const inventory = {
    items: [],
  totalItems: 0
};

document.addEventListener("DOMContentLoaded",e => {
  const tbody = document.getElementById("tbody");

  function loadItems() {
    const request = getItems();
    request.addEventListener("load", e => {
      inventory.items = JSON.parse(request.responseText);
    });
  }

  function renderTable(){
    inventory.items.forEach(item => {

    })
  }

  function addNewRow(item) {
    
  }
})