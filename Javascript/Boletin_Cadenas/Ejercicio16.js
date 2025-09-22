/**
 * 16.  Hacer una función contadorDeLetras que reciba como parámetro
 * de entrada una cadena de texto y una letra y devuelva el número
 * de veces que esa letra esta presente en la palabra. Utilizar
 * para ello un bucle for.
 * @param {string} text 
 * @param {string} letter 
 * @returns {number}
 */
const contadorDeLetras = (text,letter) => {
    let cont = 0;
    for (let i = 0; i < text.length; i++) {
        if(text[i]==letter){
            cont++;
        }
    }
    return cont
}

console.log(contadorDeLetras("Calabaza","a"));