import Layout from '@/layouts/index.vue';
// import { RouterTransition } from '@/components/common/transition';

export const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    meta: { title: '' },
    redirect: '/home',
    children: [
      {
        name: 'Home',
        path: '/home',
        // component: RouterTransition,
        redirect: '/home/index',
        meta: { title: '首页', icon: 'snippets' },
        children: [
          {
            name: 'Index',
            path: 'index',
            component: () => import('@/views/Home.vue'),
            meta: { title: '测试1', icon: 'pie-chart' }
          },
          {
            name: 'Details',
            path: 'details',
            component: () => import('@/views/About.vue'),
            meta: { title: '测试2', icon: 'edit' }
          }
        ]
      },
      {
        name: 'Home2',
        path: '/home2',
        // component: RouterTransition,
        redirect: '/home2/index',
        meta: { title: '首页', icon: 'highlight' },
        children: [
          {
            path: 'index2',
            name: 'Index2',
            component: () => import('@/views/About.vue'),
            meta: { title: '测试1', icon: 'check-square' },
            children: [
              {
                path: 'index4',
                name: 'Index4',
                component: () => import('@/views/About.vue'),
                meta: { title: '测试1', icon: 'edit' }
              }
            ]
          }
        ]
      },
      {
        path: 'index3',
        name: 'Index3',
        // component: RouterTransition,
        meta: { title: '测试3', icon: 'ordered-list' }
      },
      {
        path: '/https://www.iconfont.cn/',
        name: 'https://www.iconfont.cn/',
        component: Layout,
        meta: { title: '导航3', icon: 'bar-chart' }
      }
    ]
  }
  // {
  //   name: 'Login',
  //   path: '/login',
  //   component: () => import('@/views/About.vue'),
  //   meta: { title: '登录', hidden: true },
  // },
];
