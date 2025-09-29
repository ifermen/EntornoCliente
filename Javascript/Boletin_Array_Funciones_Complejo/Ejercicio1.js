/*
Tienes este array inicial:

let productos = [
  { id: 1, nombre: 'Teclado', precio: 25.5, stock: 10 },
  { id: 2, nombre: 'Ratón', precio: 15.0, stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 150.0, stock: 5 },
  { id: 4, nombre: 'USB', precio: 8.0, stock: 25 }
]

Haz lo siguiente:

    Con filter, obtén los productos con stock > 0.

    Con map, crea un array solo con los nombres de productos.

    Con reduce, calcula el valor total del stock (precio × stock).

    Usa sort para ordenar por precio ascendente.

    Crea una función buscarProducto(nombre) que devuelva el objeto que coincide (o null si no existe).

    Usa desestructuración para extraer nombre y precio del producto con id=3.

    Convierte el array de productos en un Set de nombres y de nuevo en array para eliminar duplicados.
*/

let productos = [
  { id: 1, nombre: 'Teclado', precio: 25.5, stock: 10 },
  { id: 2, nombre: 'Ratón', precio: 15.0, stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 150.0, stock: 5 },
  { id: 4, nombre: 'USB', precio: 8.0, stock: 25 }
  ,{ id: 5, nombre: 'USB', precio: 8.0, stock: 25 }
]

console.log("Productos con stock > 0:");
console.log(productos.filter((p) => p.stock > 0));

console.log("Array solo con los nombres de productos:");
console.log(productos.map((p) => p.nombre));

console.log("Valor total del stock (precio × stock):");
console.log(productos.reduce(((total,product) => total+=product.precio*product.stock),0));

function buscarProducto(nombre){
    let product = productos.find(p=>p.nombre==nombre);
    return product == undefined ? null : product;
}

console.log("Buscar el producto Ratón:");
console.log(buscarProducto("Ratón"));

console.log("Extraer nombre y precio del producto con id=3.:");
let {nombre,precio} = productos.find(p=>p.id==3);
console.log("Nombre: " + nombre + " - Precio: " + precio);

console.log("Eliminar duplicados:");
console.log(Array.from(new Set(productos.map(p => p.nombre))));