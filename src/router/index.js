import Vue from 'vue'
import Router from 'vue-router'
import MyMusic from '@/components/mymusic/mymusic.vue'
import FindMusic from '@/components/findmusic/findmusic.vue'  
import Findrecommend from '@/components/findrecommend/findrecommend.vue'
import Findsheet from '@/components/findsheet/findsheet.vue'
import Findradio from '@/components/findradio/findradio.vue'
import Community from '@/components/community/community.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	redirect: '/mymusic'
    },
    {
      	path: '/mymusic',
      	component: MyMusic
    },
    {
		    path: '/findmusic',
      	component: FindMusic,
        children: [
          {
              path: '',
              redirect: '/findmusic/findrecommend'
          },
          {
              path: '/findmusic/findrecommend',
              component: Findrecommend
          },
          {
              path: '/findmusic/findsheet',
              component: Findsheet
          },
          {
              path: '/findmusic/findradio',
              component: Findradio
          }
        ]
    },
    {
        path: '/community',
        component: Community
    }
  ]
})
