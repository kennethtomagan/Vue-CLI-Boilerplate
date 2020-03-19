import axios from 'axios';
import Vue from 'vue'

import store from './store/index';

export default function setup() {

    axios.interceptors.response.use(function (config) {
        // Do something before request is sent

        return config;
    }, function (error) {
        // Do something with request error
        store.commit("SET_ERRORS", error.response.data);
        
        if (
            error.response.status === 401 &&
            ['UnauthorizedAccess', 'InvalidToken'].indexOf(error.response.data.code) > -1
        ) {
            this.$auth.watch.authenticated = false;
            this.$auth.watch.loaded = false;
            Vue.auth.logout({
                redirect: { name: 'login' }
            });
        }

        store.commit("SET_LOADING", false);

        return Promise.reject(error);
    });

}