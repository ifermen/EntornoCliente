/**
 * Crea una función llamada saludar que tome un nombre como argumento y muestre un mensaje de saludo en la consola
 * @param {string} nombre 
 */
function saludar(nombre){
    console.log("Hola desde una funccion normal, " + nombre);
}

/**
 * Luego, reescribe la misma función utilizando una arrow function.
 * @param {string} nombre 
 */
const saludarArrowFunction = nombre => {
    console.log("Hola desde una arrow function, " + nombre);
}

saludar("Iván");
saludarArrowFunction("Iván");