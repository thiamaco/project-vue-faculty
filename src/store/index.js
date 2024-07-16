// store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false
  },
  mutations: {
    setIsAuthenticated(state, status) {
      state.isAuthenticated = status;
    }
  },
  actions: {
    updateIsAuthenticated({ commit }, status) {
      commit('setIsAuthenticated', status);
    }
  },
  getters: {
    getIsAuthenticated: state => state.isAuthenticated
  }
})
