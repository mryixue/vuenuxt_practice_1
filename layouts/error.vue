<template lang="pug">
  #error
    h1(v-if="error.statusCode === 404") {{error.statusCode}} Page not found
    h1(v-else) An error occurred
</template>

<script>
export default {
  props: ['error'],
}
</script>