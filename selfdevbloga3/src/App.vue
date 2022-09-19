<template>
  <!-- <router-link to = "/home"> Home</router-link>
  <router-link to = "/allposts"> All Posts</router-link>
  <router-link to = "/contactUs"> Contact Us</router-link>
  <router-view></router-view> -->
  <HomeView/>
</template>

<script>
import HomeView from './HomeView.vue'
export default {
  name: 'App',
  components: {
    HomeView,
  }
}
</script>

<style>
</style>
