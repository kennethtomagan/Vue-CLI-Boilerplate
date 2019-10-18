<template>
    <div id="app">
        <Navbar/>
        <div class="container p-t-md p-b-lg">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
    name: "app",
    components: {
        Navbar
    }
};
</script>