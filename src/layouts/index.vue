<template>
  <a-layout class="layout-container" style="height: 100vh">
    <a-layout-sider></a-layout-sider>
    <a-layout>
      <a-layout-header class="bg-white">
        <page-header></page-header>
      </a-layout-header>
      <a-layout-content></a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import PageHeader from './components/Header/index.vue';
export default {
  name: 'Layouts',
  components: {
    PageHeader
  }
};
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100%;
}
</style>
