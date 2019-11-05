<template>
    <div class="column is-6 is-offset-3 m-t-xxl">
        <!-- Error Messages -->
        <errors-message/>
        <div class="card">
            <header class="card-header" style="background-color: #f5f5f5">
                <h2 class="card-header-title">Reset Password</h2>
            </header>
            <div class="card-content">
                <div class="content">
                    <b-field label="Email">
                        <b-input type="email" autofocus  v-model="data.email"></b-input>
                    </b-field>

                    <b-field label="Password">
                        <b-input type="password" password-reveal  v-model="data.password"></b-input>
                    </b-field>

                    <b-field label="Confirm Password">
                        <b-input type="password" password-reveal v-model="data.password_confirmation"></b-input>
                    </b-field>

                    <nav class="level">
                        <div class="level-left m-t-sm"></div>

                        <div class="level-right m-t-sm">
                            <div class="level-item">
                                <div class="field is-grouped">
                                    <p class="control">
                                        <button class="button is-dark" @click.prevent="submit">Submit</button>
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
    data(){
        return {
            data:{
                token: null,
                email: null,
                password: null,
                password_confirmation: null,
            }
        }
    },
    mounted(){
        if(this.$route.query.token){
            this.data.token = this.$route.query.token
        }
    },
    methods:{
        submit(){
            this.loading = true
            this.$axios
                .post("/auth/reset", this.data)
                .then(() => {
                    this.$store.commit(
                        "SET_SUCCESS_MESSAGE",
                        "Password reset successfully."
                    );
                    this.loading = false;
                    this.data.token = null;
                    this.data.email = null;
                    this.data.password = null;
                    this.data.password_confirmation = null;
                    this.$router.push({ name: "auth.login" });
                })
                .catch(errors => {
                    this.$store.commit("SET_ERRORS", errors.response.data);
                    this.loading = false
                });
        }
    }
};
</script>
