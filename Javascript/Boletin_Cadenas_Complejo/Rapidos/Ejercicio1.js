/**
 * 1. Devuelve el número de vocales (a, e, i, o, u) en la cadena
 * (ignorar mayúsc/minúsc)
 * @param {string} text 
 * @returns {number}
 */
function cuentaVocales(text){
    const charList = text.toLowerCase().split("");
    const vocals = "aeiou";
    let cont = 0;
    for(i = 0; i < charList.length; i++){
        if(vocals.indexOf(charList[i])!=-1){
            cont++;
        }
    }

    return cont;
}

console.log(cuentaVocales("Universidad"))