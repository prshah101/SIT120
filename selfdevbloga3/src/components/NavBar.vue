<template>

<div class="navbar" id="mynav">
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
/* Navigation Bar */
 /* Sets the background color of the navigation bar*/
 .navbar {
   background-color: white;
   overflow: hidden;
 }

 /* Style the links inside the navigation bar */
 .navbar a {
  display: block;
   float: left;
   color: #194F77;
   font-size: 19px;
   text-decoration: none;
   padding: 20px 20px;
 }

 /* Setting the color of the page link which the site is currently on */
 .navbar a.active {
   /* set color of selection box*/
   background-color: #82A7D0;
   /* set color of text*/
   color: white;
 }

 /* When mouse hovers on link, change color */
 .navbar a:hover {
   /* set color of selection box*/
   background-color: #d2e1ef;
   /* set color of text*/
   color: #194F77;
 }

 /* Hide the link that should open and close the navbar on small screens */
 .navbar .icon {
  display: none;
}

</style>
