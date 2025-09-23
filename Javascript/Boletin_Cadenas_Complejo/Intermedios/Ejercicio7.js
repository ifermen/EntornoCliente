/**
 * 7. Devuelve la misma frase pero con la primera letra de cada
 * palabra en mayúscula. No usar split .
 * @param {string} texto 
 * @returns {string}
 */
function primerasMayusculas(texto){
    let trimedText = texto.trim();
    let spaceBefore = false;
    let result = "";
    for(i = 0; i < trimedText.length; i++){
        if(spaceBefore && /[a-z]/g.test(trimedText[i]) || i == 0){
            result = result + trimedText[i].toUpperCase();
        }else{
            result = result + trimedText[i];
        }
        spaceBefore = trimedText[i] == " ";
    }
    return result;
}

console.log(primerasMayusculas("hola mundo desde js"));