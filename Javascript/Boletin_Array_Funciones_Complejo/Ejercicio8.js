/*
Crea un script que:
    Pida al usuario una lista de números separados por coma con prompt().
    Convierta la cadena en array con split.
    Convierta todos los elementos a Number.
    Calcule y muestre:
        La suma y media con reduce.
        El máximo y mínimo con Math.max(...arr) y Math.min(...arr).
        Un nuevo array con solo los pares.
        Un nuevo array con todos multiplicados ×2.
        Si hay al menos un número mayor que 100 (some).
        Si todos son positivos (every).

    Muestre todos los resultados con console.table().
*/

const numsPrompt = prompt("Introduce numbers separate by coma: ");

const numsPromptArray = numsPrompt.split(",");

const nums = numsPromptArray.map(num => Number(num)).filter(num => !isNaN(num));

const sum = nums.reduce(((acc,num) => acc += num),0);

const avg = sum/nums.length;

const max = Math.max(...nums);

const min = Math.min(...nums);

const arrayPair = nums.filter(num => num%2 == 0);

const arrayOdd = nums.filter(num => num%2 != 0);

const arrayx2 = nums.map(num => num*2);

const someMoreThan100 = nums.some(num => num>100);

const everyPrositive = nums.every(num => num>0);

console.table({numsPrompt,numsPromptArray,nums,sum,avg,max,min,arrayPair,arrayOdd,arrayx2,someMoreThan100,everyPrositive});