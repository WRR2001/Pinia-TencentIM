import {createRouter,createWebHistory } from 'vue-router'

const routes = [
    {
        path:"/login",
        component:()=>import ('./pages/login.vue')
    }
]

const router = createRouter({
    history:createWebHistory (),
    routes
})

export default router