import {gradebook,calculateAverage,addStudent,addGrade,getNameByAverageOver8,getNameBySomeGradeOver9,sortByAverage} from './gradebook.js'

document.addEventListener("DOMContentLoaded", (e)=>{
    const tBody = document.getElementById("tableBody");

    /**
     * Clean the table body and reload the datas from gradebook 
     */
    function renderTable(){
        tBody.innerHTML = ``;
        gradebook.students.forEach(student => {
            addRow(student);
        })
    }

    /**
     * Add a new row in the tbody
     * @param {import('./gradebook.js').Student} student 
     */
    function addRow({name, grades, average}){
        const newRow = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = name;

        const gradesCell = document.createElement("td");
        gradesCell.textContent = grades.reduce((carry,grade,idx) => {
            carry = carry + grade;
            if(idx != grades.length-1){
                carry = carry + ", ";
            }
            return carry;
        },"");

        const averageCell = document.createElement("td");
        averageCell.textContent = average;

        newRow.appendChild(nameCell);
        newRow.appendChild(gradesCell);
        newRow.appendChild(averageCell);
        tBody.appendChild(newRow);
    }

    renderTable();
});