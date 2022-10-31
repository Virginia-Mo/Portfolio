import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/WelcomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Welcome,
        },
        {
            path: '/menu',
            name: 'menuPortfolio',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/MenuView.vue'),
        },
        {
            path: '/about',
            name: 'aboutPortfolio',
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: '/experience',
            name: 'experiencePortfolio',
            component: () => import('../views/ExperienceView.vue'),
        },
        {
            path: '/skills',
            name: 'skillsPortfolio',
            component: () => import('../views/SkillsView.vue'),
        },
        {
            path: '/projects',
            name: 'projectsPortfolio',
            component: () => import('../views/ProjectsView.vue'),
        },
        {
            path: '/contact',
            name: 'contactPortfolio',
            component: () => import('../views/ContactView.vue'),
        },
    ],
})

export default router
