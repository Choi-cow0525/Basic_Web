const API_KEY="926873200567909ce7931783cfa0ca7b";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const cityContainer = document.getElementById("city");
        const weatContainer = document.getElementById("state");
        console.log(cityContainer);
        console.log(weatContainer);
        const city = data.name; 
        const weather = `${data.weather[0].main} / ${data.main.temp}`;
        cityContainer.innerText = city;
        weatContainer.innerText = weather;
    });

}

function onGeoError(){
    alert("Can't find you. Can't Show the Weather.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
