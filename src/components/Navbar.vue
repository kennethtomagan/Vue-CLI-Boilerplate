<template>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
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

            <div class="navbar-end">
                <router-link :to="{ name: 'auth.login' }" class="navbar-item">Login</router-link>
                <router-link :to="{ name: 'auth.register' }" class="navbar-item">Register</router-link>
            </div>
        </div>
    </nav>
</template>
<script>
export default {};
</script>