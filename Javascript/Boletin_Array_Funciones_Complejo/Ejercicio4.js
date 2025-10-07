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
console.log("Nota media de DAW: " + alumnosDAW.reduce(((acc,alumno) => acc += alumno.nota),0)/alumnosDAW.length);
console.log("Buscar a María: " + alumnos.find(alumno => alumno.nombre=="María").nombre);
console.log("Primer suspenso: " + alumnos.findIndex(alumno => alumno.nota<5));
alumnos.sort((a, b) => b.nota-a.nota);
console.log("Alumnos ordenados por nota: " + alumnos.map(a => "{nombre:" + a.nombre + ",nota:" + a.nota + ",curso:" + a.curso + "}"));

function mapPupilsByPassed(pupils){
  return pupilsMap = {
    passed : pupils.filter(a => a.nota>=5),
    notPassed : pupils.filter(a => a.nota<5)
  };
}
let pupils = mapPupilsByPassed(alumnos)
console.log("Mapa de alumnos: " + pupils);
