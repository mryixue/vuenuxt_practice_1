<template lang="pug">
  #user
    h1.title Register
    form.login-box(@submit.prevent.stop="handleSubmit")
      .input-group
        label(for="login-name") Name
        input#login-name(v-model="name" autocomplete="username" required autofocus)
      .input-group
        label(for="login-email") Email
        input#login-email(inputmode="email" v-model="email" autocomplete="email" required)
      .input-group
        label(for="login-password") Password
        input#login-password(type="password" v-model="password" autocomplete="new-password" required)
      .input-group
        label(for="login-confirm") Confirm Password
        input#login-confirm(type="password" v-model="confirm" autocomplete="new-password" required)
      button.login-button(type="submit") Register
      .register Have An Account? <a href="/login/">Login</a>
</template>

<script>
export default {
  layout: 'user',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirm: ''
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