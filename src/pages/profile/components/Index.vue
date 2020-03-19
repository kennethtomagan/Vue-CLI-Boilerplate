<template>
    <div class="column">
        <errors-message/>
        <success-mesage/>

        <div class="card m-t-lg">
            <header class="card-header" style="background-color: #f5f5f5">
                <h2 class="card-header-title">Profile</h2>
            </header>
            <div class="card-content">
                <div class="content">
                    <b-field label="Name">
                        <b-input type="text" v-model="data.name"></b-input>
                    </b-field>
                    <b-field label="Email">
                        <b-input type="email" v-model="data.email" autofocus></b-input>
                    </b-field>

                    <nav class="level">
                        <div class="level-left m-t-sm"></div>

                        <div class="level-right m-t-sm">
                            <div class="level-item">
                                <div class="field is-grouped">
                                    <p class="control">
                                        <button class="button is-dark" @click="updateProfile">UPDATE</button>
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
                name: null,
                email: null
            }
        };
    },
    mounted() {
        this.data.name = this.$auth.user().name;
        this.data.email = this.$auth.user().email;
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
    methods: {
        updateProfile() {
            this.loading = true;
            this.$axios
                .put("/profile", this.data)
                .then(response => {
                    Vue.auth.user(response.data.data);
                    this.loading = false;
                    this.$store.commit(
                        "SET_SUCCESS_MESSAGE",
                        "Profile successfuly updated!"
                    );
                });
        }
    }
};
</script>
