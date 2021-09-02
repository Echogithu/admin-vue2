<template>
  <div class="login-container">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue';
export default {
  name: 'Login',
  components: {
    LoginForm
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  padding-top: 240px;
  background: url('../../assets/svg/login.svg');
  background-size: 100%;
  flex-direction: column;
  align-items: center;
}
</style>
