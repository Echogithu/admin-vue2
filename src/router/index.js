import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { ACCESS_TOKEN } from '@/store/mutation-types';
import { Storage } from '@/utils/storage';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    const token = Storage.get(ACCESS_TOKEN);

    if (!token) {
      next('/login');
    } else {
      next();
    }
  }
});

export default router;
