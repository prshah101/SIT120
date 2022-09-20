<template>

<div id="navigation-mobile">
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
    
    <style  lang="scss" scoped>
    #navigation-mobile {
  padding: 20px 0 0 0;
  ul {
    list-style: none;
    width: 200px;
    padding-left: 40px;
    li {
      color: #fff;
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 20px;
      cursor: pointer;
      &:hover {
        color: #111;
      }
    }
}
  }
    </style>
    