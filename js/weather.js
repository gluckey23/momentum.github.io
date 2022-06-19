// https://openweathermap.org/
// Current weather data
// https://api.openweathermap.org/data/2.5/weather?lat=37.3686272&lon=127.1169024&appid=1e267b0993418d6c6ef616f74d84cbf6

const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');
const API_KEY = "1e267b0993418d6c6ef616f74d84cbf6";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

	fetch(url)
	.then((response) => response.json())
	.then((data) => {
		city.innerText = data.name;
		weather.innerText = data.weather[0].main;
	});
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

