/**
 * 14. Completar el ejercicio anterior haciendo que en la nueva
 * palabra generada las letras esten en mayúsculas.
 * @param {string} letter 
 * @param {string} num 
 * @return {string}
 */
const crearPalabra = (letter,num) => {
    let result = "";
    if(letter.length==1){
        result = letter.repeat(num);
    }

    return result.toUpperCase();
}

console.log(crearPalabra("a",5));