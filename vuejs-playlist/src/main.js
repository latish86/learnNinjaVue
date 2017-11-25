import Vue from 'vue'
import App from './App.vue'
import La  from './globallatish.vue'

Vue.component('ninjas', La)

new Vue({
  el: '#app',
  render: h => h(App)
})
