window.Vue = require('vue')

import Panel from './panel.vue'
Vue.component('panel', Panel)

import LastUpdated from './last-updated.vue'
Vue.component('last-updated', LastUpdated)

import Weather from './weather.vue'
Vue.component('weather', Weather)

import Dashboard from './dashboard.vue'
Vue.component('dashboard', Dashboard)

import Alerts from './alerts.vue'
Vue.component('alerts', Alerts)

const app = new Vue({
  el: '#app',
  data: {
    currentTab: 'dashboard'
  }

})
