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
        name: 'All Posts',
        path: '/allPosts',
        component: AllPosts,
    },
    {
        name: 'Contact Us',
        path: '/contactUs',
        component: ContactUs,
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
});

export default router;

