/*
    Crea una función media(...valores) que calcule la media de cualquier número de argumentos.

    Usa spread para pasar un array de números a Math.min y Math.max.

    Crea un objeto config con varias propiedades y usa spread para clonar y cambiar solo una propiedad.

    Usa desestructuración en parámetros para una función que reciba {nombre, nota} y muestre en consola un mensaje como "Alumno: nombre - Nota: nota".
*/

function media(...valores){
    return valores.reduce(((acc,value)=> acc += value),0)/valores.length;
}

console.log(media(1,2,3,4,5,6,7,8,9,10));

const nums = [5,6,3,2,1,8,6,4,3];
console.log("Min: " + Math.min(...nums));
console.log("Max: " + Math.max(...nums));

const config = {
    size : 5.4,
    name: "system",
    password: "passSystem"
}

const configClone = {...config};

config.size = 1;

console.log(configClone.size);

function printPupil(pupil){
    let {name,score} = {...pupil};
    console.log("Pupil: " + name + " - " + " Score: " + score);
}

printPupil({name:"Ivan",score:10})