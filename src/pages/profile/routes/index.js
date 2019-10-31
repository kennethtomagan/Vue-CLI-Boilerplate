import index from '../components/Index'


export default [
    {
        path: '/profile',
        component: index,
        name: 'profile',
        meta: { auth: true },

    },
]