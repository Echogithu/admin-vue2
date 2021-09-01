<template>
  <div>
    <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggleCollapsed" />
    <span>面包屑</span>
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

<style lang="scss" scoped></style>
