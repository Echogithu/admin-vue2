<template>
  <div class="login-container-form">
    <div class="login-logo">
      <img src="@/assets/svg/logo.svg" alt="login-logo" />
      <h1>中心服务平台</h1>
    </div>
    <a-form-model :model="form" @submit="handleSubmit" @submit.native.prevent>
      <a-form-model-item class="form-item">
        <a-input v-model="form.username" size="large" placeholder="请输入用户名">
          <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item class="form-item">
        <a-input v-model="form.password" size="large" type="password" placeholder="请输入密码">
          <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item class="form-item flex-center">
        <a-button type="primary" size="large" @click="handleSubmit" :loading="loading">登录</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import { message } from 'ant-design-vue';

export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      loading: false
    };
  },
  methods: {
    async handleSubmit() {
      const { username, password } = this.form;
      if (username.trim() === '' || password.trim() === '') {
        return message.warning('用户名或密码不能为空！');
      }
      message.loading('登录中...', 0);
      this.loading = true;
      const res = await this.$store.dispatch('user/login', this.form).finally(() => {
        this.loading = false;
        message.destroy();
      });
      console.log('login :>> ', res);

      if (res) {
        message.success('登录成功！');
        this.$router.push('/');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container-form {
  .login-logo {
    display: flex;
    margin-bottom: 50px;
    align-items: center;
    .svg-icon {
      font-size: 48px;
    }
    img {
      height: 48px;
    }
    h1 {
      margin-bottom: 0;
      margin-left: 10px;
    }
  }
}
</style>
