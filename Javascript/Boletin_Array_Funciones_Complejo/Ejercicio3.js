/*
Con:

let palabras = ['hola','adios','bien','mal','javascript','JS','array','map']

    Convierte todas las palabras a mayúsculas con map.

    Filtra solo las que tengan más de 3 letras.

    Ordena por longitud ascendente.

    Usa join para unirlas en una cadena separada por guiones.

    Usa split para volver a tenerlas en array.

    Con reduce, cuenta cuántas letras en total suman todas.

*/

let palabras = ['hola','adios','bien','mal','javascript','JS','array','map'];

console.log("Todas las palabras en mayuscula: " + palabras.map(palabra => palabra.toUpperCase()));
console.log("Más de 3 letras: " + palabras.filter(palabra => palabra.length>3));
console.log("Ordenadas: " + palabras.sort((a,b) => a.length - b.length));
let joinedWords = palabras.join("-");
console.log("Juntas: " + joinedWords);
console.log("Separadas otra vez: " + joinedWords.split("-"));
console.log("Número total de letras: " + palabras.reduce(((acc,palabra) => acc+=palabra.length),0));