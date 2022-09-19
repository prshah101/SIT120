import {createWebHistory, createRouter} from 'vue-router'
import HomeView from './components/HomeView.vue';
import AllPosts from './components/AllPosts.vue';
import ContactUs from './components/ContactUs.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeView,
    },
    {
        name: 'AllPosts',
        path: '/allPosts',
        component: AllPosts,
    },
    {
        name: 'ContactUs',
        path: '/contactUs',
        component: ContactUs,
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;

