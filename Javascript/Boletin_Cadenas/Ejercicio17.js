/**
 * 17.1.  Realizar la evolución del ejercicio anterior sin tener en
 * cuenta si la letra pasada como parámetro esta en mayúsculas o
 * minúsculas
 * @param {string} text 
 * @param {string} letter 
 * @returns {number}
 */
const contadorDeLetras = (text,letter) => {
    const textUpperCase = text.toUpperCase();
    const letterUpperCase = letter.toUpperCase();
    let cont = 0;
    for (let i = 0; i < textUpperCase.length; i++) {
        if(textUpperCase[i]==letterUpperCase){
            cont++;
        }
    }
    return cont
}

console.log(contadorDeLetras("Calabaza","a"));

/**
 * 17.2. Hacer una función contadorDeLetras2 que reciba como
 * parámetro de entrada dos cadenas de texto y una letra y devuelva
 * la cadena de texto en la que dicha letra esta más presente.
 * Utilizar para ello un bucle for. No tener en cuenta si la letra
 * pasada como parámetro esta en mayúsculas o minúsculas.
 * @param {string} text1
 * @param {string} text2
 * @param {string} letter 
 * @returns {string}
 */
const contadorDeLetras2 = (text1,text2,letter) => {
    let result="They have the same number of letters";
    let contText1 = contadorDeLetras(text1,letter);
    let contText2 = contadorDeLetras(text2,letter);
    
    if(contText1>contText2){
        result = text1;
    }else if(contText2>contText1){
        result = text2;
    }
    
    return result
}

console.log(contadorDeLetras2("Calabaza","Alamadalena","a"));
console.log(contadorDeLetras2("Calabaza","Lamadalena","a"));
