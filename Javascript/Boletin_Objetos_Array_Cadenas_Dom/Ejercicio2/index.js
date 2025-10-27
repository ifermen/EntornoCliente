import {
    gradebook,
    calculateAverage,
    addStudent,
    addGrade,
    getNameByAverageOver8,
    getNameBySomeGradeOver9,
    sortByAverage
} from './gradebook.js'

document.addEventListener("DOMContentLoaded", (e)=>{
    const tBody = document.getElementById("tableBody");

    const form = document.getElementById("form");
    const inputName = document.getElementById("inputName");
    const buttonSubmit = document.getElementById("buttonSubmit");

    form.addEventListener("submit",(e) => {
        e.preventDefault();
        const newStudent = addStudent(inputName.value);
        if(newStudent){
            addRow(newStudent);
        }
        inputName.value = "";
    });

    /**
     * Clean the table body and reload the datas from gradebook 
     */
    function renderTable(){
        calculateAverage();
        tBody.innerHTML = ``;
        gradebook.students.forEach(student => {
            addRow(student);
        });
        markOutstanding();
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
        gradesCell.textContent = gradesToString(grades);

        const averageCell = document.createElement("td");
        averageCell.textContent = average;

        const buttonCell = document.createElement("td");
        const buttonAddGrade = document.createElement("button");
        buttonAddGrade.textContent = "New Grade";
        buttonAddGrade.addEventListener("click", e => {
            buttonAddGrade.disabled = true;
            addFormNewGrade(name,buttonCell);
        });
        buttonCell.appendChild(buttonAddGrade);

        newRow.appendChild(nameCell);
        newRow.appendChild(gradesCell);
        newRow.appendChild(averageCell);
        newRow.appendChild(buttonCell);
        tBody.appendChild(newRow);
    }

    /**
     * Add a form for add a new grade 
     * @param {string} name 
     * @param {HTMLTableCellElement} cell 
     */
    function addFormNewGrade(name,cell){
        const inputGrade = document.createElement("input");
        inputGrade.type = "number";
        inputGrade.max = 10;
        inputGrade.min = 0;
        inputGrade.style.width = "5em";
        const buttonAddGrade = document.createElement("button");
        buttonAddGrade.textContent = "Add";
        buttonAddGrade.addEventListener("click", e => {
            let grade = Number(inputGrade.value);
            addGrade(name,grade);
            updateRow(name,cell.parentElement);
            cell.children.item(0).disabled = false;
            cell.removeChild(inputGrade);
            cell.removeChild(buttonAddGrade);
        });
        cell.appendChild(inputGrade);
        cell.appendChild(buttonAddGrade);
    }

    /**
     * 
     * @param {string} name 
     * @param {HTMLTableRowElement} row 
     */
    function updateRow(name,row){
        let student = gradebook.students.find(student => student.name == name);
        const cells = row.children;
        cells.item(0).textContent = student.name;
        cells.item(1).textContent = gradesToString(student.grades);
        cells.item(2).textContent = student.average;
        markOutstanding();
    }

    /**
     * Convert an array of grades to a string with the elemets sparates by coma
     * @param {number[]} grades 
     * @returns {string}
     */
    function gradesToString(grades){
        return grades.reduce((carry,grade,idx) => {
            carry = carry + grade;
            if(idx != grades.length-1){
                carry = carry + ", ";
            }
            return carry;
        },"");
    }

    function markOutstanding(){
        const names = getNameByAverageOver8();
        Array.from(tBody.children).forEach(row => {
            if(names.indexOfincludes(row.children.item(0).textContent)){
                row.className = "outstanding";
            }
        })
    }

    renderTable();
});