import { loginApi } from '@/api/user';
import { ResponseCodeEnum } from '@/config/const/httpEnum';
import { Storage } from '@/utils/storage';
import { ACCESS_TOKEN, CURRENT_USER } from '@/store/mutation-types';

const state = {
  token: '',
  userInfo: null
};

const getters = {
  token: state => state.token,
  userInfo: state => state.userInfo
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo;
  }
};

const actions = {
  login: ({ commit }, loginParams) => {
    return new Promise((resolve, reject) => {
      loginApi(loginParams)
        .then(res => {
          console.log('接口返回数据', res);
          if (res.code === ResponseCodeEnum.SUCCESS) {
            const data = res.data;
            const { token, userInfo } = data;
            Storage.set(ACCESS_TOKEN, token);
            Storage.set(CURRENT_USER, userInfo);
            commit('SET_TOKEN', token);
            commit('SET_USERINFO', userInfo);
          }
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
