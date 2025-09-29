/**
 * Crea una función llamada aplica_fn que tome un número y una
 * función como argumentos y aplique la función al número.
 * Prueba la función con una función que devuelva el cuadrado del
 * número.
 * @param {number} num 
 * @param {function} fn 
 * @returns {number}
 */
function aplica_fn(num, fn){
    return fn(num);
}

function cuadrado(num) {
    return num * num;
}

console.log(aplica_fn(5,cuadrado));