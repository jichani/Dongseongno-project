const API_KEY = "30e79371b742b9bec1172834c51dec60";

function onGeoOk() {
  const weatherURL = {
    "01d": "./img/clear.png",
    "01n": "./img/clear.png",
    "02d": "./img/few_clouds.png",
    "02n": "./img/few_clouds.png",
    "03d": "./img/clouds.png",
    "03n": "./img/clouds.png",
    "04d": "./img/clouds.png",
    "04n": "./img/clouds.png",
    "13d": "./img/snow.png",
    "09d": "./img/rain.png",
    "10d": "./img/rain.png",
    "11d": "./img/thunder.png",
    "50d": "./img/mist.png",
  }
  // 중파 위도, 경도
  const lat = 35.8672;
  const lon = 128.5936;
  // console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:last-child")
      const temp = data.main.temp
      const tempString = temp.toString().substring(0, 4);
      // console.dir(tempString)

      weather.innerText = `${tempString}°C`

      // console.log(data);
      // console.log(data.weather[0].icon)

      const iconcode = data.weather[0].icon;
      const iconurl = weatherURL[iconcode];
      // console.log(iconurl);
      const weatherIcon = document.querySelector("#weather span:first-child");
      weatherIcon.innerHTML = `<img src="${iconurl}" alt="weather icon">`;
    });
}


onGeoOk();
// onGeoOk({sexyObj})