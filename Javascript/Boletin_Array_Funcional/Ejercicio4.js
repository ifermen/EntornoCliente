/*
Ejercicio 4: Métodos de Programación Funcional

Dado el siguiente array de números [1, 2, 3, 4, 5, 6, 7, 8, 9], realiza las siguientes operaciones:
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Utiliza filter para crear un nuevo array con los números pares.
const numsPares = nums.filter(num => num % 2 == 0);
console.log(numsPares);

//Utiliza map para crear un nuevo array con los cuadrados de los números.
const numsCuadrados = nums.map(num => num * num);
console.log(numsCuadrados);

//Utiliza reduce para calcular la suma de todos los números.
const numsSum = nums.reduce((acumulado, num) => {return acumulado += num},0)
console.log(numsSum);

//Utiliza every para verificar si todos los números son mayores que 0.
const everyMayor0 = nums.every(num => num>0);
console.log(everyMayor0);

//Utiliza some para verificar si algún número es mayor que 10.
const someMayor10 = nums.some(num => num>10);
console.log(someMayor10);