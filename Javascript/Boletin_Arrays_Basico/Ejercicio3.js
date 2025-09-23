/**
 * Ejercicio 3: Ordenar Notas
 * - Crea un array llamado notas con las siguientes calificaciones: [4, 8, 3, 10, 5].
 * - Escribe una función que tome el array de notas y lo ordene de menor a mayor. Utiliza el método sort.
 * - Imprime el array de notas ordenado por la consola.
 */

const notas = [4, 8, 3, 10, 5];

notas.sort((a,b)=>a-b);

console.log(notas);