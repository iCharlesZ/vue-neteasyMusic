<template>
  <div id="app">
  	<v-header :index="2"></v-header>
    <side-bar :info="info"></side-bar>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import sidebar from './components/sidebar/sidebar.vue'
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
    'side-bar': sidebar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./assets/font-icon/style.css"
@import "common/stylus/global.styl"

body,html
  margin:0
  padding:0

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
</style>
