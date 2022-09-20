import {createWebHistory, createRouter} from 'vue-router'
import HomeView from './components/HomeView.vue';
import AllPosts from './components/AllPosts.vue';
import ContactUs from './components/ContactUs.vue';
import BlogPost from './components/BlogPost.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeView,
        meta: { heading: 'Self Improvement' , homepage: true}
    },
    {
        name: 'All Posts',
        path: '/allPosts',
        component: AllPosts,
        meta: { heading: 'All Posts'  , homepage: false}
    },
    {
        name: 'Contact Us',
        path: '/contactUs',
        component: ContactUs,
        meta: { heading: 'Contact Us'  , homepage: false}
    },
    {
        name: 'Blog Post',
        path: '/blogPost/:title',
        component: BlogPost,
        meta: { heading: 'Blog Post'  , homepage: false}
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

