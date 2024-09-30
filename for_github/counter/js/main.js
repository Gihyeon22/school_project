
var count = 0;
var counter = document.getElementById("counter");
counter.innerText = count;

var buttonRed = document.getElementById("button-red");
buttonRed.onclick = function(){
    console.log("Naar beneden!")
    if (count >= 1)
        count -= 1;
    else {
        count = 0;
    }
    counter.innerText = count;
}

var buttonGreen = document.getElementById("button-green");
buttonGreen.onclick = function(){
    console.log("Naar boven!")
        count += 1;
        if(count > 100)
        count = 0;
    counter.innerText = count;
}

// Stopwatch
var minutes = 0;
var seconds = 0;
var everySecond =  false;
var watch = document.getElementById("stopwatch");
watch.innerText = minutes + ":0" + seconds;


// Var time start
var start = document.getElementById("button-start")
start.onclick = function() {
    console.log("Start!")
    if(everySecond !== false){
        clearInterval(everySecond)
    }

    everySecond = setInterval(function(){
        seconds += 1;
    
        if(minutes == 60) {
            seconds += 1;
            minutes = 0;
        }
    
        if(seconds > 60) {
            seconds = 0;
            minutes += 1;
        }
        if(seconds > 9) {
            watch.innerText = minutes + ":" + seconds;
        }

        else {
            watch.innerText = minutes + ":0" + seconds;
        }

    }, 1000)
}

var stop = document.getElementById("button-stop")
stop.onclick = function() {
    console.log("Stop!")

    clearInterval(everySecond)
}

