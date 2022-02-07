import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('@/layout/index.vue'),
        children: [
            { path: 'home', component: () => import('@/views/home/index.vue')},
            { path: 'user', component: () => import('@/views/user/index.vue')},
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