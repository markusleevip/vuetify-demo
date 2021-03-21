import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName : "",
    avatarTitle : ""
  },
  mutations: {
    setUserName(state,userName) {
      state.userName = userName;
    },
    setAvatarTitle(state, value) {
      state.avatarTitle = value;
    }
  },
  actions: {
  },
  modules: {
    getters
  }
})
