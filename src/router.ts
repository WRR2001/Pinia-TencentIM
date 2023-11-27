import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/login",
        component: () => import("./pages/login.vue")
    },
    {
        path: "/layout",
        component: () => import("./pages/layout.vue"),
        children:[
            {
                path:'/home',
                component:()=>import('./pages/home.vue')
            },
            {
                path:'/customer-service',
                component:()=>import('./pages/customer-service.vue')
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router