/*
4. Escribe una función llamada devuelveEnesimaLetra que reciba como
parámetro de entrada una cadena de texto y un número y devuelva la
letra que ocupe la posición indicada por el número.
*/

const devuelveEnesimaLetra = (cadena, indice) => {
    let result = "";
    if (indice<cadena.length){
        result = cadena[indice];
    }

    return result;
}

console.log(devuelveEnesimaLetra("Caramelo",1));
console.log(devuelveEnesimaLetra("Caramelo",2));
console.log(devuelveEnesimaLetra("Caramelo",3));
console.log(devuelveEnesimaLetra("Caramelo",5));
console.log(devuelveEnesimaLetra("Caramelo",8));