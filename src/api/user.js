import request from '@/utils/request';
import { RequestMethodEnum } from '@/config/const/httpEnum';

const API = {
  login: '/login',
  logout: '/logout'
};

/**
 * @description: 用户登录
 */
export const loginApi = parameter => request({ url: API.login, method: RequestMethodEnum.POST, data: parameter });

/**
 * @description: 用户登出
 */
export const logoutApi = () => request({ url: API.logout, method: RequestMethodEnum.POST });
