<template>

 <HeaderView/>
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
  }
}
</script>
