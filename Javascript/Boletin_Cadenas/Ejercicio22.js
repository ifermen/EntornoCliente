/**
 * 22. Escribe una función llamada firstWord que reciba como parámetro de
 * entrada una cadena de texto y devuelva la primera palabra de esa cadena.
 * La primera palaba de la cadena serán todos los caracteres que hay hasta
 * el primer espacio.
 * @param {string} text 
 * @returns {string}
 */
function firstWord(text){
    return text.trim().split(" ")[0];
}

console.log(firstWord("see and stop"));
console.log(firstWord("    see and stop       "));