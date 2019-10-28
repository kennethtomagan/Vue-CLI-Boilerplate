<template>
    <div class="notification is-danger m-t-sm" v-if="errors != null">
        <button class="delete" @click.prevent="errors = null"></button>
        <ul v-if="typeof errors.error === 'object'">
            <li v-for="(error, key) in errors.error" :key="key">{{ error[0] }}</li>
        </ul>
        <p v-else>{{ errors.error }}</p>
    </div>
</template>
<script>
export default {
    computed: {
        errors: {
            get() {
                return this.$store.state.errors;
            },
            set(value) {
                this.$store.commit("SET_ERRORS", value);
            }
        }
    }
};
</script>