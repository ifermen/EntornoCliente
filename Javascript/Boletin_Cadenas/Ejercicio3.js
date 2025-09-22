/*
Escribe una función llamada devuelveUltimaLetra que reciba como
parámetro de entrada una cadena de texto y devuelva la última letra.
*/

const devuelveUltimaLetra = (cadena) => {
    return cadena[cadena.length - 1];
}

console.log(devuelveUltimaLetra("Caramelo"));
console.log(devuelveUltimaLetra("Antena"));
console.log(devuelveUltimaLetra("Pelo"));
console.log(devuelveUltimaLetra("Tarta"));
console.log(devuelveUltimaLetra("Bala"));