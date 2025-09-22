/*
7. Hacer una función devuelveMasLarga2 que reciba como parámetro de
entrada tres cadenas de texto y devuelva la mayor. En caso de que al
menos dos cadenas tengan igual longitud, devolveremos el texto Hay
al menos dos cadenas iguales.
*/

const devuelveMasLarga2 = (cadena1,cadena2,cadena3) => {
    let result = "";
    if(cadena1.length>cadena2.length && 
        cadena1.length>cadena3.length){
        result = cadena1;
    }else if(cadena2.length>cadena1.length && 
        cadena2.length>cadena3.length){
        result = cadena2;
    }else if(cadena3.length>cadena1.length && 
        cadena3.length>cadena2.length){
        result = cadena3;
    }else{
        result = "Hay al menos dos cadenas iguales."
    }

    return result;
}

console.log(devuelveMasLarga2("Caramelo","Pera","Hasta"));
console.log(devuelveMasLarga2("Pepino","Pantorrilla","Hasta"));
console.log(devuelveMasLarga2("Caracol","Cola","Psicologo"));
console.log(devuelveMasLarga2("Sol","Pera","Bala"));