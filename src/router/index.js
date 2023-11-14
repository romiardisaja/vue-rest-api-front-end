import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/skills',
        name: 'SkillIndex',
        component: () => import('../views/skills/SkillIndex.vue')
    },
    {
        path: '/skills/create',
        name: 'SkillCreate',
        component: () => import('../views/skills/SkillCreate.vue')
    },
    {
        path: '/skills/:id/edit',
        name: 'SkillEdit',
        component: () => import('../views/skills/SkillEdit.vue'),
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;