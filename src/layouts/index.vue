<template>
  <a-layout class="layout-container" style="height: 100vh">
    <a-layout-sider :width="asiderWidth" v-model="collapsed" :trigger="null" collapsible>
      <sider-bar></sider-bar>
    </a-layout-sider>
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
import SiderBar from './components/SiderBar/index.vue';
import layoutVar from '@/assets/styles/layout.module.scss';
export default {
  name: 'Layouts',
  components: {
    PageHeader,
    SiderBar
  },
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    asiderWidth: function () {
      return this.collapsed ? layoutVar.siderCollapsedWidth : layoutVar.siderBarWidth;
    }
  }
};
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100%;
}
</style>
