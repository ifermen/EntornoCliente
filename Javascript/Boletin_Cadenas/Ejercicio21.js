/**
 * 21. Escribe una función llamada indexOfIgnoreCase que recibaç
 * dos cadenas de texto y devuelva la posición de la primera
 * ocurrencia de la segunda cadena de texto en la primera. La
 * función no debería tener en cuenta mayúsculas y minúsculas.
 * @param {string} text1 
 * @param {string} text2 
 * @returns {number}
 */
const indexOfIgnoreCase = (text1,text2) => {
    upperText1 = text1.toUpperCase();
    upperText2 = text2.toUpperCase();
    
    indexMatch = 0;
    indexText2 = 0;
    result = -1;

    for (i = 0; i < upperText1.length && result == -1; i++){
        if(upperText1[i] == upperText2[indexText2]){
            if(indexText2 == 0){
                indexMatch = i;
            }
            if(upperText2.length-1 == indexText2){
                result = indexMatch;
            }
            indexText2++;
        }else{
            indexText2 = 0;
            indexMatch = 0;
            if(upperText1[i] == upperText2[indexText2]){
                if(indexText2 == 0){
                indexMatch = i;
            }
            if(upperText2.length-1 == indexText2){
                result = indexMatch;
            }
                indexText2++;
            }
        }
    }

    return result
}

console.log(indexOfIgnoreCase("bit","it"));
console.log(indexOfIgnoreCase("bit","IT"));
console.log(indexOfIgnoreCase("bit","ip"));
console.log(indexOfIgnoreCase("bit","IP"));
console.log(indexOfIgnoreCase("biti","it"));
console.log(indexOfIgnoreCase("biti","IT"));
console.log(indexOfIgnoreCase("bitti","ti"));
console.log(indexOfIgnoreCase("bitti","TI"));