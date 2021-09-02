<template>
  <a-layout class="layout-container" style="height: 100vh">
    <a-layout-sider :width="asiderWidth" v-model="collapsed" :trigger="null" collapsible>
      <sider-bar></sider-bar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="bg-white">
        <page-header :collapsed="collapsed"></page-header>
      </a-layout-header>
      <a-layout-content class="app-content">
        <div class="app-content-card">
          <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import PageHeader from './components/Header/index.vue';
import SiderBar from './components/SiderBar/index.vue';
import layoutVar from '@/assets/styles/layout.module.scss';
import { mapGetters } from 'vuex';
export default {
  name: 'Layouts',
  components: {
    PageHeader,
    SiderBar
  },
  computed: {
    ...mapGetters('layout', ['collapsed']),
    asiderWidth: function () {
      return this.collapsed ? layoutVar.siderCollapsedWidth : layoutVar.siderBarWidth;
    }
  }
};
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100%;
  .app-content {
    background: #f0f2f5;
    padding: 24px;
    &-card {
      width: 100%;
      height: 100%;
      background: #fff;
    }
  }
}
</style>
