/**
 * 20. Escribe una función llamada firstChar, que devuelva la
 * primera letra que no sea un espacio cuando una cadena de texto
 * es pasada.
 * @param {string} text
 * @returns {string}
 */
const firstChar = (text) => {
    return text.trim()[0];
}

console.log(firstChar("   Pantera"));