<template>
	<div class="mymusic">
		<list name="本地音乐" iconinfo="icon-music" count="1" :playing="true"></list>
		<list name="最近播放" iconinfo="icon-zuijinplay" count="0"></list>
		<list name="下载管理" iconinfo="icon-zuijinplay" count="0"></list>
		<list name="我的电台" iconinfo="icon-diantai" count="0"></list>
		<list name="我的收藏" iconinfo="icon-collect" count="0"></list>
		<musicsheet v-for="(item, index) in items" :item="item" :index="index" :key="index"/>	
		<menulist/>
	</div>
</template>

<script>
import list from '../list/list.vue'
import musicsheet from '../musicsheet/musicsheet.vue'
import menulist from '../menulist/menulist.vue'

export default{
	data(){
		return{
			items: []
		}
	},
	methods: {
		createSongSheet() {
	        this.$http.get('http://bird.ioliu.cn/v1?url=https://www.ugmax.cn/vuedata/createSongSheet.json')
	        	.then((res) => {
	        		// console.log(res.data)
	        		this.items = res.data
	        	})
	        	.catch(function(error){
	        		console.log(error)
	        	})
	    }
	},
	components: {
		list,
		musicsheet,
		menulist
	},
	mounted() {
	    this.createSongSheet()
	}
}
</script>

<style scoped>
	.mymusic {
		position: fixed;
		background: #fff;
		overflow: auto;
		top: 50px;
		bottom: 46px;
		left: 0;
		right: 0;
		z-index: 9;
		-webkit-overflow-scrolling:touch;
	}
</style>