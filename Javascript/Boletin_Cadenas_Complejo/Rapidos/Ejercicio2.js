/**
 * 2. Devuelve la cadena invertida.
 * @param {string} texto 
 * @returns {string}
 */
function invertirCadena(texto){
    let reverseText = "";
    const charList = texto.split("");

    for(i = charList.length-1; i >= 0; i--){
        reverseText = reverseText + charList[i];
    }

    return reverseText;
}

console.log(invertirCadena("Hola"));