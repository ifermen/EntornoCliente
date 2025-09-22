/*
11. Hacer una función tieneLetra que reciba como parámetro de
entrada una cadena de texto y una letra y devuelva true si la letra
esta presente en la palabra y false si no lo esta. Utilizar para
ello el método indexOf.
*/

const tieneLetra = (cadena,letra) => {
    return cadena.toUpperCase().indexOf(letra.toUpperCase()) != -1;
}

console.log(tieneLetra("Caramelo","C"));
console.log(tieneLetra("Caramelo","c"));
console.log(tieneLetra("Caramelo","p"));