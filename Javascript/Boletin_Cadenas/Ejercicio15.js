/**
 * 15. Hacer una función addGuiones que reciba como parámetro de
 * entrada una cadena texto y devuelva una nueva cadena que tendrá
 * un guion medio detrás de cada letra. Utilizar para ello un bucle
 * for.
 * @param {string} text
 * @returns {string}
 */
const addGuiones = (text) => {
    result = "";
    for (let i = 0; i < text.length; i++) {
        result = result + text[i] + "-"
    };

    return result.substring(0,result.length-1);
}

console.log(addGuiones("Calabaza"));