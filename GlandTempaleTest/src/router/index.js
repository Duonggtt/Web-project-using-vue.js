import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue'; 

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: AppLayout,
            children: [
                {
                    path: '/home',
                    component: HomeView,
                }
            ]
        },
        {
            path: '/', 
            name: 'Login',
            component: LoginView,
        }
    ]
            
});

export default router;
