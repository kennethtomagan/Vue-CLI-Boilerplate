<template>
    <div id="app">
        <navbar/>
        <div class="container p-t-md p-b-lg">
            <router-view/>
        </div>

        <b-loading :is-full-page="true" :active.sync="loading"></b-loading>
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
    name: "app",
    components: {
        Navbar
    },

    computed: {
        loading() {
            return this.$store.state.loading;
        }
    }
};
</script>