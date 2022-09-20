<template>
<br><br><br><br><br>
<p class="title">Latest Posts</p>
<div class="posts-container">
    <img src="@/assets/habit.jpg" alt="habit" style="width:100%">
    <p>How to Build Habit</p>
</div>
<div class="posts-container">
    <img src="@/assets/motivation.png" alt="motivation" style="width:100%">
    <p>Gaining Motivation</p>
</div>
<div class="posts-container">
    <img src="@/assets/goals.jpg" alt="goals" style="width:100%">
    <p>Stick to your Goals</p>
</div>
</template>

<script>
export default {
    name: 'HomeView',
    components: {}
}
</script>

<style scoped>
.posts-container {
    float: left;
    width: 33.33%;
    padding: 0.78%;
    background-color: #ffffff;
}
</style>
