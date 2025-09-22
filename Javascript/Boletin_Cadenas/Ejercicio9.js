/*
Hacer una función generarNombre2 que reciba como parámetros de
entrada tres cadenas de texto. Si la longitud de alguna cadena
cadena es menor que cinco, la función debe devolver el texto ‘error’.
Si ninguna cadena tiene menos de 5 letras, devolver una nueva
palabra utilizando la última letra de cada palabra.
*/

const generarNombre2 = (cadena1,cadena2,cadena3) =>{
    let result = "error";
    if (cadena1.length >= 5 && cadena2.length >= 5 
        && cadena3.length >= 5){
        result = cadena1[cadena1.length-1] + 
            cadena2[cadena2.length-1] + cadena3[cadena3.length-1];
    }

    return result;
}

console.log(generarNombre2("Sol","Sopa","Pera"));
console.log(generarNombre2("Antonio","Sopa","Pera"));
console.log(generarNombre2("Antonio","Fernandez","Pera"));
console.log(generarNombre2("Sol","Fernandez","Pera"));
console.log(generarNombre2("Sol","Fernandez","Mendo"));
console.log(generarNombre2("Sol","Sopa","Mendo"));
console.log(generarNombre2("Antonio","Sopa","Mendo"));
console.log(generarNombre2("Antonio","Fernandez","Mendo"));