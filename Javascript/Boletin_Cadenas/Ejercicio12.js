/*
12.  Realizar la evaluación del ejercicio anterior sin tener en
cuenta si la letra pasada como parámetro esta en mayúsculas o
minúsculas
*/

const tieneLetra = (cadena,letra) => {
    return cadena.toUpperCase().indexOf(letra.toUpperCase()) != -1;
}

console.log(tieneLetra("Caramelo","C"));
console.log(tieneLetra("Caramelo","c"));
console.log(tieneLetra("Caramelo","p"));