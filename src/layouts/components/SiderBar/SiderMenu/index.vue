<template>
  <a-menu theme="dark" mode="inline" @click="clickMenuItem">
    <template v-for="route in menus">
      <sider-menu-item v-if="hasShowChildren(route.children)" :key="route.name" :route="route"></sider-menu-item>
      <sub-menu v-else :key="'sub-' + route.name" :route="route"></sub-menu>
    </template>
  </a-menu>
</template>

<script>
import SubMenu from './SubMenu.vue';
import SiderMenuItem from './SiderMenuItem.vue';
import { routes } from '@/router/routes.js';
import { isLink } from '@/utils/toolsFn.js';
export default {
  name: 'SiderMenu',
  components: {
    SubMenu,
    SiderMenuItem
  },
  computed: {
    menus: () => {
      console.log('routes :>> ', routes.find(item => item.name === 'Layout').children);

      return routes.find(item => item.name === 'Layout').children;
    }
  },
  data() {
    return {
      selectedKeys: [],
      openKeys: []
    };
  },
  methods: {
    // 判断是否有可展示的children
    hasShowChildren(children = []) {
      const showingChildren = children.filter(item => {
        return typeof item.meta.hidden === 'boolean' ? !item.meta.hidden : true;
      });
      return !showingChildren.length;
    },

    // 点击菜单
    clickMenuItem({ key }) {
      if (isLink(key)) {
        window.open(key);
      } else {
        this.$router.push({ name: key });
      }
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped></style>
