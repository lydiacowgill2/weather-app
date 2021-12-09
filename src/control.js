let now = new Date();

let h2 = document.querySelector("h2");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (hours < 10) {
  hours = `0${hours}`;
}

if (minutes < 10) {
  minutes = `0${minutes}`;
}

h2.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeatherCondition(response) {
  document.querySelector("#place").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#windSpeed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(city) {
  let apiKey = "337e1b19b3c93d655b5f41837a773d82";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#input").value;
  search(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

function convertToFahrenheight(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = 66;
}

let fahrenheightLink = document.querySelector("#fahrenheit-link");
fahrenheightLink.addEventListener("click", convertToFahrenheight);

function convertToCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = 19;
}

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", convertToCelcius);

search("London");
