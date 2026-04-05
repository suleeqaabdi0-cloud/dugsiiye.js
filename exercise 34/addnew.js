const fanta = document.querySelector("#fanta")

function add(){
   const newItem = document.createElement("li");
            newItem.textContent = "contact";
            fanta.appendChild(newItem);
}

function remove(){
    if(fanta.lastChild)
    fanta.removeChild(fanta.lastChild);
}