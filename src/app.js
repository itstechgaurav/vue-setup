import "./assets/scss/main.scss"
require("./assets/js/main")

import Vue from 'vue'
import App from './App.vue'
new Vue({
  el: '#app',
  render: h => h(App)
});