const state = {
  collapsed: false
};

const getters = {
  collapsed: state => state.collapsed
};

const mutations = {
  TOGGLE_COLLAPSED: state => {
    state.collapsed = !state.collapsed;
  }
};

const actions = {
  toggleCollapsed({ commit }) {
    commit('TOGGLE_COLLAPSED');
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
