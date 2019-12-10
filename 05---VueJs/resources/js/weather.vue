<template>
  <panel :title="'Weather in ' + city">
      <i slot="left-action" class="action-icon fas fa-sync-alt"
        @click="fetchWeatherData"
      ></i>
      <div class="element">
          <i class="device-icon fas fa-thermometer-empty"></i>
          <span class="reading">
              <span>Temperature</span>
              <span></span>
          </span>
          <span>{{temperature}} ºC</span>
      </div>
      <div class="element">
          <i class="device-icon fas fa-percent"></i>
          <span class="reading">
              <span>Humidity</span>
              <span></span>
          </span>
          <span>{{humidity}}%</span>
      </div>
      <div class="element">
          <i class="device-icon fas fa-location-arrow"></i>
          <span class="reading">
              <span>Wind</span>
              <span></span>
          </span>
          <span>{{wind}} km/h</span>
      </div>
      <div class="element">
          <i class="device-icon fas fa-sun"></i>
          <span class="reading">Sunrise</span>
          <span>{{sunrise}}</span>
      </div>
      <div class="element">
          <i class="device-icon fas fa-sun"></i>
          <span class="reading">Sunset</span>
          <span>{{sunset}}</span>
      </div>
      <p>
        <last-updated :timestamp="lastUpdated" :interval-millis="30000"></last-updated>
      </p>
  </panel>
</template>
<script>

const axios = require('axios')
const moment = require('moment')

export default {
  props: {
    city: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      lastUpdated: false,
      temperature: null,
      humidity: null,
      sunrise: null,
      sunset: null,
      wind: null
    }
  },
  computed: {
    url() {
      return `http://api.openweathermap.org/data/2.5/weather?q=${this.city},PT&units=metric&appid=18f09cc1b414bd6902c598f33b3965df`
    }
  },
  methods: {
    fetchWeatherData() {
      axios.get(this.url)
        .then(response => this.updatePanel(response.data))
    },
    updatePanel(data) {
      this.temperature = data.main.temp
      this.humidity = data.main.humidity
      this.wind = new Number(data.wind.speed * 3.6).toFixed(2)
      this.sunrise = moment.unix(data.sys.sunrise).format('HH:mm:ss')
      this.sunset = moment.unix(data.sys.sunset).format('HH:mm:ss')
      this.lastUpdated = moment()
    }
  }
}
</script>
