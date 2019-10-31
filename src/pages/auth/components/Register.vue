<template>
    <div class="column is-6 is-offset-3 m-t-xxl">
        <errors-message/>

        <div class="card m-t-sm">
            <header class="card-header" style="background-color: #f5f5f5">
                <h2 class="card-header-title">Register</h2>
            </header>
            <div class="card-content">
                <div class="content">
                    <b-field label="Name">
                        <b-input type="text" v-model="data.name"></b-input>
                    </b-field>
                    <b-field label="Email">
                        <b-input type="email" v-model="data.email" autofocus></b-input>
                    </b-field>

                    <b-field label="Password">
                        <b-input type="password" v-model="data.password" password-reveal></b-input>
                    </b-field>
                    <b-field label="Confirm Password">
                        <b-input
                            type="password"
                            v-model="data.password_confirmation"
                            password-reveal
                        ></b-input>
                    </b-field>

                    <nav class="level">
                        <div class="level-left m-t-sm"></div>

                        <div class="level-right m-t-sm">
                            <div class="level-item">
                                <div class="field is-grouped">
                                    <p class="control">
                                        <button class="button is-dark" @click="register">REGISTER</button>
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
export default {
    data() {
        return {
            data: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            }
        };
    },
    methods: {
        register() {
            this.$axios
                .post("/auth/register", this.data)
                .then(() => {
                    this.$store.commit(
                        "SET_SUCCESS_MESSAGE",
                        "Successfully registered"
                    );
                    this.$router.push({ name: "auth.login" });
                })
                .catch(errors => {
                    this.$store.commit("SET_ERRORS", errors.response.data);
                });
        }
    }
};
</script>
