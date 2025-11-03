document.addEventListener("DOMContentLoaded", e => {
    const formPhrase = document.getElementById("formPhrase");
    const inputPhrase = document.getElementById("inputPhrase");
    const ulResult = document.getElementById("ulResult")

    formPhrase.addEventListener("submit", e => {
        e.preventDefault();
        const arrayWord = inputPhrase.value.trim().split(" ");
        addNewLi(arrayWord.reduce(((carry,word) => carry + word[0]),"").toLocaleUpperCase());
        inputPhrase.value = "";
    });

    formPhrase.addEventListener("reset", e => {
        e.preventDefault();
        ulResult.innerHTML = ``;
        inputPhrase.value = "";
    })

    function addNewLi(acronym){
        const newLi = document.createElement("li");
        newLi.textContent = acronym;

        if(acronym.length > 3){
            newLi.classList.add("over3Words");
        }

        ulResult.appendChild(newLi);
    }
})