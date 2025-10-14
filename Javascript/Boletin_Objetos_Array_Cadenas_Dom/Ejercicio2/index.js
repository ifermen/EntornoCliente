let alumnos = [
  {nombre:'Ana', nota:7.5},
  {nombre:'Luis', nota:4.5},
  {nombre:'María', nota:9.0},
  {nombre:'Pedro', nota:6.0},
  {nombre:'Lucía', nota:8.5}
];

document.addEventListener("DOMContentLoaded", (e)=>{
    const tBody = document.getElementById("tableBody");

    function updateTable(alumnos){
        alumnos.forEach((alumnos,i) => {
            addRow(alumnos,i);
        });
    }

    function addRow(alumn, index){
        const row = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.textContent = alumn.nombre;

        const tdNota = document.createElement("td");
        tdNota.textContent = alumn.nota;

        row.appendChild(tdName);
        row.appendChild(tdNota);

        tBody.appendChild(row);
    }

    updateTable(alumnos)
});