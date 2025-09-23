/**
 * 8. Devuelve cuántas palabras hay en la cadena (palabras separadas
 * por uno o más espacios)
 * @param {string} texto 
 * @returns {number}
 */
function contadorDePalabras(texto){
    let trimedText = texto.trim();
    let cont = 1;
    for(i = 0; i < trimedText.length; i++){
        if(trimedText[i] == " "){
            cont++;
        }
    }

    return cont;
}

console.log(contadorDePalabras(" esto es una prueba "));