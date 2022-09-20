<template>

 <HeaderView/>
 <br>
 <NavBar/>
<!-- <SearchView/> -->
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeaderView from './components/HeaderView.vue'
// import SearchView from './components/SearchView.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeaderView,
    // SearchView
  }
}
</script>
