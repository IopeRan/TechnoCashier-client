import { createRouter, createWebHistory } from "vue-router"

import Dashboard from '../views/dashboard/Index.vue'
import Product from '../views/product/Index.vue'
import Revenue from '../views/revenue/Index.vue'

const routes = [
    {
        path: '/',
        name: 'dashboard.index',
        component: Dashboard,
    },
    {
        path: '/product',
        name: 'product.index',
        component: Product,
    },
    {
        path: '/revenue',
        name: 'revenue.index',
        component: Revenue
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router