// HTML Template
// User inputs city in text box:  place input box on page
// User clicks button to search for city:  make button and have event listener for button click
// Once button is clicked, the user search is saved in local storage and city name is displayed in a recent search list
// If user clicks on city name from recent search list, the weather report will generate as if searched using text box & button
// Once button is clicked, the search will pull the data from the API for that city
// When the API responds the following data is received: current temp, weather icon, humidity, wind speed, UV Index
// Once data is received, need to add it to the HTML
// Background color should change based if they are favorable (white), moderate (light grey), severe (black)
// Data needs to be fetched to get 5 day forecast (need date, temp, icon, humidity, wind, UV)

// var requestURL =
//   "https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&units=imperial&appid=2b4cb763f48aaf8a00513c737695d02b";

// $(function getWeather(city) {
//   $(".weather-temperature").openWeather({
//     city: "Sacramento", //replace with *city*
//     placeTarget: ".weather-place",
//     units: "f",
//     windSpeedUnit: "Mps",
//     descriptionTarget: ".weather-description",
//     minTemperatureTarget: ".weather-min-temperature",
//     maxTemperatureTarget: ".weather-max-temperature",
//     windSpeedTarget: ".weather-wind-speed",
//     humidityTarget: ".weather-humidity",
//     sunriseTarget: ".weather-sunrise",
//     sunsetTarget: ".weather-sunset",
//     iconTarget: ".weather-icon",
//     customIcons: "/img/icons/weather/",
//     success: function (data) {
//       $(".weather-temperature").show();
//       console.log(data);
//     },
//     error: function (data) {
//       console.log(data.error);
//     },
//   });
// });
