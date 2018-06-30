<template>
  <div id="app">
  	<v-header></v-header>
  </div>
</template>

<script>
import header from './components/header/header.vue'

export default {
  components: {
  	'v-header': header
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
