import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang'

import './mock'
import http from './utils/httpRequest'

import './assets/styles/icon.css'
import './assets/styles/global.scss'
import './assets/styles/reset.scss'

Vue.config.productionTip = false

Vue.prototype.$http = http
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
