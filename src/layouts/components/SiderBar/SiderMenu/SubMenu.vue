<template functional>
  <a-sub-menu :key="props.route.name">
    <span slot="title">
      <a-icon v-if="props.route.meta.icon" :type="props.route.meta.icon" />
      <span>{{ props.route.meta.title }}</span>
    </span>
    <template v-for="children in props.route.children">
      <SiderMenuItem
        v-if="
          children.children && children.children.length
            ? children.children.every(item => (typeof item.meta.hidden === 'boolean' ? item.meta.hidden : false))
            : true
        "
        :key="children.name"
        :route="children"
      />

      <SubMenu v-else :route="children" :key="'sub-' + children.name" />
    </template>
  </a-sub-menu>
</template>

<script>
import SiderMenuItem from './SiderMenuItem';
export default {
  name: 'SubMenu',
  components: {
    SiderMenuItem
  },
  props: {
    route: {
      type: Object,
      required: true
    }
  }
};
</script>
