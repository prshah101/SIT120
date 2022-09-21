<template>

    <div>
        <h1>{{title}}</h1>
        <img :src="require('@/assets/' + imageurl + '')" style="width:100%"/>
    </div>
</template>

        
<script>
import {useRoute} from 'vue-router';


export default {
    name: 'BlogPost',
    data() {
        return {
            title:'',
            body:'',
        }
    },
    props: ['imageurl'],
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
