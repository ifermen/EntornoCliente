/**
 * Implementa una función llamada validarDNI que tome un número de DNI
 * (con o sin letra) como argumento y determine si es un DNI válido.
 * La función debe calcular la letra correspondiente al número y
 * compararla con la letra proporcionada (si se proporciona). Devuelve
 * true si es válido y false si no lo es.
 * @param {string} dni
 * @returns {boolean} 
 */
function validarDNI(dni){
    const dniRegex = /^\d{8}[A-Za-z]?$/;
    const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    let result = false;

    if(dniRegex.test(dni)){
        if(dni.length == 9){
            let numbersDni = Number(dni.substring(0,8));
            let letter = dni[8].toUpperCase();
            result = letter == letters[numbersDni%23];
        }else{
            result = true;
        }
    }

    return result;
}

console.log(validarDNI("78221080p"));