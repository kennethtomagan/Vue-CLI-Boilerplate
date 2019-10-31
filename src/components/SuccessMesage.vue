<template>
    <div class="notification is-info" v-if="message != null">
        <button class="delete" @click.prevent="message = null"></button>
        <ul>
            <li>
                <b-icon icon="check"></b-icon>
                &nbsp;&nbsp;
                {{ message }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    computed: {
        message: {
            get() {
                return this.$store.state.successMessage;
            },
            set(value) {
                this.$store.commit("SET_SUCCESS_MESSAGE", value);
            }
        }
    }
};
</script>