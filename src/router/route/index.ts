const routes = [
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        children: [
            { path: 'demo', component: () => import('../../views/demo.vue') },
            { path: 'map', component: () => import('@/views/map/index.vue') }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    }
    
]

export default routes