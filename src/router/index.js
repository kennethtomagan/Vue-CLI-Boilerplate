import Vue from 'vue'
import Router from 'vue-router'
import { routes as routes } from '../pages/index'
import store from '@/store'



Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: routes
})

router.afterEach(() => {
    store.commit("SET_ERRORS", null);
});


export default router