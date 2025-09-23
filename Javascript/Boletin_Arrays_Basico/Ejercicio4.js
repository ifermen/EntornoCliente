/**
 * Ejercicio 4: Ordenar un Array de Objetos
 * - Crea un array de objetos llamado alumnos donde cada objeto tiene las propiedades nombre y edad. Agrega al menos 5 objetos a este array.
 * - Escribe una función que tome el array de alumnos y lo ordene por edad de menor a mayor utilizando el método sort.
 * - Imprime el array de alumnos ordenado por la consola.
 */

const alumnos = [{nombre: "Ivan",edad:23},
    {nombre: "Luis",edad:19},
    {nombre: "Viejo",edad:90},
    {nombre: "Pepe",edad:20}
];

function sort(alumnos){
    return alumnos.sort((a,b)=>a.edad-b.edad);
}

console.log(sort(alumnos));