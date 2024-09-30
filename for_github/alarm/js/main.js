//variable hours

var hourTime = document.getElementById("hour-time");
var hourUp = document.getElementById("hour-up");
var hourDown = document.getElementById("hour-down");
var hour = 0;


//on click +1 hour
hourUp.onclick = function () {
    hour += 1;
    if (hour > 23) {
        hour = 0;
    }
    if (hour < 10) {
        hourTime.innerText = "0" + hour;
    }
    else {
        hourTime.innerText = hour;
    }
    console.log("Uur omhoog");
}


//on click -1 hour
hourDown.onclick = function () {
    hour -= 1;
    if (hour < 0) {
        hour = 23;
    }
    if (hour < 10) {
        hourTime.innerText = "0" + hour;
    }
    else {
        hourTime.innerText = hour;
    }
    console.log("Uur omlaag");
}

//variable minuten
var minuteTime = document.getElementById("minute-time")
var minuteUp = document.getElementById("minute-up");
var minuteDown = document.getElementById("minute-down");
var minute = 0;


//on click +1 minuten
minuteUp.onclick = function () {
    minute += 1;
    if (minute > 59) {
        minute = 0;
        hourTime.innerText = hour += 1;
    }
    if (hour > 9) {
        hourTime.innerText = hour;
    }
    if (hour > 23) {
        hour = 0;
        hourTime.innerText = "0" + hour;
    }
    if (minute < 10) {
        minuteTime.innerText = "0" + minute;
    }
    else {
        minuteTime.innerText = minute;
    }
    console.log("minute omhoog")
}

//on click -1 minute
minuteDown.onclick = function () {
    minute -= 1;
    if (minute < 0) {
        minute = 59;
        hourTime.innerText = hour -= 1;
    }
    if (hour < 10) {
        hourTime.innerText = "0" + hour;
    }
    if (hour < 0) {
        hourTime.innerText = hour = 23;
        hourTime.innerText = hour;
    }

    if (minute < 10) {
        minuteTime.innerText = "0" + minute;
    }
    else {
        minuteTime.innerText = minute;
    }
    console.log("minute omlaag")
}

var dialog = document.getElementById("dialogue");
var toggle = document.getElementById("alarm-checkbox");
var wakeUp = new Audio("/sounds/low-quality-samsung.mp3")
var timer = null;
var getTimerOut = null;

toggle.checked = false;
toggle.onchange = function () {
    console.log(toggle.checked);

    //als checkbox aan staat/true maak een vernadering
    if (toggle.checked === true) {
        dialog.innerText = ("timer set at: " + hour + " hour and " + minute + " minute(s).")
        toggle.checked = true;
        console.log("timer set at", hour, minute)
        toggle.classList.add("alarm-checkbox-checked");
        dialog.style.display = "flex";
        getTimerOut = setTimeout(function() {
            dialog.style.display = "none";
        }, 2000)
         timer = setInterval(function () {
            var date = new Date();
            var dateHour = date.getHours();
            var dateMinute = date.getMinutes();

            //als hour zelfde is asl dateHour en als minuten zelfde zijn als dateMinute
            //doe zet geluid aan en zet in console "Wekker"
            if (hour === dateHour && minute === dateMinute) {
                wakeUp.play();
                console.log("Wekker");
            }
        }, 1000)
    } 
    else {
        console.log("alarm turned off");
        dialog.style.display = "none";
        clearInterval(timer);
        clearTimeout(getTimerOut);

        //haal class weg en dan verandert checkbox kleur naar grijs
        toggle.classList.remove("alarm-checkbox-checked");
    }
}

