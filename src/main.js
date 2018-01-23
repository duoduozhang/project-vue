import Vue from 'vue'
import App from './App'
// route和下面的route对应
import route from './router/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: route,
  render: c => c(App)
})
