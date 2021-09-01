<template>
  <div>
    <sider-logo></sider-logo>
    <sider-menu></sider-menu>
  </div>
</template>

<script>
import SiderLogo from './SiderLogo.vue';
import SiderMenu from './SiderMenu/index.vue';
export default {
  name: 'LayoutSider',
  components: {
    SiderLogo,
    SiderMenu
  }
};
</script>

<style lang="scss" scoped></style>
