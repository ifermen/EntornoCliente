/**
 * 23. Crea una función llamada saludoPersonalizado que tome un nombre
 * y una edad como argumentos y utilice un template literal para
 * devolver un saludo personalizado que incluya el nombre y la edad.
 * @param {string} name 
 * @param {number} age 
 * @returns {string}
 */
function saludoPersonalizado(name,age){
    return `Hello ${name}, you are ${age} years old`;
}

console.log(saludoPersonalizado("Ivan",23));