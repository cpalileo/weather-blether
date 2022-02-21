let cityList = [];

function searchCities() {
  event.preventDefault();
  let city = document.querySelector("#citySearch").value;
  getWeather(city);
}

function getWeather(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=2b4cb763f48aaf8a00513c737695d02b"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject("Failed to retrieve API data.");
      }
    })
    .then((data) => this.pullCurrent(data));
}
function pullCurrent(data) {
  const { name } = data;
  const { lon, lat } = data.coord;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  console.log(name, lon, lat, temp, icon, description, humidity, speed);
  document.querySelector(".cityDisplay").innerText = name;
  document.querySelector(".iconCurrent").src =
    "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  document.querySelector(".conditionCurrent").innerText =
    "Current conditions: " + description;
  document.querySelector(".tempCurrent").innerText =
    "With a temperature of " + temp + "\u2109.";
  document.querySelector(".humidCurrent").innerText =
    "Humidity is at " + humidity + "%";
  document.querySelector(".windCurrent").innerText =
    "With wind speeds moving at " + speed + " mph.";

  // document.querySelector(".uvCurrent").innerText = lon + lat;
  // document.querySelector(".cityDisplay").innerText = name;

  cityList.push(name);
  saveCities();
}

function saveCities() {
  localStorage.setItem("savedCities", JSON.stringify(cityList));
  callCities();
}

function callCities() {
  cityList = JSON.parse(localStorage.getItem("savedCities"));
  console.log(cityList);
  makeList(cityList);
}

function makeList(cityList) {
  var cont = document.getElementById("recentCities");
  var ul = document.createElement("ul");
  for (i = 0; i <= cityList.length - 1; i++) {
    var li = document.createElement("li");
    li.innerHTML = cityList[i];
    li.setAttribute("style", "display: block;");
    ul.appendChild(li);
  }
  cont.appendChild(ul);
}

// makeLocationsList();
