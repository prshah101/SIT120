<template>
<div v-if="$route.meta.homepage">
    <img src="@/assets/purpose.jpg" alt="" style="width:100%;">
    <div class="page-title">Self Improvement</div>
</div>
<div v-else>
    <div class="subPage-title"> {{ $route.meta.heading }} </div>
</div>
</template>

<script>
export default {
    name: 'HeaderView',
    data() 
    {
        return {
        }
    },
    props:{
  }
}
</script>

<style scoped>
 .page-title {
   position: absolute;
   color: #194F77;
   top: 7.63%;
   right: 15.63%;
   font-size: 7vw;
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
   font-size: 7vw;
   color: #194F77;
   text-align: center;
   background-color: #D2E1EF;
 }
</style>
