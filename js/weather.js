const API_KEY = "2f3847ae51ab170d3e7ccb91cf311faf";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`You live in ${lat}, ${lon}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.getElementById("weather");
        const icon = document.createElement("img");
        icon.id = "icon";
        const temp = document.getElementById("temp");
        const city = document.getElementById("city");
        // const Main = document.getElementById("Main");

        const weatherIcon = data.weather[0].icon;
        icon.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        weather.prepend(icon);
        city.innerText = data.name;
        temp.innerText = data.main.temp;
        // Main.innerText = data.weather[0].main;
    });
}
function onGeoError() {
    alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
