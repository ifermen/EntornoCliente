/*
Ejercicio 2: Sistema de gestión de notas
Imagina que eres un profesor y quieres llevar un sistema de notas para tus alumnos. Crea un objeto gradebook que contenga:
    Un array de objetos llamado students, donde cada objeto tiene las siguientes propiedades: name, grades (un array de números) y average (promedio de sus notas).

Ejemplo inicial:
let gradebook = {
  students: [
    { name: "Ana", grades: [8, 7, 9], average: 0 },
    { name: "Luis", grades: [6, 8, 6], average: 0 },
    { name: "Maria", grades: [9, 10, 9], average: 0 }
  ]
};

Tareas:
    Crea un método calculateAverage() que calcule el promedio de las notas de cada estudiante y lo almacene en la propiedad average.
    Crea un método addStudent(name) que añada un nuevo estudiante con un array vacío de notas.
    Crea un método addGrade(studentName, grade) que añada una nueva nota al array grades del estudiante especificado.
    Utiliza los métodos avanzados de arrays para:
        Imprimir los nombres de los estudiantes cuya nota promedio sea mayor que 8.
        Crear un array con los nombres de todos los estudiantes que tienen al menos una nota mayor que 9.
        Ordenar los estudiantes en función de sus promedios, de mayor a menor.
*/

/**
* @typedef {Object} Student
* @property {string} name
* @property {number[]} grades
* @property {number} average
*/

/**
 * @typedef {Object} Gradebook
 * @property {Student[]} students
 */

/** @type {Gradebook} */
let gradebook = {
  students: [
    { name: "Ana", grades: [8, 7, 9], average: 0 },
    { name: "Luis", grades: [6, 8, 6], average: 0 },
    { name: "Maria", grades: [9, 10, 9], average: 0 }
  ]
};

/**
 * Calcula el promedio de las notas de cada estudiante y lo almacene en la propiedad average.
 */
function calculateAverage(){
    gradebook.students.forEach(student => {
        student.average = 
            student.grades.reduce(((acc,grade) => acc += grade),0)/student.grades.length;
    });
}

/**
 * Añada una nueva nota al array grades del estudiante especificado.
 * @param {string} name 
 */
function addStudent(name){
    let index = gradebook.students.findIndex(student => student.name == name);
    if(index == -1){
        gradebook.students.push({name:name,grades:[],average:0});
    }
}

/**
 * Añada una nueva nota al array grades del estudiante especificado.
 * @param {string} studentName 
 * @param {number} grade 
 */
function addGrade(studentName, grade){
    let index = gradebook.students.findIndex(student => student.name == studentName);
    if(index != -1){
        gradebook.students[index].grades.push(grade);
        calculateAverage();
    }
}

/**
 * Devuelve los nombres de los estudiantes cuya nota promedio sea mayor que 8.
 * @returns {string[]}
 */
function getNameByAverageOver8(){
    return gradebook.students.filter(student => student.average > 8).map(student => student.name);
}

/**
 * Devuelve array con los nombres de todos los estudiantes que tienen al menos una nota mayor que 9.
 * @returns {string[]}
 */
function getNameBySomeGradeOver9(){
    return gradebook.students
        .filter(student => student.grades.some(grade => grade > 9))
        .map(student => student.name);
}

/**
 * Ordenar los estudiantes en función de sus promedios, de mayor a menor.
 */
function sortByAverage(){
    gradebook.students.sort((a, b) => b.average - a.average);
}

export{gradebook,calculateAverage,addStudent,addGrade,getNameByAverageOver8,getNameBySomeGradeOver9,sortByAverage}