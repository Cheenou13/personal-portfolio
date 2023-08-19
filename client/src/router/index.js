import {createRouter, createWebHistory} from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Main
    },
    // {
    //     path: '/dashboard',
    //     name: 'DashBoardPage',
    //     component: DashBoardPage
    // }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router