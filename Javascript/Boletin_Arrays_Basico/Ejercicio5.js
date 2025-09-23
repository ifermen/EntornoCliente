/**
 * Ejercicio 5: Otros Métodos de Array
 * - Crea dos arrays, array1 y array2, con algunos elementos.
 * - Utiliza el método concat para concatenar los dos arrays en uno nuevo llamado concatenado.
 * - Utiliza el método reverse para invertir el orden de los elementos en concatenado.
 * - Utiliza el método indexOf para encontrar la posición del elemento 'Plátanos' en concatenado.
 * - Utiliza el método lastIndexOf para encontrar la última posición del elemento 'Plátanos' en concatenado.
 */

const array1 = [1,6,4,3,"Platano",20,5,10];
const array2 = ["Platano",6,40,7,3,20,"Platano",1];

const concatenado = array1.concat(array2);

console.log(concatenado);

concatenado.reverse();

console.log(concatenado);

console.log(concatenado.indexOf("Platano"));

console.log(concatenado.lastIndexOf("Platano"));