<template lang="pug">
header
  a.logo(href="/restaurants/") 餐廳評論網
  .user
    template(v-if="isAuthenticated")
      a.user--item 管理員後台
      a.user--item {{currentUser.name || '使用者'}} 您好
    button 登出
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}
export default {
  data() {
    return {
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false
    }
  },
  created() {
    this.fetchUser()
  },
  methods: {
    fetchUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser
      }
      this.isAuthenticated = dummyUser.isAuthenticated
    }
  }
}
</script>

<style lang="sass">
header
  width: 100%
  height: $header-height
  padding:
    left: 30px
  position: absolute
  top: 0
  background: 
    color: $font-color
  
  .logo
    line-height: $header-height
    font-size: 30px

  .user
    float: right
    height: $header-height
    display: flex
    align-items: center
    margin:
      right: 20px
    &--item
      margin: 10px
</style>