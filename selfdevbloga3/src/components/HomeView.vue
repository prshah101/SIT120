<template>
<br><br>
<p class="title">Latest Posts</p>
<router-link to="/blogPost/Habits">
    <div class="posts-container">
        <BlogDetails> <p>How to Build Habit</p> </BlogDetails>
    </div>
</router-link>
<router-link to="/blogPost/Motivation">
<div class="posts-container">
    <BlogDetails> <p>Gaining Motivation</p> </BlogDetails>
</div>
</router-link>

<router-link to="/blogPost/Goals">
    <div class="posts-container">
        <BlogDetails> <p>Stick to your Goals</p> </BlogDetails>
    </div>
</router-link>

</template>

<script>
import BlogDetails from './BlogDetails.vue'
export default {
    name: 'HomeView',
    components: {
        BlogDetails,
    },
}
</script>

<style scoped>
/* To ensure the posts container doesn't break  */
* {
    box-sizing: border-box;
}

.posts-container {
    float: left;
    width: 33.33%;
    padding: 0.78%;
    background-color: #ffffff;
}

.title {
    font-size: 3vw;
    color: #194F77;
}

p {
    color: #194F77;
    font-size: 1.8vw;
    text-align: center;
}
</style>
