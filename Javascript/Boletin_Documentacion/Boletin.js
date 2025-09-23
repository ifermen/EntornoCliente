// @ts-check

/**@type {string} URL de la API */
const API_URL = "https://api.example.com";
/**@type {number} Contador*/
let contador = 0;
/**@type {boolean} Para saber si el usuario está activo*/
const usuarioActivo = true;

/**
 * Calcula el area de un triangulo
 * @param {number} base Base del triangulo
 * @param {number} altura Altura del triangulo
 * @returns {number} Area total
 */
function areaRectangulo(base, altura) {
    return base * altura;
}

/**
 * Convierte un texto a en mayusculas
 * @param {string} texto Texto a convertir
 * @returns {string}
 */
function convertirEnMayusculas(texto) {
    return texto.toUpperCase();
}

/**
 * Generador de nombre completo
 * @param {string} nombre Nombre
 * @param {string} apellido Apellido
 * @returns {string}
 */
function generarNombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}

/**
 * Comprueba si mayor de edad
 * @param {number} edad Edad
 * @returns {boolean}
 */
function esMayorDeEdad(edad) {
    return edad >= 18;
}

/**
 * @typedef {Object} Producto
 * @property {string} marca
 * @property {string} modelo
 * @property {number} año
 */

/** @type {Producto} */
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};

/**
 * Devuelve informacion del producto
 * @param {Producto} coche Producto
 * @returns {string}
 */
function mostrarCoche(coche) {
    return `${coche.marca} ${coche.modelo} (${coche.año})`;
}

//areaRectangulo("pepe",2);