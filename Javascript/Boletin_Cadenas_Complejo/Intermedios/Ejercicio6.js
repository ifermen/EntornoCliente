/**
 * 6. Implementa un “run-length encoding” simple que
 * convierta "aaabbc" en "a3b2c1" .
 * @param {string} texto ç
 * @returns {string}
 */
function comprimirRepeticiones(texto){
    let charActual = "";
    let cont = 0;
    let result = "";
    for(i = 0; i < texto.length; i++){
        if(charActual == texto[i]){
            cont++;
        }else if(cont!=0){
            result = result + charActual + cont;
            charActual = texto[i];
            cont = 1;
        }else{
            charActual = texto[i];
            cont = 1;
        }
    }

    return result;
}

console.log(comprimirRepeticiones("wwwwaaadexxxxxx"));