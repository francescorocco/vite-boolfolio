import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppContact from './pages/AppContact.vue';
import WorkList from './pages/WorkList.vue';
import SingleWork from './pages/SingleWork.vue';


const router = createRouter(
    {
        history: createWebHistory(),
        routes:[

            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/blog',
                name: 'works',
                component: WorkList
            },
            {
                path: '/contatti',
                name: 'contact',
                component: AppContact
            },
            {
                path: '/work/:id',
                name: 'singol-work',
                component: SingleWork
            }
        ]
    }
);

export { router }