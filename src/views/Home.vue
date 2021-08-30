<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <a-button @click="list">test11</a-button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import { axios } from '@/utils/request';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    list() {
      axios({
        url: '/mock/list',
        method: 'get'
      }).then(res => {
        console.log('res :>> ', res);
      });
    }
  }
};
</script>
