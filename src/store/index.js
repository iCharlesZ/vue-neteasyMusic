import Vue from 'vue'
import Vuex from 'vuex'
import Sidebar from './modules/sidebar.js'
import AudioInfo from './modules/audio.js'
import MenuList from './modules/menulist.js'

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
    sideBar: Sidebar,
    audioInfo: AudioInfo,
    menuList: MenuList
  }
})

export default store