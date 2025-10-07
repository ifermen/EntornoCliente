/*
Queremos almacenar en localStorage las puntuaciones de un juego:

    Crea una función guardarPuntuacion(nombre, puntos) que guarde en localStorage un array de objetos con {nombre, puntos}.

    Crea otra función obtenerRanking() que devuelva el array ordenado por puntos descendente.

    Muestra el top 3 usando slice y forEach.

    Asegúrate de que no se repiten jugadores usando un Set de nombres antes de guardar.
*/

const scores = [];

function saveScore(name, scoreParam) {
  if (!new Set(scores.map((score) => score.name)).has(name)) {
    scores.push({ name: name, score: scoreParam });
  }
}

saveScore("Pepe", 7);
saveScore("Pepe", 3);
saveScore("Cesar", 5);
saveScore("Ivan", 10);
saveScore("Luis", 0);

function getRanking() {
  return scores.sort((a, b) => b.score - a.score);
}

const ranking = getRanking();
console.log(
  getRanking().map(
    (score) => "{name:" + score.name + ",score:" + score.score + "}"
  )
);

console.log(
  getRanking()
    .slice(0, 3)
    .map((score) => JSON.stringify(score))
);
