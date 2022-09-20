<template>
<h1>{{title}}</h1>
</template>

        
<script>
import {useRoute} from 'vue-router';
export default {
    name: 'BlogPost',
    data() {
        return {
            title:''
        }
    },
    mounted(){
        const route=useRoute();
        console.warn("route", route.params.title);
        this.title=route.params.title;
    },
    methods: {
        findTitle() {
        }
    }
}
</script>

    
<style scoped>

    </style>
