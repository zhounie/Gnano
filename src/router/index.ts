import { createRouter, createWebHistory } from 'vue-router'
import routes from './route'

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if (token) {
        next()
    } else {
        if (to.path !== '/login') {
            next('/login')
        }
        next()
    }
})

export default router;