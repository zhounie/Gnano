const routes = [
    { path: '/', component: () => import('../../views/index.vue') },
    { path: '/demo', component: () => import('../../views/demo.vue') },
    { path: '/map', component: () => import('@/views/map/index.vue') }
]

export default routes