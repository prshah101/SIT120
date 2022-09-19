<template>
<!-- <b>Navbar</b> -->
<router-link to="/home"> Home</router-link>
<router-link to="/allposts"> All Posts</router-link>
<router-link to="/contactUs"> Contact Us</router-link>
<router-view></router-view>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>
