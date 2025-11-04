const request = new XMLHttpRequest();
request.open("GET","http://localhost:3000/paises");
request.send();
request.addEventListener("load",()=> {
    if(request.status === 200){
        console.log(request.responseText);
    }
});

document.addEventListener("DOMContentLoaded", (e) => {
    
})