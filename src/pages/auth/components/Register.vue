<template>
    <div class="column is-6 is-offset-3 m-t-xxl">
        <div class="card">
            <header class="card-header" style="background-color: #f5f5f5">
                <h2 class="card-header-title">Register</h2>
            </header>
            <div class="card-content">
                <div class="content">
                    <b-field label="Name">
                        <b-input type="text"></b-input>
                    </b-field>
                    <b-field label="Email">
                        <b-input type="email" autofocus></b-input>
                    </b-field>

                    <b-field label="Password">
                        <b-input type="password" password-reveal></b-input>
                    </b-field>
                    <b-field label="Confirm Password">
                        <b-input type="password" password-reveal></b-input>
                    </b-field>

                    <nav class="level">
                        <div class="level-left m-t-sm"></div>

                        <div class="level-right m-t-sm">
                            <div class="level-item">
                                <div class="field is-grouped">
                                    <p class="control">
                                        <button class="button is-dark">REGISTER</button>
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
