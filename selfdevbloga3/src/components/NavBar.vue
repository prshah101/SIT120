<template>
<div class="navbar">
    <router-link to="/"> Home</router-link>
    <router-link to="/allPosts"> All Posts</router-link>
    <router-link to="/contactUs"> Contact Us</router-link>
</div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss" scoped>
#navigation {
    display: flex;
    width: 100%;
    margin-bottom: 50px;

    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0 20px 0 0;

        li {
            font-size: 2rem;
            padding: 2px 10px;
            cursor: pointer;

            &:hover {
                color: #7ca971;
            }
        }
    }
  }
</style>
