function toggleLamp() {
  let icon = this.getElementsByTagName('i')[0] // e.target
  let device = this.closest('.element').querySelector('.device-icon')
  if (icon.classList.contains('fa-toggle-on')) {
    icon.classList.remove('fa-toggle-on')
    icon.classList.add('fa-toggle-off')
    device.classList.remove('fas')
    device.classList.add('far')
  } else {
    icon.classList.remove('fa-toggle-off')
    icon.classList.add('fa-toggle-on')
    device.classList.remove('far')
    device.classList.add('fas')
  }
  device.classList.toggle('device-on')
}


function registerHandlers() {
  document.querySelectorAll('.lamp').forEach(node => node.addEventListener('click', toggleLamp))
}

function updateClock() {
  let now = new Date()
  let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
  document.getElementById('clockTime').textContent = time
  let date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
  document.getElementById('clockDate').textContent = date
}

window.addEventListener('DOMContentLoaded', function() {
  registerHandlers()
  window.setInterval(updateClock, 1000)
  updateClock()
})

window.Vue = require('vue')

import Panel from './panel.vue'
Vue.component('panel', Panel)

import LastUpdated from './last-updated.vue'
Vue.component('last-updated', LastUpdated)

import Weather from './weather.vue'
Vue.component('weather', Weather)


const app = new Vue({
  el: '#app'
})
