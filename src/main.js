import Vue from 'vue'
import App from './App.vue'
import './buefy';
import 'axios';
import router from './router'

Vue.config.productionTip = false

window.axios = require('axios');

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
