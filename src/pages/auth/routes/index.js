import Login from '../components/Login'
import Register from '../components/Register'
import ForgotPassword from '../components/ForgotPassword'
import ResetPassword from '../components/ResetPassword'


export default [
    {
        path: '/login',
        component: Login,
        name: 'auth.login',
        // meta: { auth: false },

    },
    {
        path: '/register',
        component: Register,
        name: 'auth.register',
        meta: { auth: false },

    },
    {
        path: '/password/recover',
        component: ForgotPassword,
        name: 'password.recover',
        meta: { auth: false },

    },
    {
        path: '/password/reset',
        component: ResetPassword,
        name: 'password.reset',
        meta: { auth: false },

    },
]