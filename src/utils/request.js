import axios from 'axios';
import { notification } from 'ant-design-vue';
import { VueAxios } from './axios';

// 创建 axios 实例
const service = axios.create({
  // baseURL: '', // api base_url
  timeout: 15000 // 请求超时时间
});

const err = error => {
  console.log('捕获到错误');
  console.log(error);
  if (error.message === 'timeout of 15000ms exceeded') {
    notification.error({
      message: '网络连接超时',
      description: error.message,
      duration: 0
    });
  } else {
    notification.error({
      message: error.response.status,
      description: error.response.data,
      duration: 0
    });
  }
  return Promise.reject(error);
};

// request interceptor
service.interceptors.request.use(config => {
  // const token = Vue.ls.get(TOKEN_NAME)
  // if (token) {
  //   config.headers['Access-Token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  // }
  return config;
}, err);

// response interceptor
service.interceptors.response.use(response => {
  return response.data;
}, err);

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, service);
  }
};

export { installer as VueAxios, service as axios };
