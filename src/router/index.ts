import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/index.vue';
import AppHouse from '@/views/appHouse/index.vue';
import User from '@/views/userTab/index.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/appHouse',
        name: 'appHouse',
        component: AppHouse,
    },
    {
        path: '/user',
        name: 'user',
        component: User,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;