import Vue from 'vue'
import App from './App.vue'
import './buefy';
import axios from 'axios';
import router from './router'
import './auth';
import store from './store';

import ErrorsMessage from '@/components/ErrorsMessage'
import SuccessMesage from '@/components/SuccessMesage'

Vue.component('ErrorsMessage', ErrorsMessage)
Vue.component('SuccessMesage', SuccessMesage)

import interceptorsSetup from './interceptors';
interceptorsSetup();

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
