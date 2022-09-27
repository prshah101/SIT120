<template>
<div>
    <h1>{{title}}</h1>
    <div class="blog-picture">
        <img :src="require('@/assets/' + imageurl + '')" style="width:100%" />
    </div>
</div>
</template>

<script>
import {
    useRoute
} from 'vue-router';

export default {
    name: 'BlogPost',
    data() {
        return {
            title: '',
            body: '',
        }
    },
    props: ['imageurl'],
    mounted() {
        const route = useRoute();
        console.warn("route", route.params.title);
        this.title = route.params.title;
    },
    methods: {
        findTitle() {}
    }
}
</script>

<style scoped>
.blog-picture {
    width: 50vw;
    height: 50vw;
}
</style>
