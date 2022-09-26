<template>
<div>
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

