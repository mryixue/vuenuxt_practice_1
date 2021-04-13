<template>
  <h1>{{ this.id }} / {{ this.slug }}</h1>
</template>

<script>
  export default {
    async asyncData({ params }) {
      const id = params.id
      const slug = params.slug
      return { id, slug }
    }
  }
</script>