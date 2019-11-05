<template>
    <div id="login-page" class="container">
        <div class="column is-half is-offset-3 m-t-xxl">
            <!-- Error Messages -->
            <errors-message/>
            
            <div class="card">
                <header class="card-header" style="background-color: #f5f5f5">
                    <h2 class="card-header-title">Reset Password</h2>
                </header>

                <div class="card-content">
                    <div class="content">
                        <b-field horizontal label="Email">
                            <b-input type="email" placeholder="Enter Email Address" v-model="data.email" autofocus></b-input>
                        </b-field>
                        <b-field horizontal>
                            <b-button type="is-dark"  @click.prevent="submit" :loading="loading">Send Password Reset Link</b-button>
                        </b-field>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loading: false,
            data: {
                email:null
            }
        }
    },
    methods:{

        submit() {
            this.loading = true
            this.$axios
                .post("/auth/recovery", this.data)
                .then(() => {
                    this.$store.commit(
                        "SET_SUCCESS_MESSAGE",
                        "Password reset email sent. Check your email"
                    );
                    this.loading = false;
                    this.data.email = null;
                    this.$router.push({ name: "auth.login" });
                })
                .catch(errors => {
                    this.$store.commit("SET_ERRORS", errors.response.data);
                    this.loading = false
                });
        }
    }
}
</script>