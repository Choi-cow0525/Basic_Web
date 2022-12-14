const clock = document.querySelector("h2#clock");

clock.innerText = "00:00";

function getClock(){
    const date = new Date();
    clock.innerText = (`${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`);
}

setInterval(getClock, 1000);

setTimeout(getClock, 0);

