<template>
    <div id="login-page" class="container">
        <div class="column is-half is-offset-3 m-t-xxl">
            <div class="card">
                <header class="card-header" style="background-color: #f5f5f5">
                    <h2 class="card-header-title">Reset Password</h2>
                </header>

                <div class="card-content">
                    <div class="content">
                        <b-field horizontal label="Email">
                            <b-input type="email" placeholder="Enter Email Address" autofocus></b-input>
                        </b-field>
                        <b-field horizontal>
                            <button class="button is-dark">Send Password Reset Link</button>
                        </b-field>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>