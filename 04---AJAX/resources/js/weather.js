const axios = require('axios')
const moment = require('moment')

const url = 'http://api.openweathermap.org/data/2.5/weather?q=LEIRIA,PT&units=metric&appid=18f09cc1b414bd6902c598f33b3965df'

let lastUpdated = null;
function fetchWeatherData() {
  axios.get(url)
    .then(response => updatePanel(response.data))
}

function set(id, value) {
  document
    .getElementById(id)
    .textContent = value
}

function updatePanel(data) {
  set('weatherTemperature', `${data.main.temp} ºC`)
  set('weatherHumidity', `${data.main.humidity} %`)
  set('weatherWind', `${data.wind.speed * 3.6} km/h`)
  set('weatherSunrise', moment.unix(data.sys.sunrise).format('HH:mm:ss'))
  set('weatherSunset', moment.unix(data.sys.sunset).format('HH:mm:ss'))
  lastUpdated = moment()
  updateTimestamp()
}

window.addEventListener('DOMContentLoaded', function() {
  document
    .getElementById('weatherReload')
    .addEventListener('click', fetchWeatherData);
})

function updateTimestamp() {
  set('weatherTimestamp', lastUpdated == null ? '' : lastUpdated.fromNow())
}

window.setInterval(updateTimestamp, 30000);
