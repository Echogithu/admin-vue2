<template>
  <div>
    <transition name="zoom-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'RouterTransition'
};
</script>

<style lang="scss" scoped></style>
