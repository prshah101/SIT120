<template>
<div class="navigationBar" id="navigationBarID">
    <router-link to="/"> Home</router-link>
    <router-link to="/allPosts"> All Posts</router-link>
    <router-link to="/contactUs"> Contact Us</router-link>
    <a href="javascript:void(0);" class="icon" v-on:click="myFunction()">
    <i class="fa fa-bars"></i>
    </a>
</div>
<br>
<router-view imageurl= "goals.jpg"></router-view>
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        myFunction() {
            var x = document.getElementById("navigationBarID");
            if (x.className === "navigationBar") {
                x.className += " responsive";
            } else {
                x.className = "navigationBar";
            }
        }
    }
}
</script>

<style scoped>
.navigationBar {
  overflow: hidden;
  background-color: #ffff;
  font-size: 2vw;
}

.navigationBar a {
  float: left;
  display: block;
  color: #193F77;
  text-align: center;
  padding: 1vw 1vw;
  text-decoration: none;
}

.navigationBar a:hover {
  background-color: #ddd;
}

.navigationBar a.active {
  background-color: #193F77;
  color: white;
}

.navigationBar .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .navigationBar a {display: none;}
  .navigationBar a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .navigationBar.responsive {
    position: relative;
    font-size: 4vw;
    background-color: #D2E1Ef;
  }
  .navigationBar.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .navigationBar.responsive a {
    float: none;
    display: block;
    text-align: left;
  }

  i{
    font-size:7vw;
  }
}

@media screen and (max-width: 934px) {
  .navigationBar {
  font-size: 3vw;
}
}

@media screen and (max-width: 752px) {
  .navigationBar {
  font-size: 4vw;
}
}
</style>
