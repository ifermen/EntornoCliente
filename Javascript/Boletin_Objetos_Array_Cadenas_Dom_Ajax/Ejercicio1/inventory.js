
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
inventory = {
    items: [],
  totalItems: 0
};



/**
 * Actualiza la propiedad totalItems automáticamente sumando las cantidades de cada artículo del array items.
 */
function updateTotalItems(){
    let total = inventory.items.reduce(((acc,item) => acc += item.quantity),0);
    inventory.totalItems = total;
}

/**
 * Añade un nuevo artículo al inventario o actualice el quantity si el artículo ya existe.
 * @param {Item} newItem 
 */
function addItem(newItem){
    let itemIndex = inventory.items.findIndex(item => item.name == newItem.name)
    if(itemIndex != -1){
        inventory.items[itemIndex].quantity += newItem.quantity;
    }else{
        inventory.items.push(newItem);
    }

    updateTotalItems();
}

/**
 * Elimina un artículo del inventario basado en su nombre.
 * @param {String} nameItem 
 */
function removeItem(nameItem){
    let itemIndex = inventory.items.findIndex(item => item.name == nameItem);
    inventory.items.splice(itemIndex,1);
}

/**
 * Devuelve el nombre de todos los artículos que cuestan más de 50.
 * @returns {String[]}
 */
function getItemByPriceOver50(){
    return inventory.items.filter(item => item.price > 50).map(item => item.name);
}

/**
 * Devuelve la cantidad total de artículos en stock cuyo nombre contenga la letra "o" (manipulación de cadenas).
 * @returns {number}
 */
function getTotalQuantityByNameWithO(){
    return inventory.items.filter(item => item.name.toLowerCase().includes("o")).reduce(((acc,item) => acc += item.quantity),0);
}

console.log(JSON.stringify(inventory));

updateTotalItems();
console.log(JSON.stringify(inventory));


addItem({name:"PC",quantity:3,price:500});
addItem({ name: "Laptop", quantity: 2, price: 1200 });
console.log(JSON.stringify(inventory));

console.log(getItemByPriceOver50());

console.log(getTotalQuantityByNameWithO());

