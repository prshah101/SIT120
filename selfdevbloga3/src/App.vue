<template>

 <HeaderView/>
 <br>
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

// data: {
//         exist: true,
//         name: '',
//         phoneNum: '',
//         enquiry: '',
//         items: [{ message: 'Foo' }, { message: 'Bar' }],
//     },
</script>
