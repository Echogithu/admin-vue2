<template>
  <div class="page-header">
    <Breadcrumb></Breadcrumb>
    <AvatarMenu></AvatarMenu>
  </div>
</template>

<script>
import Breadcrumb from './Breadcrumb.vue';
import AvatarMenu from './AvatarMenu.vue';

export default {
  name: 'LayoutHeader',
  components: {
    Breadcrumb,
    AvatarMenu
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  width: 100%;
  height: $appHeaderHeight;
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
