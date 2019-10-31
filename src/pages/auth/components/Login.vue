<template>
    <div class="column is-4 is-offset-4 m-t-xxl">
        <errors-message/>
        <success-mesage/>
        <div class="card m-t-sm">
            <header class="card-header" style="background-color: #f5f5f5">
                <h2 class="card-header-title">Login {{ $auth.check() }}</h2>
            </header>

            <div class="card-content">
                <div class="content">
                    <div class="field">
                        <div class="control">
                            <b-input
                                type="email"
                                v-model="data.email"
                                placeholder="EMAIL"
                                autofocus
                            ></b-input>
                        </div>
                    </div>

                    <b-field>
                        <b-input
                            placeholder="PASSWORD"
                            v-model="data.password"
                            type="password"
                            password-reveal
                        ></b-input>
                    </b-field>

                    <nav class="level">
                        <div class="level-left m-t-sm">
                            <div class="level-item">
                                <router-link
                                    class="has-text-dark"
                                    style="font-family:sans-serif;text-decoration:underline"
                                    :to="{name:'password.recover'}"
                                >RESET PASSWORD</router-link>
                            </div>
                        </div>

                        <div class="level-right m-t-sm">
                            <div class="level-item">
                                <div class="field is-grouped">
                                    <p class="control">
                                        <button class="button is-dark" @click="submit">LOGIN</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
export default {
    data() {
        return {
            data: {
                email: "admin@admin.com",
                password: 1234
            }
        };
    },
    methods: {
        submit() {
            this.$auth.login({
                method: "post",
                authType: "bearer",
                url: "auth/login",
                data: { email: this.data.email, password: this.data.password },
                rememberMe: true,
                fetchUser: false,
                success: response => {
                    Vue.auth.token(null, response.data.token);
                    Vue.auth.user(response.data.data);
                    this.$store.commit("SET_ERRORS", null);
                    this.$store.commit("SET_SUCCESS_MESSAGE", null);
                    this.$router.push({
                        name: "profile"
                    });
                },
                error: errors => {
                    this.$store.commit("SET_ERRORS", errors.response.data);
                }
            });
        }
    }
};
</script>
