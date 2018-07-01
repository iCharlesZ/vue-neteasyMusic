import Vue from 'vue'
import Vuex from 'vuex'
import Sidebar from './modules/sidebar.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    allInfo: []
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    sideBar: Sidebar
  }
})

export default store