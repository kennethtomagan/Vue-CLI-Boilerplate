<template>
    <div class="columns">
        <div class="column">
            <h1 class="title has-text-centered has-text-grey-dark is-1 m-t-xxl">
                <img src="@/assets/logo.png">
                <br>
                <span v-if="$auth.check()"> Hi {{ $auth.user().name }}</span>    
                <span v-else>VUE CLI BOILERPLATE</span>    
            </h1>
        </div>
    </div>
</template>