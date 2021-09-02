import Vue from 'vue';
import Vuex from 'vuex';
import layout from './modules/layout';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    layout,
    user
  }
});

export default store;
