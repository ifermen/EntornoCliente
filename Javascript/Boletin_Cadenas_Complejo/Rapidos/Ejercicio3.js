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

/**
 * 3. Devuelve true si la cadena es palíndromo ignorando espacios,
 * signos y mayúsculas, false si no.
 * @param {string} texto 
 * @returns {boolean}
 */
function esPalindromo(texto){
    let result = false;
    let textFormated = texto.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '').replaceAll(" ","")
        .toLowerCase();

    if(textFormated%2 != 0){
        result = textFormated.substring(0,textFormated.length/2) 
            == invertirCadena(
                textFormated.substring(
                    textFormated.length/2+1,
                    textFormated.length));
    }else{
        result = textFormated.substring(0,textFormated.length/2) 
            == invertirCadena(
                textFormated.substring(
                    textFormated.length/2,
                    textFormated.length));
    }
    return result;
}

console.log(esPalindromo("Dábale arroz a la zorra el abad"));


