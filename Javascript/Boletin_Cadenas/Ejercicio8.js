/*
8. Hacer una función generarNombre que reciba como parámetros de
entrada tres cadenas de texto. Si la longitud de alguna cadena
cadena es menor que cinco, la función debe devolver el texto
‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una
nueva palabra utilizando las tres primeras letras de cada palabra.
*/

const generarNombre = (cadena1,cadena2,cadena3) =>{
    let result = "error";
    if (cadena1.length >= 5 && cadena2.length >= 5 
        && cadena3.length >= 5){
        result = cadena1.substring(0,3) + 
            cadena2.substring(0,3) + cadena3.substring(0,3);
    }

    return result;
}

console.log(generarNombre("Sol","Sopa","Pera"));
console.log(generarNombre("Antonio","Sopa","Pera"));
console.log(generarNombre("Antonio","Fernandez","Pera"));
console.log(generarNombre("Sol","Fernandez","Pera"));
console.log(generarNombre("Sol","Fernandez","Mendo"));
console.log(generarNombre("Sol","Sopa","Mendo"));
console.log(generarNombre("Antonio","Sopa","Mendo"));
console.log(generarNombre("Antonio","Fernandez","Mendo"));