<template lang="pug">
div
  h1 {{ this.slug }}
  a(href="./abc/123") to abc
</template>

<script>
  export default {
    async asyncData({ params }) {
      const slug = params.slug // When calling /abc the slug will be "abc"
      return { slug }
    }
  }
</script>