var button = document.getElementById("js--button");
var resetButton = document.getElementById("js--reset");

button.onmouseenter = function() {
    button.style.background = "#0000ba"
}
button.onmouseleave = function() {
    button.style.background = "blue"
}

resetButton.onmouseenter = function() {
    resetButton.style.background = "#d10202"
}
resetButton.onmouseleave = function() {
    resetButton.style.background = "red"
}
resetButton.onclick = function() {
    resetButton.style.background = "#890000"
    window.location.reload();
}

var h1 = document.getElementById("js--h1");
var int = Math.floor(Math.random() * 10) + 1;

console.log(int);

var inputNum = document.getElementById("js--numbers");
var inputButton = document.getElementById("js--button");
var attempt = document.getElementById("js--attempts");
var attempts = 0;


inputButton.onclick = function() {
    inputButton.style.background = "#00005f"

    if(inputNum.value == int) {
        h1.innerText = "How??????";
        attempts += 1;
    }
    if(inputNum.value > int) {
        h1.innerText = "te hoog :)";
        attempts += 1;
    }
    if (inputNum.value < int) {
        h1.innerText = "te laag :(";
        attempts += 1;
    }

    if(attempts == 0) {
        attempt.style.display = "none"
    }
    attempt.textContent = "Attempts: " + attempts
}

