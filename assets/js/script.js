var requestURL =
  "https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&units=imperial&appid=2b4cb763f48aaf8a00513c737695d02b";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// $(function () {
//   $(".weather-temperature").openWeather({
//     lang: "ru",
//     city: "Los Angeles",
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
//     success: function () {
//       $(".weather-temperature").show();
//     },
//     error: function (message) {
//       console.log(message);
//     },
//   });
// });
