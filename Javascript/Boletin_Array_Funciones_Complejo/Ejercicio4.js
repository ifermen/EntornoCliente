/*
Con:

let alumnos = [
  {nombre:'Ana', nota:7.5, curso:'DAW'},
  {nombre:'Luis', nota:4.5, curso:'DAW'},
  {nombre:'María', nota:9.0, curso:'DAW'},
  {nombre:'Pedro', nota:6.0, curso:'DAM'},
  {nombre:'Lucía', nota:8.5, curso:'DAM'}
]

    Obtén con filter solo los del curso DAW.

    Usa map para quedarte con los nombres de los aprobados (nota≥5).

    Con reduce, calcula la media de notas de DAM.

    Con find, busca al alumno llamado ‘María’.

    Con findIndex, obtén la posición del primer suspenso.

    Con sort, ordena los alumnos por nota descendente.

    Crea una función que reciba un array de alumnos y devuelva un objeto con {aprobados:x, suspensos:y}
*/


let alumnos = [
  {nombre:'Ana', nota:7.5, curso:'DAW'},
  {nombre:'Luis', nota:4.5, curso:'DAW'},
  {nombre:'María', nota:9.0, curso:'DAW'},
  {nombre:'Pedro', nota:6.0, curso:'DAM'},
  {nombre:'Lucía', nota:8.5, curso:'DAM'}
]

const alumnosDAW = alumnos.filter(a => a.curso == "DAW");
console.log("Cursos DAW: " + alumnosDAW.map(a => "{nombre:" + a.nombre + ",nota:" + a.nota + ",curso:" + a.curso + "}"));
console.log("Nota media de DAW: " + alumnosDAW.reduce(acc))