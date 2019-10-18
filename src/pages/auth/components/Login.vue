<template>
    <div class="column is-4 is-offset-4 m-t-xxl">
        <div class="card">
            <header class="card-header" style="background-color: #f5f5f5">
                <h2 class="card-header-title">Login</h2>
            </header>

            <div class="card-content">
                <div class="content">
                    <div class="field">
                        <div class="control">
                            <b-input type="email" placeholder="EMAIL" autofocus></b-input>
                        </div>
                    </div>

                    <b-field>
                        <b-input placeholder="PASSWORD" type="password" password-reveal></b-input>
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
                                        <button class="button is-dark">LOGIN</button>
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
export default {};
</script>
