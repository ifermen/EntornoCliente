/*
6. Hacer una función devuelveMasLarga que reciba como parámetro de
entrada dos cadenas de texto y devuelva la mayor. En caso de que
ambas cadenas sean iguales, devolveremos la correspondiente al
primer parámetro de la función.
*/

const devuelveMasLarga = (cadena1,cadena2) => {
    let result = cadena1;
    if(cadena2.length>cadena1.length){
        result = cadena2;
    }

    return result;
}

console.log(devuelveMasLarga("Cometa","Estrella"));
console.log(devuelveMasLarga("Estrella","Cometa"));
console.log(devuelveMasLarga("Palo","Hola"));