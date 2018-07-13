<template>
  <div id="app">
  	<v-header :index="2"></v-header>
    <side-bar :info="info"></side-bar>
    <bottom-bar></bottom-bar>
    <song-sheet></song-sheet>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import sidebar from './components/sidebar/sidebar.vue'
import bottombar from './components/bottombar/bottombar.vue'
import songsheet from './components/songsheet/songsheet.vue'
import Vue from 'vue'
import store from './store'

export default {
  data () {
    return {
      info: {}
    }
  },
  components: {
  	'v-header': header,
    'side-bar': sidebar,
    'bottom-bar': bottombar,
    'song-sheet': songsheet
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./assets/font-icon/style.css"

body,html
  margin:0
  padding:0

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
</style>
