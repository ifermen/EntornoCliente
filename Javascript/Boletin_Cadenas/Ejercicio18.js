/**
 * 18.  Escribe una función llamada toCase que reciba como
 * parámetro de entrada una cadena de texto y devuelva esa misma
 * cadena de texto en minúsculas, un guión medio y de nuevo esa
 * misma cadena de texto en mayúsculas.
 * @param {string} text 
 * @returns {string}
 */
const toCase = (text) => {
    return text.toLowerCase() + "-" + text.toUpperCase();
}

console.log(toCase("Pablo"));