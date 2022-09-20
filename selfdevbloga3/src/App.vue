<template>

 <HeaderView/>

 <NavBarMobile />
    <div class="content" :class="{'open':showNav}">
      <div class="top-bar">
        <div id="navigation-icon" v-if="mobileView"
          @click="showNav = !showNav">
          <i class="fas fa-bars"></i>
        </div>
        <NavBar v-if="!mobileView" />
      </div>
      <Content />
    </div>

</template>

<script>
import NavBar from './components/NavBar.vue'
import HeaderView from './components/HeaderView.vue'
import NavBarMobile from './components/NavBarMobile.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeaderView,
    NavBarMobile
  },
  data() 
    {
      return {
      mobileView: true,
      showNav: false
    };
    },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 600;
    }
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
}
</script>

<style lang="scss">
  @import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");
  * {
    font-size: 1rem;
  }
  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", Tahoma;
    background-color: #ffffff;
  }
  #app {
    position: relative;
    width: calc(100% - 20px);
    height: calc(100vh - 20px);
    padding: 10px;
    color: #333;
    overflow: hidden;
  }
  .top-bar {
    display: flex;
    width: 100%;
  }
  #navigation-icon {
    padding: 10px 10px 20px;
    margin-right: 10px;
    cursor: pointer;
    i {
      font-size: 2rem;
    }
  }
  .content {
    position: absolute;
    top: 10px;
    width: calc(100% - 60px);
    height: calc(100vh - 60px);
    padding: 20px;
    background-color: #D2E1Ef;
    border-radius: 30px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    transition: 1s transform cubic-bezier(0,.12,.14,1);
  }
  .open {
    transform: translateX(300px);
  }
  </style>