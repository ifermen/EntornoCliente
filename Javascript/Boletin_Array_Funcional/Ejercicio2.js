/**
 * Crea una función llamada potencia que calcule la potencia de un número
 * dado a un exponente dado. La función debe tener un valor por defecto
 * de exponente igual a 2.
 * @param {number} base 
 * @param {number} exponente 
 * @returns {number}
 */
function potencia(base,exponente=2){
    let result = 1;
    for(i = 0; i < exponente; i++){
        result = result * base;
    }

    return result;
}

console.log(potencia(5));
console.log(potencia(2,3));