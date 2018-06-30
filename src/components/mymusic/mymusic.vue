<template>
	<div class="mymusic">
		<list name="本地音乐" iconinfo="icon-music" count="28" :playing="true"></list>
		<list name="最近播放" iconinfo="icon-zuijinplay" count="8"></list>
		<list name="下载管理" iconinfo="icon-zuijinplay" count="8"></list>
		<list name="我的电台" iconinfo="icon-diantai" count="2"></list>
		<list name="我的收藏" iconinfo="icon-collect" count="3"></list>
		<musicsheet/>	
	</div>
</template>

<script>
import list from '../list/list.vue'
import musicsheet from '../musicsheet/musicsheet.vue'
export default{
	data(){
		return{
			
		}
	},
	components: {
		list,
		musicsheet
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