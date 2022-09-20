<template>
<div class="topnav" id="myTopnav">
    <router-link to="/"> Home</router-link>
    <router-link to="/allPosts"> All Posts</router-link>
    <router-link to="/contactUs"> Contact Us</router-link>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
    </a>
</div>
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        myFunction: function () {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
    }
}
</script>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: #ffff;
}

.topnav a {
  float: left;
  display: block;
  color: #193F77;
  text-align: center;
  padding: 1vw 1vw;
  text-decoration: none;
  font-size: 2vw;
}

.topnav a:hover {
  background-color: #ddd;
}

.topnav a.active {
  background-color: #193F77;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
