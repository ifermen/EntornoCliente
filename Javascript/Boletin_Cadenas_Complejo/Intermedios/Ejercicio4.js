/**
 * 4. Rota la cadena n posiciones hacia la derecha
 * (si n > longitud, usa módulo).
 * @param {string} texto 
 * @param {number} n 
 * @returns {string}
 */
function rotarDerecha(texto,n){
    let text1 = texto.substring(0,texto.length-(n%texto.length));
    let text2 = texto.substring(texto.length-(n%texto.length),
        texto.length);
    
    return text2 + text1;
}

console.log(rotarDerecha("abcdef",2));
console.log(rotarDerecha("abcdef",8));