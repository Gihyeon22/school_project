var grid1 = document.getElementById("grid_1");
var grid2 = document.getElementById("grid_2");
var grid3 = document.getElementById("grid_3");
var reset = document.getElementById("reset");

grid1.onclick = function() {
    console.log("kleur")
    grid1.style.background = "grey";
}

grid2.onclick = function() {
    console.log("verdwijn")
    grid2.style.display = "none"
}

grid3.onclick = function() {
    console.log("groter")
    grid3.style.height = "400px"
    grid3.style.width = "400px"
}

reset.onclick = function() {
    window.location.reload();
}