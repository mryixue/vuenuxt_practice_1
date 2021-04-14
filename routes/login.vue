<template lang="pug">
  #user
    h1.title Login
    form.login-box(@submit.prevent.stop="handleSubmit")
      .input-group
        label(for="login-email") Email
        input#login-email(inputmode="email" v-model="email" autocomplete="username" required autofocus)
      .input-group
        label(for="login-password") Password
        input#login-password(type="password" v-model="password" autocomplete="current-password" required)
      button.login-button(type="submit") Login
      .register No Account? <a href="/register/">Register</a>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
      const data = JSON.stringify({
        email: this.email,
        password: this.password
      })

      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log('data', data)
    }
  }
}
</script>