/*
Dado:

let ventas = [
  {producto:'Libro', unidades:3, precio:12.5},
  {producto:'Bolígrafo', unidades:10, precio:1.2},
  {producto:'Carpeta', unidades:2, precio:5.0}
]

    Crea un nuevo array con el total por línea (unidades * precio).

    Usa reduce para calcular el total de ventas.

    Usa filter para quedarte solo con productos de más de 2 unidades.

    Convierte el array de productos en una cadena con map + join.

    Invierte el array con reverse y comprueba si afecta al original (referencia).

    Crea una copia del array usando slice antes de invertirlo.
*/
let ventas = [
  {producto:'Libro', unidades:3, precio:12.5},
  {producto:'Bolígrafo', unidades:10, precio:1.2},
  {producto:'Carpeta', unidades:2, precio:5.0}
]

const totalByRow = ventas.map(product => product.precio*product.unidades);
console.log(totalByRow);
console.log("Total selling: " + ventas.reduce(((acc,sell) => acc+=(sell.precio*sell.unidades)), 0));
console.log("More than 2 unities: " + ventas.filter(sell => sell.unidades>2)
    .map(sell => "{product:" + sell.producto + ",untities:" + sell.unidades+ ",price:" + sell.precio + "}"));
console.log("Array by string: " + ventas.map(sell => JSON.stringify(sell)).join("-"));

/*
let reverseSellings = ventas.reverse();

console.log(reverseSellings.map(sell => "{product:" + sell.producto + ",untities:" + sell.unidades+ ",price:" + sell.precio + "}"));
console.log(ventas.map(sell => "{product:" + sell.producto + ",untities:" + sell.unidades+ ",price:" + sell.precio + "}"));
*/

let reverseSellingsSpice = ventas.slice(0,ventas.length).reverse();

console.log(reverseSellingsSpice.map(sell => "{product:" + sell.producto + ",untities:" + sell.unidades+ ",price:" + sell.precio + "}"));
console.log(ventas.map(sell => "{product:" + sell.producto + ",untities:" + sell.unidades+ ",price:" + sell.precio + "}"));