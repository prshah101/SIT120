<template>
<div>
<router-link to="/"> Home</router-link>
<router-link to="/allPosts"> All Posts</router-link>
<router-link to="/contactUs"> Contact Us</router-link>
<router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>


</style>
