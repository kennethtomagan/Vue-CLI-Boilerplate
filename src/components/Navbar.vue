<template>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
               <router-link :to="{ name: 'home' }" class="navbar-item">
                    <b>Vue CLI </b>
                </router-link>
                <a
                    role="button"
                    class="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-end" v-if="!$auth.check()">
                <router-link :to="{ name: 'auth.login' }" class="navbar-item">Login</router-link>
                <router-link :to="{ name: 'auth.register' }" class="navbar-item">Register</router-link>
            </div>
            <div class="navbar-end" v-else-if="$auth.check()">
                <router-link :to="{ name: 'profile' }" class="navbar-item">{{ $auth.user().email}}</router-link>
                <router-link
                    :to="{ name: 'profile.change_password' }"
                    class="navbar-item"
                >Change password</router-link>
                <a @click.prevent="logout" class="navbar-item">Logout</a>
            </div>
        </div>
    </nav>
</template>
<script>
import Vue from "vue";
export default {
    methods: {
        logout() {
            Vue.auth.logout({
                makeRequest: false,
                params: {},
                url: "auth/logout",
                success: function() {
                    this.$auth.watch.authenticated = false;
                    this.$auth.watch.loaded = false;
                },
                error: function() {},
                redirect: { name: "auth.login" }
            });
        }
    }
};
</script>