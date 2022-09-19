<template>
<div v-if="homepage">
    <img src="@/assets/purpose.jpg" alt="" style="width:100%;">
    <div class="page-title">Self Improvement</div>
</div>
<div v-else>
    <div class="subPage-title"> {{title}} </div>
    <p>It's {{this.$route.path}}</p>
</div>
</template>

<script>
export default {
    name: 'HeaderView',
    data() 
    {
        return {
            homepage: false,
        }
    },
    props:{
    title: String
  }
}
</script>

<style scoped>
 .page-title {
   position: absolute;
   color: #194F77;
   /*100px/601px*100*/
   top: 16.63%;
   /*200px/1280px*100*/
   right: 15.63%;
   font-size: 60px;
   animation-name: color-change;
   animation-duration: 6s;
   animation-iteration-count: 1;
   --color-1: #82A7D0;
   --color-2: #194F77;
 }

 @keyframes color-change {
   0% {
     color: var(--color-1)
   }

   100% {
     color: var(--color-2)
   }
 }

 .subPage-title {
   font-size: 60px;
   color: #194F77;
   text-align: center;
   background-color: #D2E1EF;
 }
</style>
