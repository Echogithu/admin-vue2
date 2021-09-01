<template functional>
  <a-menu-item :key="props.route.name">
    <a-icon v-if="props.route.meta.icon" :type="props.route.meta.icon" style="color: white" />
    <span>{{ props.route.meta.title }}</span>
  </a-menu-item>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    route: {
      type: Object,
      required: true
    }
  }
};
</script>
