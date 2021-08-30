import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { VueAxios } from '@/utils/request.js';
import '@/plugins/registComponents';
import './assets/styles/index.scss';

import mock from './mock/index.js';
Vue.use(mock);

Vue.config.productionTip = false;
Vue.use(VueAxios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
