<template>
    <div class="column">
        <errors-message/>
        <success-mesage/>

        <div class="card m-t-lg">
            <header class="card-header" style="background-color: #f5f5f5">
                <h2 class="card-header-title">UPDATE PASSWORD</h2>
            </header>
            <div class="card-content">
                <div class="content">
                    <b-field label="Current Password">
                        <b-input
                            type="password"
                            placeholder="Enter Current Password"
                            v-model="data.current_password"
                            password-reveal
                        ></b-input>
                    </b-field>
                    <b-field label="New Password">
                        <b-input
                            type="password"
                            placeholder="Enter Password"
                            v-model="data.new_password"
                            password-reveal
                        ></b-input>
                    </b-field>
                    <b-field label="Confirm New Password">
                        <b-input
                            type="password"
                            placeholder="Enter Password Confirmation"
                            v-model="data.new_password_confirmation"
                            password-reveal
                        ></b-input>
                    </b-field>

                    <nav class="level">
                        <div class="level-left m-t-sm"></div>

                        <div class="level-right m-t-sm">
                            <div class="level-item">
                                <div class="field is-grouped">
                                    <p class="control">
                                        <button
                                            class="button is-dark"
                                            @click="updatePassword"
                                        >UPDATE</button>
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
                current_password: null,
                new_password: null,
                new_password_confirmation: null
            }
        };
    },
    computed: {
        loading: {
            get() {
                return this.$store.state.loading;
            },
            set(value) {
                this.$store.commit("SET_LOADING", value);
            }
        }
    },
    beforeDestroy() {
        this.$store.commit("SET_SUCCESS_MESSAGE", null);
        this.$store.commit("SET_ERRORS", null);
    },
    methods: {
        updatePassword() {
            this.loading = true;
            this.$axios
                .put("/profile/password", this.data)
                .then(() => {
                    this.loading = false;
                    this.$store.commit("SET_ERRORS", null);

                    this.$store.commit(
                        "SET_SUCCESS_MESSAGE",
                        "Password successfuly changed!"
                    );
                    this.clearfFields();
                })
                .catch(errors => {
                    this.loading = false;
                    this.$store.commit("SET_ERRORS", errors.response.data);
                });
        },
        clearfFields() {
            this.data.current_password = null;
            this.data.new_password = null;
            this.data.new_password_confirmation = null;
        }
    }
};
</script>
