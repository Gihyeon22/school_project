var buttonAdd = document.getElementById("add");
var buttonRemove = document.getElementById("remove");
var newParagraph = document.createElement("p");
var container = document.getElementById("container");
var lastParagraph = document.querySelector("p:last-child");


buttonAdd.onclick = function() {
    console.log("+")
    newParagraph = document.createElement("p");
    newParagraph.textContent = ("Dit is meer content!");
    container.appendChild(newParagraph);
}

buttonRemove.onclick = function() {
    console.log("-")
    lastParagraph = document.querySelector("p:last-child");
    if (lastParagraph) {
        lastParagraph.parentNode.removeChild(lastParagraph)
    }
}