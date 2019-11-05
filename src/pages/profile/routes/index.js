import index from '../components/Index'
import ChangePassword from '../components/ChangePassword'


export default [
    {
        path: '/profile',
        component: index,
        name: 'profile',
        meta: { auth: true },

    },
    {
        path: '/profile/change-password',
        component: ChangePassword,
        name: 'profile.change_password',
        meta: { auth: true },

    },
]