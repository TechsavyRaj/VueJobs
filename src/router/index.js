import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import NotFoundView from "@/views/NotFoundView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
import ShowJobView from '@/views/ShowJobView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { authState } from '@/state/auth'

const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView,
    }, {
        path: '/jobs',
        name: 'jobs',
        component: JobsView,
    }, {
        path: '/jobs/show/:id',
        name: 'show-job',
        component: ShowJobView,
    }, {
        path: '/jobs/edit/:id',
        name: 'edit-job',
        component: EditJobView,
        meta: { requiresAuth: true }
    }, {
        path: '/jobs/add',
        name: 'add-job',
        component: AddJobView,
        meta: { requiresAuth: true }
    }, {
        path: '/login',
        name: 'login',
        component: LoginView,
    }, {
        path: '/register',
        name: 'register',
        component: RegisterView,
    }, {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundView,
    }
    ]
});

routes.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !authState.isAuthenticated) {
        return next('/login');
    } else {
        return next();
    }
});

export default routes;