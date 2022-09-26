<template>
<div class="post-container">
    <img src="@/assets/goals.jpg" alt="goals" style="width:100%" />
    <slot></slot>
</div>
</template>

<script>

export default ({
    name: 'BlogDetails',
    props: ['imageurl'],
})
</script>

<style scoped>
    .post-container {
    padding: 0.78%;
    background-color: #D2E1EF;
}
</style>

