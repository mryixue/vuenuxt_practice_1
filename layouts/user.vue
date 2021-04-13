<template lang="pug">
  nuxt
</template>

<style lang="sass">
$header-height: 60px
$font-color: #fa7c3d

#user
  width: 480px
  max-width: 95vw
  padding: 20px
  background: 
    color: white
  display: flex
  flex-flow: column nowrap
  align-items: center

  .login-box
    width: 100%
    %db
      display: block
      width: 100%

    .input-group
      padding: 10px 0

      input
        @extend %db
        line-height: 30px

      label
        @extend %db
        padding:
          bottom: 5px

    .login-button
      @extend %db
      padding: 10px
      background: 
        color: $font-color
      color: white
      border-style: none
      font-size: 18px
      &:hover
        cursor: pointer
      &:active
        background: 
          color: rgba($font-color,0.5)

    .register
      margin:
        top: 10px

      a
        color: $font-color
</style>