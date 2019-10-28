import Vue from 'vue'
import App from './App.vue'
import './buefy';
import axios from 'axios';
import router from './router'
import './auth';
import store from './store';

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
