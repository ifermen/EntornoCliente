/**
 * Escribe una función llamada informacionProducto que tome un objeto con
 * información de un producto (nombre, precio, categoría, etc.) y utilice
 * un template literal para generar una descripción del producto. Luego,
 * muestra esa descripción en la consola.
 * @param {*} product 
 * @returns {string}
 */
function informacionProducto(product){
    return `Producto: ${product.productName}\
        \n - Price: ${product.price}€\
        \n - Category: ${product.category}`
}

product ={
    productName : "Iphone 17",
    price : 1500,
    category : "Smartphone"
}

console.log(informacionProducto(product));