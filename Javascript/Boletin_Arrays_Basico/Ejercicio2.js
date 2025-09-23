/**
 * Ejercicio 2: Copiar un Array
 * - Crea un array llamado original con algunos elementos.
 * - Crea un nuevo array llamado copia que sea una copia de original utilizando el método slice.
 * - Modifica un elemento en copia y verifica si también se modifica en original.
 */

const original = [2,6,4,8,9,5,3];

const copia = original.slice();

console.log(original);
console.log(copia);

copia[0]=3;

console.log(original);
console.log(copia);