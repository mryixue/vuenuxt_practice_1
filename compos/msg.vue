<template lang="pug">
  button(@click="msg") Hello Nuxt!
</template>

<script>
export default {
  methods: {
    async msg(){
      await this.$axios.post('/api/', { msg: 'Hi!'})
    }
  }
}
</script>