/*
10. Hacer una función generarNombre3 que reciba como parámetros de
entrada tres cadenas de texto. Si la longitud de alguna cadena
cadena es menor que cinco, la función debe devolver el texto
‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una
nueva palabra utilizando las tres últimas letras de cada palabra.
*/

const generarNombre3 = (cadena1,cadena2,cadena3) =>{
    let result = "error";
    if (cadena1.length >= 5 && cadena2.length >= 5 
        && cadena3.length >= 5){
        result = cadena1.substring(cadena1.length-3,cadena1.length) + 
            cadena2.substring(cadena2.length-3,cadena2.length) +
            cadena3.substring(cadena3.length-3,cadena3.length);
    }

    return result;
}

console.log(generarNombre3("Sol","Sopa","Pera"));
console.log(generarNombre3("Antonio","Sopa","Pera"));
console.log(generarNombre3("Antonio","Fernandez","Pera"));
console.log(generarNombre3("Sol","Fernandez","Pera"));
console.log(generarNombre3("Sol","Fernandez","Mendo"));
console.log(generarNombre3("Sol","Sopa","Mendo"));
console.log(generarNombre3("Antonio","Sopa","Mendo"));
console.log(generarNombre3("Antonio","Fernandez","Mendo"));