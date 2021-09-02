<template>
  <div class="header-left">
    <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggleCollapsed" />
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item v-for="routeItem in $route.matched" :key="routeItem.name">
          <router-link :to="{ name: routeItem.name }">{{ routeItem.meta.title }}</router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Breadcrumb',
  computed: {
    ...mapGetters('layout', ['collapsed'])
  },
  methods: {
    ...mapActions('layout', ['toggleCollapsed'])
  }
};
</script>

<style lang="scss" scoped>
.header-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  .breadcrumb {
    display: flex;
    flex-direction: row;
    margin-left: 8px;
  }
}
</style>
