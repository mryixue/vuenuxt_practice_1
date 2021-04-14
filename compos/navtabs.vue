<template lang="pug">
nav
  template(v-for="link of links")
    NuxtLink(:to="link.route" :key="link.id") {{ link.title }}
</template>

<script>
const { v4: uuid } = require('uuid')
export default {
  data() {
    return {
      links: [
        {
          id: uuid(),
          route: '/restaurants/',
          title: '首頁'
        },
        {
          id: uuid(),
          route: '/restaurants/feeds/',
          title: '最新動態'
        },
        {
          id: uuid(),
          route: '/restaurants/top/',
          title: 'Top 10 人氣餐廳'
        },
        {
          id: uuid(),
          route: '/userstop/',
          title: '美食達人1'
        },
      ]
    }
  }
}
</script>

<style lang="sass">
nav
  padding: 20px
  margin: $header-height auto
  width: min-content
  a
    padding: 20px
    &.nuxt-link-exact-active
      background-color: rgba(gray,.1)
</style>