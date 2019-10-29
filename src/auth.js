import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router'

Vue.router = router

Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
    fetchData: { url: `profile`, method: 'GET', enabled: true, authType: 'bearer' },
    refreshData: { url: `profile`, method: 'GET', enabled: true, interval: 30, authType: 'bearer' },
    authRedirect: { path: '/profile' },
    // notFoundRedirect: { path: '/' },
})
