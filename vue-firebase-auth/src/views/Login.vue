<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" placeholder="E-mail">
    <input type="password" placeholder="Password">
    <button>Connect</button>
    <p>Você não possui uma conta? Cadastre-se aqui.</p>
  </div>
</template>

<script>
  export default {
    name: 'login',
    props: {
      msg: String
    },
    data() {
      return {};
    },
    methods: {}
  }
</script>

<style scoped>

</style>