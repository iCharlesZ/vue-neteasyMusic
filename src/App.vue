<template>
  <div id="app">
    <audio 
      id="myaudio" 
      ref="audio"
      @playing="musicOnPlaying"
      @pause="musicOnPause"
      @timeupdate="musicTimeUpdate"
      @canplay="musicCanPlay"></audio>
  	<v-header :index="2"></v-header>
    <side-bar :info="info"></side-bar>
    <bottom-bar></bottom-bar>
    <song-sheet></song-sheet>
    <music-detail></music-detail>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import sidebar from './components/sidebar/sidebar.vue'
import bottombar from './components/bottombar/bottombar.vue'
import songsheet from './components/songsheet/songsheet.vue'
import musicdetail from './components/musicdetail/musicdetail.vue'
import Vue from 'vue'
import store from './store'

export default {
  data () {
    return {
      info: {}
    }
  },
  methods: {
    // 可以播放事件
    musicCanPlay () {
      // console.log(this.$refs.audio.duration)
      store.dispatch({
        type: 'set_MusicDuration',
        duration: Math.floor(this.$refs.audio.duration)
      })
    },
    // 音乐播放时间更新事件
    musicTimeUpdate () {
      // console.log(this.$refs.audio.currentTime)
      store.dispatch({
        type: 'set_CurrentTime',
        time: Math.floor(this.$refs.audio.currentTime)
      })
    },
    // 音乐处于播放状态
    musicOnPlaying () {
      store.commit('play')
    },
    // 音乐处于暂停状态
    musicOnPause () {
      store.commit('pause')
    }
  },
  components: {
  	'v-header': header,
    'side-bar': sidebar,
    'bottom-bar': bottombar,
    'song-sheet': songsheet,
    'music-detail': musicdetail
  },
  created () {
    this.$http.get('https://bird.ioliu.cn/netease/song?id=28018072')
      .then((res) => {

        // 设置音乐的地址  初始化 根据vuex的currentIndex来决定
        this.$refs.audio.setAttribute('src', res.data.data.mp3.url)

        // 给audio元素存在vuex 的state里面  方便日后调用
        store.dispatch('set_AudioElement', this.$refs.audio)

      })
      .catch(function(error){
        console.log(error)
      })
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
