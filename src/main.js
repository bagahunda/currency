import Vue from 'vue'
import App from './App.vue'
import store from './state/store'
import './assets/styles/index.css'
import '~/node_modules/vue-multiselect/dist/vue-multiselect.min.css'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
