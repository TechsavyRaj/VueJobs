import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import NotFoundView from "@/views/NotFoundView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
import ShowJobView from '@/views/ShowJobView.vue'

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
    }, {
        path: '/jobs/add',
        name: 'add-job',
        component: AddJobView,
    }, {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundView,
    }
    ]
});

export default routes;