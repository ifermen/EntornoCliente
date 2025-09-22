/**
 * 13.  Hacer una función crearPalabra que reciba como parámetro de
    entrada una letra y un número y genere una nueva palabra que tenga
    la letra introducida repetida tantas veces como indique el número.
 * @param {string} letter 
 * @param {string} num 
 * @return {string}
 */
const crearPalabra = (letter,num) => {
    let result = "";
    if(letter.length==1){
        result = letter.repeat(num);
    }

    return result;
}

console.log(crearPalabra("a",5));
