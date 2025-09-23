/**
 * 5. Devuelve la misma cadena pero con todas las
 * vocales sustituidas por * .
 * @param {string} texto 
 * @returns {string}
 */
function sustituirVocaleS(texto){
    const regExp = /([AEIOUaeiou])/g;
    return texto.replace(regExp,"*");
}

console.log(sustituirVocaleS("papeleRA"));