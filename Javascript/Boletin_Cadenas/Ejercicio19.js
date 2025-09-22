/**
 * 19.  Escribe una función llamada shortcut que tome dos cadenas
 * de texto y devuelva la inicial de cada una de las dos cadenas.
 * @param {string} word1
 * @param {string} word2
 * @returns {string}
 */
const shortcut = (word1,word2) => {
    return word1[0] + word2[0];
}

console.log(shortcut("Amnesty","International"));