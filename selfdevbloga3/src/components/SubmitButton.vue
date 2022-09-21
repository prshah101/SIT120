<template>
    <button v-on:@click = "submit-details">Submit</button>
</template>

<script>
export default({
    name: 'SubmitButton',
    methods: {
    submit() {
      this.$emit('submit-details', 'Details Submitted!')
    }
  }
})
</script>
