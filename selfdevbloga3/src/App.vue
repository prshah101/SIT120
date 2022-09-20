<template>

<!-- {{this.$route.path}}

  <div v-if="$route.path === '/'">
    <HeaderView title="Title" homepage="true"/>
  </div>
  <div v-else>
    <HeaderView title="Title" homepage="false"/>
 </div> -->

 <HeaderView title="Title"/>
 <NavBar/>

</template>

<script>
import NavBar from './components/NavBar.vue'
import HeaderView from './components/HeaderView.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeaderView,
  },
}
</script>
