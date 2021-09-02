<template>
  <a-dropdown>
    <span class="avatar-container">
      <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> admin
    </span>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a @click.prevent="doLogout"> 退出登录</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script>
import { message } from 'ant-design-vue';
export default {
  name: 'AvatarMenu',
  methods: {
    async doLogout() {
      const res = await this.$store.dispatch('user/logout');
      if (res) {
        message.success('成功退出登录');
        this.$router.push({
          path: '/login'
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar-container {
  padding: 0 8px;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
}
</style>
